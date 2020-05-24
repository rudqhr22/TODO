import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { TextField, Button } from '@material-ui/core';


class Login_Page extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = props.appState;       
        
        console.log(props)
    }

    render() {

      return (
      <Layout>
          <h2>
              LOGIN PAGE
          </h2>
          <TextField
            id="standard-id-input"
            label="Id"
            type="text"
          />
          <p/>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <p/>
          <Button variant="contained" color="primary">
              <Link to = "Loading_Page" style={{textDecoration:"none", color:"white" }}>
                  ENTER           
              </Link>            
          </Button>
      </Layout>
      )
    }
}

export default Login_Page