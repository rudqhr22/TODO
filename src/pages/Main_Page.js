import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Fab, Container, TextField, Grid, CssBaseline, Divider } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import TodoAddButton from "../components/TodoAddButton";
import TodoCategory from "../components/TodoCategory";

let list = [];


class Main_Page extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = 
        {

        }
    }

  render() {

    return (
    <Layout>

      {/* <Container style={{borderBottom:"1px solid blue"}}>
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
      </Container> */}

      <TodoAddButton></TodoAddButton>

      <TodoCategory data={list}/>

    </Layout>
    )
  }
}

export default Main_Page