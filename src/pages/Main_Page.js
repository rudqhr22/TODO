import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

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
        <h2>
            Main PAGE
        </h2>
    </Layout>
    )
  }
}

export default Main_Page