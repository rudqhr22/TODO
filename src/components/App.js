import React from "react"
import { Button } from '@material-ui/core';



class App extends React.Component 
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
      <div>
          <Button variant="contained">
            Default
            </Button>
        <Button variant="contained" color="primary">
            Primary
        </Button>

        <Button>
            Hello world!         
        </Button>
      </div>
    )
  }
}

export default App