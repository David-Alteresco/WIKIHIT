import { wiki, edgeProperties } from '../stores';
import edgePosition from './getNodePositionById'; 

const updateEdgeDeatils = () => {
    try {
        const index = edgePosition();
        edgeProperties.labelStyle.fontWeight = wiki.nodes[index].labelStyle.fontWeight;
        edgeProperties.stroke = wiki.nodes[index].style.stroke;
        edgeProperties.labelStyle.fill = wiki.nodes[index].labelStyle.fill;
        edgeProperties.type = wiki.nodes[index].type;
        edgeProperties.label = wiki.nodes[index].label;

    }catch(err){
        console.log(`update edge is failed error: ${err}`);
    }
};

export default updateEdgeDeatils;