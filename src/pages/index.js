import React from "react"
import Loading_Page from "./Loading_Page";
import Login_Page from "./Login_Page";
import Layout from "../components/Layout";
import { Link } from "gatsby"
import { Divider } from "@material-ui/core";
import App from "../components/App";





const IndexPage = () => {

    

    return(
        <>
            
            <App/> 
            
            {/* <Link to="/Loading_Page"> LoadingPage  </Link>   
            <Divider/>

            <Link to="/Login_Page"> LoadingPage </Link>  */}
            
        </>
    );
}

export default IndexPage;


