import { useNavigate } from 'react-router-native';

import storage from './Storage';
import httpService from './HTTPService';


class AuthService {

    constructor() {
        this.ROOT = 'auth';
        //let navigate = useNavigate();
    }

    register(user) {
        return httpService.post(this.ROOT + '/register', {
            method: 'POST',
            body: JSON.stringify(user),
        });
    };

    login(user) {
        return httpService.post(this.ROOT + '/login', user)
            .then((response) => {
                if (response.user) {
                    storage.save({key: 'token', data: response.user.token});
                    //this.oneSignal.setExternalUserId(response.user.id.toString());
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    async logout() {
        await storage.remove({key: 'token'});
        // Remove navigation stack so next user to log in won't see this user's views
        //this.router.initialNavigation();
        //navigate('/auth');
    };

    isLoggedIn() {
        // Check if user has logged in.
        // Note that this does not check if the token we have is actually valid.
        return (await storage.load({key: 'token'}) != null);
    };

    resetPassword(payload) {
        return httpService.post(ROOT + '/reset_password_request', payload);
    };
}

export default authService = new AuthService();
