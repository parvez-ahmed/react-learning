import React,{ useState,useEffect}  from 'react'
import logo from '../../logo.svg'
import avatarLogo from '../../avatarLogo.png';
import './index.css';

function Index() {
    const [showBlack,setShowBlack] = useState(false);
    useEffect(() => {
        // console.log("******************************")
        window.addEventListener("scroll",()=>{
            // console.log("working ***************8",window.screenY)
            if(window.scrollY > 100){
                // console.log("In if")
                setShowBlack(true);
            }else{
                // console.log("In else")
                setShowBlack(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    console.log("********* show ",showBlack)
    return (
        <div className={`Navbar ${showBlack && "NavbarBlack"}`}>
            <img src={logo} alt="Not found" className="NavbarLogo"/>
            <img src={avatarLogo} alt="Not found" className="NavbarLogo"/>
        </div>
    )
}

export default Index
