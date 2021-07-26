import React , {useState } from 'react';
import { view } from 'react-easy-state';
import getWikiHtml from './getWikiHtml';
import { wiki } from '../stores';

export default view(() => {
    const [url, setUrl] = useState("");

    const addUrl = () => {
      if(url !==null){
        const directories = url.split("/");
        const lastDirecotry = directories[(directories.length - 1)];
        getWikiHtml(lastDirecotry);
        for (let i = 0; i < wiki.nodes.length; i++) {
            if (wiki.nodes[i].id === wiki.currentId) {
                if(wiki.nodes[i].hasOwnProperty('data')){
                    wiki.nodes[i].data.title = lastDirecotry;
                }
              break;
            };
          };
        setUrl('');
      }else{
         // TODO show error null is not part of the wiki search
      }
    };

    return (
        <div>
            <h1>Please insert WIKI url</h1>
            <input type="text"
            onChange={e => setUrl(e.target.value)}
            name="title" 
            value={url}
            />
            <button type="button" 
            onClick = {addUrl}
            >ADD</button>
        </div>
    );
  });
