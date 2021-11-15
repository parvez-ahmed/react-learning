import React, { useState } from 'react';
import { Modal, Button, Form, ProgressBar } from 'react-bootstrap';
import { useFormik } from 'formik';
import { firebaseStorage, firebaseFirestore,firebaseApp,firebase } from '../../services/firebase';
import * as Yup from 'yup'
import { useSelector } from 'react-redux'

export default (props) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const user = useSelector((state)=>{
    console.log("state in use selector ",state);
    return state.auth.user;
  })
  console.log("user value ",user);

  const handleClose = () => {
    console.log("Handle close is working");
    setShow(false);
    props.setShowModal(false)
  }


  const formik = useFormik({
    initialValues: {
      caption: "",
      file: ""
    },
    validationSchema: Yup.object().shape({
      caption: Yup.string().required("Caption is required"),
      file: Yup.mixed().required("File is required")
    }),
    onSubmit: (values,onSubmitProps) => {
      console.log("formik values", values);
      console.log("On submit props",onSubmitProps);
      const uploadTask = firebaseStorage.ref(`${values.file.name}`).put(values.file);
      uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress-2)

      }, function (error) {
        // Handle unsuccessful uploads
        console.log("error while uploading", error);
        setShow(false);
        props.setShowModal(false)
      }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          firebaseFirestore.collection("post").add({
            caption: values.caption,
            image: downloadURL,
            username: user.displayName,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
          }).then((doc) => {
            console.log("DOcument added ", doc);
            setProgress(100)
            setShow(false);
            props.setShowModal(false)
          }).catch((err) => {
            console.log("error occured in document added", err);
            setShow(false);
            props.setShowModal(false)
          })
        });
      });
      console.log("upload ", uploadTask)
    }

  });


  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ justifyContent: "center" }} closeButton>
          <Modal.Title >Upload Your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Control type="text" placeholder="Caption" name="caption" value={formik.values.caption} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.caption && formik.errors.caption ?
                <Form.Text className="error">
                  {formik.errors.caption}
                </Form.Text>
                : false
              }
            </Form.Group>
            <Form.Group>
              <Form.Control type="file" name="file" onChange={(event) => {
                formik.setFieldValue("file", event.target.files[0]);
              }} onBlur={formik.handleBlur} />
              {formik.touched.file && formik.errors.file ?
                <Form.Text className="error">
                  {formik.errors.file}
                </Form.Text>
                : false
              }
            </Form.Group>
            <Form.Group>
              <Button variant="success" size="sm" block type="submit" disabled={!formik.isValid || formik.isSubmitting}>Upload</Button>
            </Form.Group>
          </Form>
          <ProgressBar variant="success" now={progress} />
        </Modal.Body>
      </Modal>
    </>
  );
}