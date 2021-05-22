import React , {useState, Fragment, useEffect } from 'react';
import ReactFlow, {Background, Controls, MiniMap, useStoreActions  } from 'react-flow-renderer';
import { wiki } from '../stores';
import getWikiHtml from './getWikiHtml';
import { view } from 'react-easy-state';


const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

export default view(() => {
    const [name, setName] = useState("");
    const onElementClick =  async (event, element) => {
        event.preventDefault();
        try{
            if(element.data.title != null){
                wiki.currentId = element.id;
                await getWikiHtml(element.data.title);
            }
        }catch(err){
            console.log(err + 'function');
        }
        
    };

    const addNode = () => {
        wiki.nodes.push({id:((wiki.nodes.length)+1).toString(), data: {label: `${name}`, title: null}, position: {x: 150, y: 150}});
    };


    const SetElements = () => {
        const setElements = useStoreActions(actions => actions.setElements);
        useEffect(() => {
            setElements(wiki.nodes);
        }, []);
      
        return null;
      };

      const onConnect = (params) => (wiki.nodes.push({id:((wiki.nodes.length)+1).toString(), source: params.source, target: params.target, animated: false}));
      
    return(
        <Fragment>
            <ReactFlow
            onElementClick={onElementClick}
            elements={wiki.nodes}
            onLoad={onLoad}
            onConnect={onConnect}
            style={{width :'100%', height: '78vh'}}
            connectionLineStyle={{stroke: '#ddd', strokeWidth: 2}}
            connectionLineType = 'bezier'
            snapToGrid= {true}
            snapGrid={[16,16]}
            >
            <p>Number of Nodes: {wiki.nodes.length}</p>
            <SetElements/>
            <Background 
                color = "#888"
                gap={16}
            />
            <MiniMap    
            nodeColor={n=>{
                if(n.type === 'input') return 'blue';
                return '#FFCC00';
            }} />
            <Controls/>
            </ReactFlow>
            <div>
                <input type="text"
                onChange={e => setName(e.target.value)}
                name="title" />
                <button type="button" 
                onClick = {addNode}
                >add node</button>
            </div>
            
        </Fragment>
    )
});
