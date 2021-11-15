import React, { Component } from 'react'
import "./footer.css"
import { Form, Button, ProgressBar } from 'react-bootstrap'
import { useFormik } from 'formik';
import { firebaseStorage, firebaseFirestore } from '../../services/firebase';

const  Footer = ()=> {
    const formik = useFormik({
        initialValues:{
            caption:"",
            file:""
        },
        onSubmit:(values)=>{
            console.log("formik values",values);
            const uploadTask = firebaseStorage.ref(`${values.file.name}`).put(values.file);
            uploadTask.on('state_changed', function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                
              }, function(error) {
                // Handle unsuccessful uploads
                console.log("error while uploading",error);
              }, function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                  console.log('File available at', downloadURL);
                  firebaseFirestore.collection("post").add({
                      caption:values.caption,
                      image:downloadURL,
                      username:"Sonu"
                  }).then((doc)=>{
                      console.log("DOcument added ",doc);
                  }).catch((err)=>{
                      console.log("error occured in document added",err);
                  })
                });
              });
              console.log("upload ",uploadTask)
        }
        
    });
    console.log(formik)
    return (
        <div className="Footer">
            <div className="FooterContent">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Caption" name="caption" value={formik.values.caption} onChange={formik.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="file" onChange={(event)=>{
                            formik.setFieldValue("file",event.target.files[0]);
                        }} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="success" size="sm" block type="submit">Upload</Button>
                    </Form.Group>
                </Form>
                <ProgressBar now={0} />
            </div>
        </div>
    )
}


export default Footer