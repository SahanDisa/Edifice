import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (
        <div className="webcam-container">
            <div className="webcam-img">
            <h4>Capture Display</h4>
            <center>
                {image == '' ? <Webcam
                    audio={false}
                    height={500}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={720}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </center>
                
            </div>
            <div>
                {image != '' ?
                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="btn btn-primary">
                        Retake Image</button>
                        <a className="btn btn-success m-2" href="#">Save</a>
                </div> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="btn btn-primary">Capture</button>
                }
            </div>
        </div>
    );
};