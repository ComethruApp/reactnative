import { useNavigate } from 'react-router-native';

import storage from './Storage';
import httpService from './HTTPService';
import authService from './AuthService';


export default class APIService {
    /*
    let navigate = useNavigate();

    constructor(
        httpClient: HttpClient,
        storage: Storage,
        authService: AuthService,
    ) { }

    ops(token: string): Object {
        return {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
        };
    }

    req(f) {
        let storagePromise = from(this.storage.get('TOKEN'));

        return storagePromise.mergeMap(f)
        .catch(error => {
            if (error.status == 401) {
                // We were denied due to lack of authentication, so let the user log in again.
                this.authService.logout();
            }
            return Promise.throw(error);
        });
    }
    get(path: string): Promise<any> {
        return this.req(token => this.httpClient.get(this.ROOT + path, this.ops(token)));
    }
    post(path: string, data: any): Promise<any> {
        return this.req(token => this.httpClient.post(this.ROOT + path, data, this.ops(token)));
    }
    delete(path: string): Promise<any> {
        return this.req(token => this.httpClient.delete(this.ROOT + path, this.ops(token)));
    }
    put(path: string, data: any): Promise<any> {
        return this.req(token => this.httpClient.put(this.ROOT + path, data, this.ops(token)));
    }


    // Miscellaneous
    heartbeat(): Promise<Object> {
        return this.get('/heartbeat');
    }

    sendLocation(lat: number, lng: number): Promise<Object> {
        return this.post('/location', {lat: lat, lng: lng});
    }

    getStatus(): Promise<Object> {
        return this.get('/status');
    }

    getSafetyNumbers(): Promise<Object> {
        return this.get('/safety');
    }

    uploadImage(image: any): Promise<any> {
        return this.req(token => {
            let path: string = '/image';
            let ops = this.ops(token);
            ops['headers'] = ops['headers'].set('Content-Type', 'image/jpeg');
            return this.httpClient.post(this.ROOT + path, image, ops);
        });
    }

    // Users
    getUser(userId: number): Promise<User> {
        return this.get('/users/' + userId)
        .map(response => new User(response));
    }

    getMe(): Promise<User> {
        return this.get('/users/me')
        .map(response => new User(response));
    }

    updateMe(user: User){
        return this.put('/users/me', user)
        .map(response => new User(response));
    }

    updatePassword(oldPassword: string, newPassword: string) {
        return this.put('/users/me/password', {old_password: oldPassword, new_password: newPassword});
    }

    searchUsers(query: string): Promise<User[]> {
        return this.get('/users/search/' + query)
        .map(response => response.map(user => new User(user)));
    }

    // TODO this function should be merged with something else if possible... feels like a hack
    searchUsersForEvent(eventId: number, query: string): Promise<User[]> {
        return this.get('/events/' + eventId + '/invites/search/' + query)
        .map(response => response.map(user => new User(user)));
    }

    blockUser(userId: number): Promise<Object> {
        return this.post('/users/' + userId + '/block', {});
    }

    unblockUser(userId: number): Promise<Object> {
        return this.delete('/users/' + userId + '/block');
    }

    facebookConnect(id: string, name: string): Promise<Object> {
        return this.post('/users/me/facebook', {id: id, name: name});
    }
    facebookDisconnect(): Promise<Object> {
        return this.delete('/users/me/facebook');
    }

    getFriendRequests(): Promise<User[]> {
        return this.get('/friends/requests')
        .map(response => response.map(user => new User(user)));
    }

    // Used by request's sender
    createFriendRequest(userId: number): Promise<Object> { return this.post('/friends/' + userId + '/request', {}); }
    cancelFriendRequest(userId: number): Promise<Object> { return this.post('/friends/' + userId + '/cancel', {}); }
    // Used by request's receiver
    acceptFriendRequest(userId: number): Promise<Object> { return this.post('/friends/' + userId + '/accept', {}); }
    rejectFriendRequest(userId: number): Promise<Object> { return this.post('/friends/' + userId + '/reject', {}); }

    getFriends(): Promise<User[]> {
        return this.get('/friends')
        .map(response => response.map(user => new User(user)));
    }

    deleteFriend(userId: number): Promise<Object> {
        return this.post('/friends/' + userId + '/remove', {});
    }

    getFacebookFriends(): Promise<User[]> {
        return this.get('/friends/facebook')
        .map(response => response.map(user => new User(user)));
    }


    // Events
    getEvents(): Promise<Event_[]> {
        return this.get('/events')
        .map(response => response.map(event => new Event_(event)));
    }

    getEvent(eventId: number): Promise<Event_> {
        return this.get('/events/' + eventId)
        .map(response => new Event_(response));
    }

    createEvent(event: Event_): Promise<Event_> {
        return this.post('/events', event)
        .map(response => new Event_(response));
    }

    updateEvent(eventId: number, event: Event_): Promise<Event_> {
        return this.put('/events/' + eventId, event)
        .map(response => new Event_(response));
    }

    deleteEvent(eventId: number): Promise<Object> {
        return this.delete('/events/' + eventId);
    }

    endEvent(eventId: number): Promise<Object> {
        return this.post('/events/' + eventId + '/end', {});
    }

    addTag(eventId: number, tagName: string): Promise<Object> {
        return this.post('/events/' + eventId + '/tags/' + tagName, {});
    }

    removeTag(eventId: number, tagName: string): Promise<Object> {
        return this.delete('/events/' + eventId + '/tags/' + tagName);
    }

    searchTags(query: string): Promise<string[]> {
        return this.get('/tags/search/' + query);
    }

    getUserEvents(userId: number): Promise<Event_[]> {
        return this.get('/users/' + userId + '/events')
        .map(response => response.map(event => new Event_(event)));
    }
    getMyEvents(): Promise<Event_[]> {
        return this.get('/users/me/events')
        .map(response => response.map(event => new Event_(event)));
    }

    getEventFriends(eventId: number): Promise<User[]> {
        return this.get('/events/' + eventId + '/friends')
        .map(response => response.map(event => new User(event)));
    }

    getUserCurrentEvents(userId: number): Promise<Event_[]> {
        return this.get('/users/' + userId + '/events/current')
        .map(response => response.map(event => new Event_(event)));
    }
    getMyCurrentEvents(): Promise<Event_[]> {
        return this.get('/users/me/events/current')
        .map(response => response.map(event => new Event_(event)));
    }

    getEventInvites(eventId: number): Promise<User[]> {
        return this.get('/events/' + eventId + '/invites')
        .map(response => response.map(user => new User(user)));
    }

    sendInvite(eventId: number, userId: number): Promise<Object> {
        return this.post('/events/' + eventId + '/invites/' + userId, {});
    }

    cancelInvite(eventId: number, userId: number): Promise<Object> {
        return this.delete('/events/' + eventId + '/invites/' + userId);
    }

    getEventHosts(eventId: number): Promise<User[]> {
        return this.get('/events/' + eventId + '/hosts')
        .map(response => response.map(user => new User(user)));
    }

    addHost(eventId: number, userId: number): Promise<Object> {
        return this.post('/events/' + eventId + '/hosts/' + userId, {});
    }

    removeHost(eventId: number, userId: number): Promise<Object> {
        return this.delete('/events/' + eventId + '/hosts/' + userId);
    }

    createReview(eventId: number, positive: boolean, negative: boolean, body: string): Promise<Object> {
        return this.post('/events/' + eventId + '/reviews', {positive: positive, negative: negative, body: body});
    }

    deleteReview(eventId: number): Promise<Object> {
        return this.delete('/events/' + eventId + '/reviews');
    }

    getEventReviews(eventId: number): Promise<Review[]> {
        return this.get('/events/' + eventId + '/reviews')
        .map(response => response.map(review => new Review(review)));
    }

    getUpdates(eventId: number): Promise<Update[]> {
        return this.get('/events/' + eventId + '/updates')
        .map(response => response.map(update => new Update(update)));
    }

    getUpdate(eventId: number, updateId: number): Promise<Update> {
        return this.get('/events/' + eventId + '/updates/' + updateId)
        .map(response => new Update(response));
    }

    createUpdate(eventId: number, update: Update): Promise<Update> {
        return this.post('/events/' + eventId + '/updates', update)
        .map(response => new Update(response));
    }

    updateUpdate(eventId: number, updateId: number, update: Update): Promise<Update> {
        return this.put('/events/' + eventId + '/updates/' + updateId, update)
        .map(response => new Update(response));
    }

    deleteUpdate(eventId: number, updateId: number): Promise<Update> {
        return this.delete('/events/' + eventId + '/updates/' + updateId);
    }
    */
}

export default apiService = new APIService();
