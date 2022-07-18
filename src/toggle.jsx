import React from 'react';

export default function Toggle(){

    const [flag,setflag]=React.useState(true);

    const handletoggle=()=>{
        setflag(!flag)
    }

    return(
        <div>
            {flag==true?
            <h4>Toggle component ....</h4>
            :""}
            <button onClick={()=>handletoggle()}>Toggle</button>    
        </div>
    )
}