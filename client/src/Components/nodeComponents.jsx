import React , {useState, Fragment , useEffect } from 'react';
import ReactFlow, {Background, Controls, MiniMap, useStoreActions } from 'react-flow-renderer';
import { wiki } from '../stores';
import getWikiHtml from './getWikiHtml';
import { view } from 'react-easy-state';
import isNodeOrEdge from './isNodeOrEdge';
import updateNodeDeatils from './updateNodeDeatils';
import updateEdgeDeatils from './updateEdgeDeatils';
import { newNode } from '../stores';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();

    const getChartData = async () =>{
        try{
            const chartData = await axios.post(`${process.env.REACT_APP_API_KEY}api/Main`,{ projectId: wiki.projectId });
            const chartStringToArray = JSON.parse(chartData.data[0].data);
            chartStringToArray.map((el => {
                wiki.nodes.push(el);
            }));
        }catch(error){
           console.log(`Api call to get chart is not supported error: ${error} `);
        }
    };

    getChartData();
    

}

export default view(() => {
    const classes = useStyles();

    const onElementClick =  async (event, element) => {
        event.preventDefault();
        console.log(element.id);
        wiki.currentId = element.id;
        if(isNodeOrEdge() === 'node'){
            updateNodeDeatils();
            try{
                if(element.data.title !== null && element.data.title !== 'No Title'){
                    await getWikiHtml(element.data.title);
                }else{
                    wiki.wikiHtml = 'No Title';
                }
            }catch(err){
                console.log(err + 'function');
            }
            console.log(wiki.currentId);
        }else{
            updateEdgeDeatils();
            
        }
    };

    const addNode = () => {
        wiki.nodes.sort((a,b) => a.id - b.id);
        wiki.nodes.push({
        id:(parseInt(wiki.nodes[wiki.nodes.length - 1].id) + 1).toString(),
        "data": {"label": newNode.name, "title": "No Title"},
        "position": {"x": 150, "y": 150}, "background": "white"});
        newNode.name = '';
        wiki.wikiHtml = 'No Title';
        wiki.currentId = (wiki.nodes.length).toString();
    };

    const SetElements = () => {
        console.log(wiki.nodes);
        const setElements = useStoreActions(actions => actions.setElements);
        setElements(wiki.nodes);
        return null;
    };

      const onConnect = (params) => {
        
        console.log('onConnect');
        wiki.nodes.sort((a,b) => a.id - b.id);
        (wiki.nodes.push({
        id:(parseInt(wiki.nodes[wiki.nodes.length - 1].id) + 1).toString(),
        source: params.source,
        target: params.target,
        type:'',
        style: { stroke: '#000000' },
        label: 'New edge',
        animated: false,
        labelStyle: { fill: '#000000', fontWeight: ''}
            }
        ));
    };

    const saveChart = async () => {
        try{
            await axios.put(`http://localhost:3001/api/Main/saveChart`,{nodes: wiki.nodes, projectId: wiki.projectId })
            .then( () => {
                alert('Success! save chart');
            });
        }catch(error){
           console.log(`Someting got wrong woth the save please tray again: ${error} `);
        }
    };
      
    return wiki.stop ? null : (
        <Fragment>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick = {saveChart}
            >save</Button>
            <ReactFlow
            onElementClick={onElementClick}
            elements={wiki.nodes}
            onLoad={onLoad}
            onConnect={onConnect}
            style={{width :'100%', height: '78vh'}}
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
                onChange={e => newNode.name = e.target.value}
                name="title" 
                value={newNode.name}
                />
                <button type="button" 
                onClick = {addNode}
                >add node</button>
            </div>
        </Fragment>
    );
});
