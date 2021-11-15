import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function HeaderTitle({title}) {
    const [toggle,setToggle] = useState(true);
    return (
        <div onClick={()=>setToggle(!toggle)}>
            <span>{title}</span>
            {toggle ? <KeyboardArrowDownIcon/> : <ExpandLessIcon/>}
        </div>
    )
}

export default HeaderTitle
