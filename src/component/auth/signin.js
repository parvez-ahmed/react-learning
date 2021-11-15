import React, { Component, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { firebaseAuth,facebookProvider } from '../../services/firebase';
import signin1 from '../../assets/signin1.jpg'
import signin2 from '../../assets/signin2.jpg'
import signin3 from '../../assets/signin3.jpg'
import signin4 from '../../assets/signin4.jpg'
import signin5 from '../../assets/signin5.jpg'

export default () => {
    const [displaySlide,setDisplaySlide] = useState(1);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required("Email is required").email("Please enter valid email"),
            password: Yup.string().required("Password is required").matches(/^[1-9][0-9]{5,8}$/, "Password should be 6 to 8 digit")
        }),
        onSubmit: (values, onSubmitProps) => {
            console.log("values", values);
            firebaseAuth.signInWithEmailAndPassword(formik.values.email, formik.values.password)
                .then(user => {
                    console.log("user is ", user);
                })
                .catch(err => {
                    console.log("error is ", err);
                    onSubmitProps.setSubmitting(false);
                })
        }
    });

    const facebookLogin = ()=>{
        firebaseAuth.signInWithPopup(facebookProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            console.log("face login result ",result);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            console.log("facebook login error ",error);
          });
    }
    
    
    useEffect(()=>{
        setInterval(()=>{
            setDisplaySlide((displaySlide)=>{
                // console.log(displaySlide);
                if(displaySlide == 4){
                    return 1;
                }else{
                    return displaySlide+1;
                }
            })
        },4000)
    },[])
    const check = ()=>{
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&777")
    }
    return (
        <div className="AuthContainer">
            <div className="AuthContainerChild BGImageContainer">
                <div className="FGImageContainer">
                    <div className="ImgaeSlide CustomFade" style={{display: displaySlide == 1 ? "block" : "none"}}>
                        <img src={signin1} alt="not foun" />
                    </div>
                    <div className="ImgaeSlide CustomFade" style={{display: displaySlide == 2 ? "block" : "none"}}>
                        <img src={signin2} alt="not foun" />
                    </div>
                    <div className="ImgaeSlide CustomFade" style={{display: displaySlide == 3 ? "block" : "none"}}>
                        <img src={signin3} alt="not foun" />
                    </div>
                    <div className="ImgaeSlide CustomFade" style={{display: displaySlide == 4 ? "block" : "none"}}>
                        <img src={signin4} alt="not foun" />
                    </div>
                </div>
            </div>
            <div className="AuthContainerChild">
                <div className="AuthContentContainer">
                    <div className="AuthContent">
                        <h1 className="AuthContentHeading">Instagram</h1>
                        <h2 className="AuthContentSubHeading">Sign In to see photos and videos from your friends.</h2>
                        <div className="LoginWithFacebook">
                            <button className="LoginWithFacebookButton" onClick={facebookLogin}>
                                Log in with Facebook
                            </button>
                        </div>
                        <div className="separator">
                            <span style={{ flex: 1, borderTop: "1px solid black", height: "0px" }}></span>
                            <div style={{ padding: "0px 10px" }}>OR</div>
                            <span style={{ flex: 1, borderTop: "1px solid black", height: "0px" }}></span>
                        </div>
                        {/* <form className="FormContainer">
                        </form> */}
                        <Form className="FormContainer" onSubmit={formik.handleSubmit}>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={formik.values.email} onChange={(e)=>{formik.handleChange(e);check(e)}} onBlur={formik.handleBlur}></Form.Control>
                                {formik.touched.email && formik.errors.email ?
                                    <Form.Text className="error">
                                        {formik.errors.email}
                                    </Form.Text>
                                    : false
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Enter password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
                                {formik.touched.password && formik.errors.password ?
                                    <Form.Text className="error">
                                        {formik.errors.password}
                                    </Form.Text>
                                    : false
                                }
                            </Form.Group>
                            <Button variant="info" size="sm" block type="submit" disabled={!formik.isValid || formik.isSubmitting}>Sign In</Button>
                        </Form>
                        <p className="AuthContentBottomText">
                            By signing up, you agree to our
                            <a target="_blank" href="https://help.instagram.com/581066165581870" tabindex="0" > Terms</a>,
                            <a target="_blank" href="https://help.instagram.com/519522125107875" tabindex="0"> Data Policy</a> and
                            <a target="_blank" href="/legal/cookies/" tabindex="0"> Cookies Policy</a>
                        </p>

                    </div>
                    <div className="LinkDiv">
                        <span>Don't have an account?</span> <NavLink to="/auth/signup">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );

}

