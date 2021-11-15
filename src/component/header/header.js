import React, { useState } from 'react'
import './header.css';
import { Button } from 'react-bootstrap';
import { firebaseAuth } from '../../services/firebase';
import PostUploadModal from '../uploadPost/index';
export default function Header() {
    const handleLogout = ()=>{
        firebaseAuth.signOut()
    }
    const [showModal,setShowModal] = useState(false)
    return (
        <div className="Header">
            <div className="HeaderContent">
                <img className="HeaderImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram logo" />
                <div className="HeaderOption">
                    <Button variant="outline-info" size="sm" style={{marginRight:"20px"}} onClick={()=>setShowModal(true)}>Upload Post</Button>
                    <Button variant="outline-info" size="sm" onClick={handleLogout}>Logout</Button>
                </div>
            </div>
            {showModal ? <PostUploadModal setShowModal={setShowModal}/> : false}
        </div>
    )
}
