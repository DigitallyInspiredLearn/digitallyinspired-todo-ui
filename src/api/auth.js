import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const registration = (newUser) => {
    axios.post('/api/auth/register', newUser)
        .then((response) => {
            if (response.status === 201) {
                console.log('Successful registration!');
            } else {
                console.log('Failed registration');
            }
        });
};

export const authorization = userInfo => axios.post('/api/auth/login', userInfo);
