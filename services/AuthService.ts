import { useNavigate } from 'react-router-router';

import storage from './Storage';
import httpService from './HTTPService';


class AuthService {
    /*
    let navigate = useNavigate();

    const ROOT: string = 'auth';
    */

    register(user) {
        return httpService.post(ROOT + '/register', {
            method: 'POST',
            body: JSON.stringify(user),
        });
    }

    login(user) {
        return httpService.post(ROOT + '/login', user)
            .then((response) => {
                if (response.user) {
                    storage.save({key: 'token', data: response.user.token});
                    //this.oneSignal.setExternalUserId(response.user.id.toString());
                }
            });
    }

    async logout() {
        await storage.remove({key: 'token'});
        // Remove navigation stack so next user to log in won't see this user's views
        //this.router.initialNavigation();
        navigate('/auth');
    }

    isLoggedIn() {
        // Check if user has logged in.
        // Note that this does not check if the token we have is actually valid.
        return storage.load({key: 'token'})
            .then(token => {
                return token != null;
            });
    }

    resetPassword(payload) {
        return httpService.post(ROOT + '/reset_password_request', payload);
    }
}

export default authService = new AuthService();
