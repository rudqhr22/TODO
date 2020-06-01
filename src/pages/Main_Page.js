import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Fab, Container, TextField, Grid, CssBaseline, Divider } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';


//import { Fab } from "@material-ui/core"

class Main_Page extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = 
        {

        }

        // const [Array1, SetArray1] = useState([]);
        // const [Array2, SetArray2] = useState([]);
        // const [Array3, SetArray3] = useState([]);

    }

  render() {

    return (
    <Layout>

      <h2>
          Main PAGE
      </h2>
      <Container style={{borderBottom:"1px solid blue"}}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Fab color="primary" aria-label="add" size="small">
              <AddIcon/>
            </Fab>
          </Grid>
          <Grid item xs={6}>            
            <TextField/>
          </Grid>
        </Grid>
      </Container>

      <Container style={{textAlign:'left'}}>
        1
      </Container>
      <Container style={{textAlign:'left'}}>
        2
      </Container>
      <Container style={{textAlign:'left'}}>
        3
      </Container>
    </Layout>
    )
  }
}

export default Main_Page