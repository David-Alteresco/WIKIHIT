import { store } from 'react-easy-state';
 
export const wiki = store({
    nodeUrl : undefined,
    nodes:[
        {id: '1', type: 'input', data: {label: 'Node', url:'https://en.wikipedia.org/wiki/50_Cent'}, position: {x: 0, y: 0}},
        {id: '2', type: 'input', data: {label: 'King David', url:'https://en.wikipedia.org/wiki/David'}, position: {x: 100, y: 100}},
    ],
    wikiHtml: null,
});