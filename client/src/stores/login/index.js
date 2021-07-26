import { store } from 'react-easy-state';
 
export const login = store({
    userName: null,
    password: null,
    userId: null,
    userValidtionMessage: false,
    isLogined: false,
});