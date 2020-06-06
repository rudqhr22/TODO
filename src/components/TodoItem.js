import React, { useState, Component } from "react";
import { Box, Checkbox } from "@material-ui/core";
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

class TodoItem extends Component
{
    constructor(props)
    {
        super(props)

        //const title = props.title;
        // const id = props.id;
        
        this.state = {
            data : props.data        
        }
        
        

        const WorkEnd = (checked) =>{
            if(checked == true) {
                //todoFinData(props.id);  //체크 버튼 클릭시 완료
            }
        }
    }

    render() {
        return(
            <>
                <Box display="flex">
                    <Box>
                        <Checkbox
                        color="primary"
                            onChange={(e)=>{
                                this.WorkEnd(e.target.checked)
                            }}
                            icon={<CircleUnchecked />}
                            checkedIcon={<RadioButtonCheckedIcon />}
                            value={"on"}
                        />
                    </Box>
                    <Box style={{ marginLeft:10, paddingTop : 9, verticalAlign:"center" }}>
                    {this.state.data}
                    </Box>
                </Box>
            </>
        )
    }
}


export default TodoItem;



// class TodoItem extends Component
// {
//     constructor(props)
//     {
//         super(props)

//         console.log(this.props)


//         this.props = props;



//         //const title = props.title;
//         //const [type, setType ]= useState(props.type);

//     }

//     WorkEnd(checked)
//     {
//         if(checked == true)
//         {
//             //setType(1);
//         }
//     }

//     render()
//     {
//         return(
//             <>
//                 <Box display="flex" style={{ paddingLeft:10}}>
//                     <Box>
//                         {/* <Checkbox
//                         color="primary"
//                             onChange={(e)=>{
//                                 WorkEnd(e.target.checked)
//                             }}
//                             icon={<CircleUnchecked />}
//                             checkedIcon={<RadioButtonCheckedIcon />}
//                             value={"on"}
//                         /> */}
//                         BOX
//                     </Box>
//                     <Box style={{ marginLeft:10, paddingTop :12 }}>
//                         타이틀
//                     </Box>
//                 </Box>
//             </>
//         )
//     }
// }
