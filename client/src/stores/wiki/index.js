import { store } from 'react-easy-state';
 
export const wiki = store({
    nodeUrl : undefined,
    nodes:[

      ],
    wikiHtml: null,
    currentId: null,
    projectId: null,
});