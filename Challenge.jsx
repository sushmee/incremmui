import  React, { useState }  from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
const Challenge =() =>
{
    const [num,setNum]=useState(0);
    const incNum=()=>
    {
        setNum(num+1);
    };
    const decNum = ()=>{
        if(num>0)
        {
            setNum(num-1);
        }
        else{
            alert("Zero limit Reached");
            setNum(0);
        }
    };
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1> {num}</h1>
                <div className="btn-div">
                    <button onClick={incNum} className="btn-green">
                    <AddIcon/>
                    </button>
                   
                    <button onClick={decNum} className="btn-red">
                    <DeleteIcon/></button>
                    
                    </div>
                
                </div>
            </div>
        </>
    )
}
export default Challenge;
