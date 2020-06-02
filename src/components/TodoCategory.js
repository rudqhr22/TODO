import React, { useState } from "react";
import { Drawer, makeStyles, Button, IconButton, List, Container, Grid, Box, ListItem, Fab, Avatar } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
      width: "100%",
      display:"flex",
      overflow:"hidden"
    
    },
});

const TodoCategory = (prop) => {

    const title = prop.title;
    const type = prop.type; //타입에 따라 오늘/내일/나중에 분류
    const classes = useStyles();

    //const [data, SetData] = useState([0,1]);
    

    const [state, SetState] = useState(0);

    function CheckState() {
        if(state == 0 && mydata.length > 0){ return 1; }
        else if(state == 1) { return 0; }
    }

    const data = [0,1,2]

    const mydata = data.map(e => (
         <ListItem button>

         </ListItem>
    ))


    return(
        <>
            <Box className={classes.root} >
                <Box p={2} flexGrow={1} onClick={()=>{
                        if(CheckState() == 1){ SetState(1); }
                        else SetState(0);
                    }}>
                    <span style={{color:"#3E52AF"}}>
                        {title}
                    </span>
                </Box>
                <Box style={{ display:"flex", verticalAlign:"bottom" }}>
                    <IconButton>
                        {/* <Box hidden={!state}>
                            <AddIcon color="primary"/>
                        </Box> */}
                        <Box hidden={mydata.length > 0 ? false : true }>
                            <Avatar style={{ width:20, height:20, fontSize:12, backgroundColor:"#3E52AF"}}>
                                {data.length}
                            </Avatar>
                        </Box>
                    </IconButton>
                </Box>
            </Box>
            <Box hidden={!state}>
            {/* <Box> */}
                <List>
                    <ListItem button>
                        1 Item
                    </ListItem>
                    <ListItem button>
                        2 Item
                    </ListItem>
                    <ListItem button>
                        3 Item
                    </ListItem>

                </List>
            </Box>

            {/* <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>

            <h1>asdasd</h1>

            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1> */}
        </>
    )
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
