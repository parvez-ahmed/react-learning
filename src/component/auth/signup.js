import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { firebaseAuth,facebookProvider } from '../../services/firebase';

export default () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username:""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required("Email is required").email("Please enter valid email"),
            password: Yup.string().required("Password is required").matches(/^[1-9][0-9]{5,8}$/, "Password should be 6 to 8 digit"),
            username: Yup.string().required("Username is Required").min(4,"Minimum 4 character").max(10,"Maximum 10 character")
        }),
        onSubmit: (values, onSubmitProps) => {
            console.log("values", values, onSubmitProps);
            firebaseAuth.createUserWithEmailAndPassword(formik.values.email, formik.values.password)
                .then(({user}) => {
                    console.log("user is ", user);
                    return user.updateProfile({
                        displayName:values.username
                    });
                })
                .then((user)=>{
                    console.log("after update profile",user);
                })
                .catch(err => {
                    console.log("error is ", err);
                    onSubmitProps.setSubmitting(false);
                })
        }
    })

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

    return (
        <div className="SignUpContainer">
            <div className="AuthContentContainer">
                <div className="AuthContent">
                    <h1 className="AuthContentHeading">Instagram</h1>
                    <h2 className="AuthContentSubHeading">Sign up to see photos and videos from your friends.</h2>
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
                            <Form.Control type="text" placeholder="Enter username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
                            {formik.touched.username && formik.errors.username ?
                                <Form.Text className="error">
                                    {formik.errors.username}
                                </Form.Text>
                                : false
                            }
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
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
                        <Button variant="info" size="sm" block type="submit" disabled={!formik.isValid || formik.isSubmitting} >Sign Up</Button>
                    </Form>
                    <p className="AuthContentBottomText">
                        By signing up, you agree to our
                            <a target="_blank" href="https://help.instagram.com/581066165581870" tabindex="0" > Terms</a>,
                            <a target="_blank" href="https://help.instagram.com/519522125107875" tabindex="0"> Data Policy</a> and
                            <a target="_blank" href="/legal/cookies/" tabindex="0"> Cookies Policy</a>
                    </p>

                </div>
                <div className="LinkDiv">
                    <span>Have an account?</span> <NavLink to="/auth/signin">Sign In</NavLink>
                </div>
            </div>
        </div>
    )
}
