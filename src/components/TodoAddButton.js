import React, { useState, useEffect } from "react";
import { Fab, TextField, IconButton, Box, } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        width : "100%",
        display:"flex",

    },
    tf: {
        marginTop: 23,
        color: "white",
        verticalAlign:"bottom",
    },
    input:{
        fontSize:20
    },
    wapper:{                
        width:"100%",
        backgroundColor:"white",
        borderTop:"1px solid gray",
        zIndex:10
    }
});

const TodoAddButton = (prop) => {
    const classes = useStyles();
    const [Text, SetText] = useState("");

    return (
        <div className={classes.wapper}>
            <Box className={classes.root}>
            <Box flexGrow={0}  style={{  paddingLeft:10}}>
                    <TextField
                        className={classes.tf}
                        InputProps={{
                            classes:{
                                input:classes.input
                            },
                            disableUnderline: true,
                            style:{
                                height: 14,
                            }
                        }}
                        onChange={(e)=>{ SetText(e.target.value) }}
                        placeholder= {"할 일 추가하기"}
                        value={Text}
                        fullWidth={true}
                    />
                </Box> 
                <Box p={1} style={{ textAlign:"center"}}>
                    <IconButton color="primary" size={"small"} onClick={(e) => {
                        // test(e.clientX)
                    }}>
                    <AddCircleOutlineIcon fontSize={"large"}/>
                    </IconButton>
                </Box>
         
            </Box>
        </div>
    );
};

export default TodoAddButton;
