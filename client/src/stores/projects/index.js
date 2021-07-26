import { store } from 'react-easy-state';
 
export const projects = store({
    data:[],
    isInLocalStorage: true,
    openConfirmDelete: false,
    deleteConfirm: false,
});