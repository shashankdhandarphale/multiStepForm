import { getUserData } from '../utils';

export const userService = {
    register
};

function register(user) {
    
    const { payload } = user;
    console.log(JSON.stringify(user));
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    return fetch(`http://localhost:3004/user/register`, requestOptions).then(response => {
        return response;
    }).catch((ex) => {
            console.log('error');;
        });
}

