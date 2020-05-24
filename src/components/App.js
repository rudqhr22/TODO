import React from "react"
//import { Button, Container } from '@material-ui/core';

import Login_Page from "../pages/Login_Page";
import Loading_Page from "../pages/Loading_Page";
import Main_Page from "../pages/Main_Page";

class App extends React.Component 
{
    constructor() 
    {
        super()
        this.state = {
            loading: false,
            page: 0
        };
    }

    render() {
        let isLoading = this.state.loading;
        let page = this.state.page;
        
        return (
        <>             
            <Login_Page appState={this.state}/>
            {/* <Loading_Page appState={this.state}/>  */}
            
            {/* { 
                (page == 0) && (isLoading == false) ? <Login_Page appState={this.state}/> : <Loading_Page appState={this.state}/>                                                  
            } 
            {
                (page == 1) ? <Main_Page/> : <Loading_Page/>                                  
            } */}
        </>
        )
  }
}

export default App