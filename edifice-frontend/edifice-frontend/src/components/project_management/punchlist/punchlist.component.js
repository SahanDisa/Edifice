import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class PunchList extends Component {

    render() {
        return (
            <div className="">
                <h2>Punch Lists</h2><hr/>
                <div className="container row">
                    <div className="container col-3 mb-2">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem' }} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>1</h1></Card.Title>
                                <Card.Text>Initiated</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="container col-3">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem' }} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>1</h1></Card.Title>
                                <Card.Text>Work Required</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="container col-3">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem' }} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>2</h1></Card.Title>
                                <Card.Text>Ready for review</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="container col-3">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem' }} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>0</h1></Card.Title>
                                <Card.Text>Ready to Close</Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                <h4>All the Punch Lists</h4><hr/>
                <ul className="list-group">
                    <li className="list-group-item ">
                        <a href="/managepunchlist/view" style={{ 'text-decoration': 'none'}}>1 - Replace the Broken Switch Plate</a>
                    </li>
                    <li className="list-group-item ">
                        <a href="#" style={{ 'text-decoration': 'none'}}>2 - Paint Touch up</a>
                    </li>
                    <li className="list-group-item ">
                        <a href="#" style={{ 'text-decoration': 'none'}}>3 - Missing Bolts</a>
                    </li>
                    <li className="list-group-item ">
                        <a href="#" style={{ 'text-decoration': 'none'}}>4 - Door Frame Damage</a>
                    </li>
                </ul>
                <a href="/managepunchlist/create" className="btn btn-primary mt-2">+ Add Another Punch List Item</a>
            </div>
        );
    }

}

export default PunchList;