import React from 'react'
import BecomeMember from '../HeaderLink/BecomeMember';
import LanguageSelect from '../HeaderLink/LanguageSelect';
import Authenticate from '../HeaderLink/Authenticate';
import logo from '../../../assets/logo.png';
import '../index.css';
function MainHeader() {
    return (
        <div className="MainHeaderContainer">
            <div className="MainHeaderContainerLeft">
                <img src={logo} alt="not found "/>
            </div>
            <div className="MainHeaderContainerRight">
                <BecomeMember/>
                <LanguageSelect/>
                <Authenticate/>
            </div>
        </div>
    )
}

export default MainHeader
