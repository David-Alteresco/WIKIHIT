import { store } from 'react-easy-state';
 
export const wiki = store({
    nodeUrl : undefined,
    nodes:[
        {id: '1', type: 'input', data: {label: '50 Cent', title:'50_Cent'}, position: {x: 0, y: 0}},
        {id: '2', type: 'input', data: {label: 'King David', title:'David'}, position: {x: 100, y: 100}},
        {id: '3' ,source: '1', target: '2', animated: false},
    ],
    wikiHtml: null,
    currentId:null,
});