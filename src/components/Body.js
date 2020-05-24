import React from "react"
import { Button, Container } from '@material-ui/core';


class Body extends React.Component 
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
    <Container maxWidth="sm" style={{margin:0}}>       
      {this.props.children}
    </Container>
    )
  }
}

export default Body