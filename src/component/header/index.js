import React from 'react'
import './index.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
export default function index() {
    return (
        <div className="Header">
            <img src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'  className="HeaderLogo"/>
            <div className="HeaderCenter">
                <input type="text" />
                <SearchIcon/>
            </div>
            <div className="HeaderRight">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}
