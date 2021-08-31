
import React, { useRef, useCallback, useState } from 'react';
import {getUserData} from '../utils';
import Webcam from "react-webcam";
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import { registerUser } from '../redux/userActions';


const ConfirmPage = props => {
    
  const { handleSubmit, previousPage } = props;
  const userDetails = getUserData();
  const webcamRef = useRef(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  const [image,setImage]=useState('');
  const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
      },
      [webcamRef]
  );
  const saveImage = useCallback(
    (e) => {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  );
  const userObject = [...Object.values(userDetails)];
  const half = Math.ceil(userObject.length / 2);    
  const firstHalf = userObject.splice(0, half);
  const secondHalf = userObject.splice(-half);

  async function detectWebcam() {
      try {

          var md = navigator.mediaDevices;
          var results = false;

          if (!md || !md.enumerateDevices) results = false;

          const devices = await md.enumerateDevices();
          results = devices.some(device => 'videoinput' === device.kind);

          return results;

      } catch (error) { return false; }
  }

  const submitForm = useCallback(
    (e) => {
      handleSubmit(image);
    }
  );

  return (
    <div className="row confirmation-page">
        <form className="confirmation-form" onSubmit={handleSubmit}>
      <div className="col-md-4">
          {firstHalf.map(item => {
              return <div className="form-group row">
                        <label className="col-form-label">{item}</label>
                    </div>;
          })}
      </div>
      <div className="col-md-4">
        {secondHalf.map(item => {
              return <div className="form-group row">
                        <label className="col-form-label">{item}</label>
                    </div>;
          })}
      </div>
      <div className="col-md-4">
        <div className="webcam-img">
                {image == '' ? (detectWebcam ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <Field type="file" component={renderField} name="image" onChange={saveImage} />) : <img src={image} />}
            </div>
            <div>
                {detectWebcam && (image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                )}
            </div>
      </div>
      <div className="row">
          <div className="col-sm-12 text-center">
              <button className="btn btn-primary btn-md center-block btn-back" onClick={previousPage} >Back</button>
              <button className="btn btn-primary btn-md center-block">Submit</button>
          </div>
      </div>
      </form>
    </div>
  )
};

const confirmationForm = reduxForm({
  form: 'confirmationForm', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(ConfirmPage);

export default confirmationForm;



