import React, { useState, Component } from "react";
import { Drawer, makeStyles, Button, IconButton, List, Container, Grid, Box, ListItem, Fab, Avatar, ListItemSecondaryAction, Divider } from "@material-ui/core"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from "./TodoItem";


const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const reorder = (list, startIndex, endIndex) => {
    console.log(list)
    const result = list;
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class TodoCategory extends Component
{
    constructor(props)
    {
        super(props)
        //const [data, SetData] = useState([0,1]);
        this.props = props;

        this.state = {
            droppable1: [1,2,3],
            droppable2: [11,12,13],
            droppable3: [21,22,23]
        };

        this.id2List = {
            droppable1: 'droppable1',
            droppable2: 'droppable2',
            droppable3: 'droppable3'
        };


        this.getList = (id) => (
            this.state[this.id2List[id]]
        );

        this.onDragEnd = result => {
            const { source, destination } = result;
    
            if (!destination) {
                return;
            }
    
            if (source.droppableId === destination.droppableId) {
                const items = reorder(
                    this.getList(source.droppableId),
                    source.index,
                    destination.index
                );
    
                let state = { items };
    
                if (source.droppableId === 'droppable2') {
                    state = { droppable2: items };
                }
    
                this.setState(state);
            } else {
                const result = move(
                    this.getList(source.droppableId),
                    this.getList(destination.droppableId),
                    source,
                    destination
                );
    
                this.setState({
                    droppable1: result.droppable1,
                    droppable2: result.droppable2
                });
            }
        };
    }

    render() {
        const data = [0,1,2]

          return(
            <>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Box style={{width: "100%", display:"flex"}} >
                    <Box p={2} flexGrow={1}>
                        <span style={{color:"#3E52AF"}}>
                            TODO
                        </span>
                    </Box>
                    <Box style={{ display:"flex", verticalAlign:"bottom" }}>
                        <IconButton>
                            <Box>
                                <Avatar style={{ width:20, height:20, fontSize:12, backgroundColor:"#3E52AF"}}>
                                    {data.length}
                                </Avatar>
                            </Box>
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                <Droppable droppableId="droppable1" >
                    {(provided, snapshot) => (
                        <div style={{padding : 0}} ref={provided.innerRef}>
                        <List style={{padding:0}}>
                            {this.state.droppable1.map((item, index) => (
                            <Draggable key={item.toString()} draggableId={item.toString()} index={index}>
                                {(provided, snapshot) => (
                                <ListItem innerRef ={provided.innerRef}                                    
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>                                    
                                    <TodoItem data ={item}/>
                                    {provided.placeholder}
                                </ListItem>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </List>
                        </div>
                    )}
                    </Droppable>
                </Box>
                <Divider/>
                <Box style={{width: "100%", display:"flex"}} >
                    <Box p={2} flexGrow={1}>
                        <span style={{color:"#3E52AF"}}>
                            TODO
                        </span>
                    </Box>
                    <Box style={ {padding:0, display:"flex", verticalAlign:"bottom" }}>
                        <IconButton>
                            <Box>
                                <Avatar style={{ width:20, height:20, fontSize:12, backgroundColor:"#3E52AF"}}>
                                    {data.length}
                                </Avatar>
                            </Box>
                        </IconButton>
                    </Box>
                </Box>                
                <Box style={{padding:0}}>
                <Droppable droppableId="droppable2" >
                    {(provided, snapshot) => (
                        <div style={{padding : 1}} ref={provided.innerRef}>
                        <List style={{padding:0}}>
                            {this.state.droppable2.map((item, index) => (
                            <Draggable key={item.toString()} draggableId={item.toString()} index={index}>
                                {(provided, snapshot) => (
                                <ListItem innerRef ={provided.innerRef}                                    
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>                                    
                                    <TodoItem data ={item}/>
                                    {provided.placeholder}
                                </ListItem>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </List>
                        </div>
                    )}
                    </Droppable>
                </Box>
                <Divider/>
                <Box style={{width: "100%", display:"flex"}} >
                    <Box p={2} flexGrow={1}>
                        <span style={{color:"#3E52AF"}}>
                            TODO
                        </span>
                    </Box>
                    <Box style={{ display:"flex", verticalAlign:"bottom" }}>
                        <IconButton>
                            <Box>
                                <Avatar style={{ width:20, height:20, fontSize:12, backgroundColor:"#3E52AF"}}>
                                    {data.length}
                                </Avatar>
                            </Box>
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                <Droppable droppableId="droppable3" >
                    {(provided, snapshot) => (
                        <div style={{padding : 1}} ref={provided.innerRef}>
                        <List style={{padding:0}}>
                            {this.state.droppable3.map((item, index) => (
                            <Draggable key={item.toString()} draggableId={item.toString()} index={index}>
                                {(provided, snapshot) => (
                                <ListItem innerRef ={provided.innerRef}                                    
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>                                    
                                    <TodoItem data ={item}/>
                                    {provided.placeholder}
                                </ListItem>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </List>
                        </div>
                    )}
                    </Droppable>
                </Box>
                <Divider/>
            </DragDropContext>
            </>
        )
    }
}


export default TodoCategory;






// function MyReducer(state = 0, action) {
//     console.log("action.type : ", action.type)
//     switch (action.type) {
//     case 'OPEN':
//       return false;
//     case 'CLOSE':
//       return true;
//     default:
//       return false;
//     }
//   }

// const useStyles = makeStyles({
//     root: {
//       width: "100%",
//       display:"flex",
//     },
// });

// let store = createStore(MyReducer);

// class TodoCategory extends Component
// {
//     constructor(prop)
//     {
//         super(prop);
//         this.prop = prop;
//         //this.qwe1 = this.qwe1.bind(this);
//         //this.qwe2 = this.qwe2.bind(this);

//         //const datas = prop.datas;
//         //const title = prop.title;
//         //const [state, SetState] = useState(true);
//     }



//     render()
//     {
//         const {title} = this.prop;

//         return(
//             <>

//              <Box style={{width:"100%", display:"flex"}} >
//                     <Box p={2} flexGrow={1} style={{border:"1px solid red"}}
//                     // onClick={()=>{  }
//                     >
//                         {title}
//                     </Box>
//                     <Box>
//                         <IconButton onClick = { this.qwe1 }>
//                             <AddIcon color="primary"/>
//                         </IconButton>
//                     </Box>
//                 </Box>

//                 <Box hidden={!store.getState()}>
//                     <List>
//                         <ListItem button>
//                             1 Item
//                         </ListItem>
//                         <ListItem button>
//                             2 Item
//                         </ListItem>
//                         <ListItem button>
//                             3 Item
//                         </ListItem>
//                     </List>
//                 </Box>
//             </>
//         )
//     }
// }
