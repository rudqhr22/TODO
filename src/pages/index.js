import React from "react"
import { Button } from '@material-ui/core';

export default () => {

    return(
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
    );
}


