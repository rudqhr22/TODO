import React from "react"
import { Button, Container } from '@material-ui/core';
import { Link } from "gatsby";

class Header extends React.Component 
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
    <Container maxWidth="sm"> 

      <Button>
        <Link to = "Login_Page" style={{textDecoration:"none", color:"Black" }}>
          Login
        </Link>
      </Button>

      <Button>
        <Link to = "Loading_Page" style={{textDecoration:"none", color:"Black" }}>
          Loading
        </Link>
      </Button>

      <Button>
        <Link to = "Main_Page" style={{textDecoration:"none", color:"Black" }}>
          Main
        </Link>
      </Button>

    </Container>
    )
  }
}

export default Header