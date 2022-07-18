import Constants from '../Constants';

class HTTPService {

    get(path: string) {
        //return fetch(token => this.httpClient.get(this.ROOT + path, this.ops(token)));
        return fetch(Constants.HOST+ '/' + path, {
            method: 'GET',
        });
    }
    post(path: string, data: any) {
        //return fetch(token => this.httpClient.post(this.ROOT + path, data, this.ops(token)));
        return fetch(Constants.HOST + '/' + path, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
    delete(path: string) {
        //return fetch(token => this.httpClient.delete(this.ROOT + path, this.ops(token)));
    }
    put(path: string, data: any) {
        //return fetch(token => this.httpClient.put(this.ROOT + path, data, this.ops(token)));
    }
}

export default httpService = new HTTPService();
