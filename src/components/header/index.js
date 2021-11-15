import React from 'react'
import logo from '../../assets/logo.svg';
import HeaderTitle from './HeaderTitle';
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import './index.css';


const headerTitles = [
    'Creativity & Design',
    'Marketing & Commerce',
    'PDF & E-Signature',
    'Business Solutions',
    'Support'
]
function Header() {
    return (
        <div className="HeaderContainer">

            <div className="HeaderLogo">
                <div className="HeaderLogoDesktop">
                    <img src={logo} alt="Not found" className="HeaderLogoImg" />
                    <span className="HeaderLogoText">Adobe</span>
                </div>
                <div className="HeaderLogoMobile">
                    <FormatAlignJustifyIcon />
                </div>
            </div>

            <div className="HeaderLinksContainer">
                {headerTitles.map(title =>
                    <HeaderTitle title={title} />
                )}
            </div>
            <div className="HeaderRight">
                <SearchIcon className="mr20" />
                <span>SignIn</span>
            </div>
        </div>
    )
}

export default Header
