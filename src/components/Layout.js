import React from "react"
import {  Container, Typography, Divider } from '@material-ui/core';
import Header from "./header";
import Body from "./Body";


class Layout extends React.Component 
{
    constructor() 
    {
        super()
        this.state = 
        {
            
        }
    }

  render() {

    return (    
        <Container maxWidth="sm" style={{textAlign:"center"}}>        
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>

            <Header/>            
            <Divider/>

            <Body>
                {this.props.children}
            </Body>
            </Typography>
        </Container>    
    )
  }
}

export default Layout