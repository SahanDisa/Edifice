import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { WebcamCapture } from './webcam.component';

export class CameraViewer extends Component {
    
    render() {
        return (
            <>
                <div>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Camera
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Tap to take an image</Card.Body>
                                <WebcamCapture/>
                            </Accordion.Collapse>
                        </Card>

                        {/* <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                TAB 2
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card> */}
                    </Accordion>
                </div>
            </>
        );
    }
}

export default CameraViewer;