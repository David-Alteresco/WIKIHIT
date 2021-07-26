import { wiki, nodeProperties } from '../stores';
import nodePosition from './getNodePositionById'; 


const updateNodeDeatils = () => {
    try {
        const index = nodePosition();
        nodeProperties.nodeLabel = wiki.nodes[index].data.label;
        nodeProperties.fontWeight = wiki.nodes[index].style.fontWeight; 
        nodeProperties.nodeBackgroundColor = wiki.nodes[index].style.background;
        nodeProperties.nodeTextColor = wiki.nodes[index].style.color;
        const borderParts = wiki.nodes[index].style.border.split(' ');
        nodeProperties.borderLineWidth = Number(borderParts[0].slice(0,-2));
        nodeProperties.borderShape = borderParts[1];
        nodeProperties.borderColor = borderParts[2];
    }catch(err){
        console.log(`update node is failed error: ${err}`);
    }
};

export default updateNodeDeatils;