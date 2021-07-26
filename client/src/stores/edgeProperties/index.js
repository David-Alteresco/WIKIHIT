import { store } from 'react-easy-state';
 
export const edgeProperties = store({
    type: '',
    stroke: '#000000',
    label: '',
    animated: false,
    labelStyle:{
        fill: '',
        fontWeight: ''
    },
});