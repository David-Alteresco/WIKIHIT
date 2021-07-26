
import { wiki } from '../stores';

const nodePosition = () => {
    try {
        if(wiki.currentId !== null){
            for (let i = 0; i < wiki.nodes.length; i++) {
                if (wiki.nodes[i].id === wiki.currentId) {
                    return i;
                };
            };
        }else{
            return null;
        }
    }catch(err){
        console.log(`can't get node current id ${wiki.currentId} error:${err}`);
    }
};

export default nodePosition;
