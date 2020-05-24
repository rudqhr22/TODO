import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/Layout"



class Loading_Page extends React.Component 
{
  constructor(props) 
  {
    super(props)
    //this.state =0;//= opt.appState;    
    //console.log(props)  
  }


    render() {
      return (
        <Layout>
          <h2> Loading Page</h2>                        
            {/* <meta http-equiv="refresh" content="5; url=Main_Page"/>           */}          
        </Layout>
      )
  }
}

export default Loading_Page