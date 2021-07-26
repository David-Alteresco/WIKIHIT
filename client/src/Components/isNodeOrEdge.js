import { wiki } from '../stores';
import nodePosition from './getNodePositionById';

const isNodeOrEdge = () => {
    try {
        const position = nodePosition();
        if(position !== null){
            return wiki.nodes[position].data !== undefined ? 'node' : 'edge';
        }else{
            return position;
        }
        
    }catch(err){
        console.log(`can't get node current id ${wiki.currentId} error:${err}`);
    }
};

export default isNodeOrEdge;
