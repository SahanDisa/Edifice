import React, { Component } from 'react';
import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,EventSettingsModel } from '@syncfusion/ej2-react-schedule'; 
import Card from 'react-bootstrap/Card';


class Schedule extends Component {
  

  
    render() {
        return (
          <div>
              <Card
                bg={'success'}
                text={'white'}
                //style={{ width: '14rem' }}
                className="mb-2">
                
                <Card.Body>
                  <Card.Title><h4>Schedule</h4></Card.Title>
                </Card.Body>
              </Card> 
            <ScheduleComponent currentView='Week'>
              <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
          </div>
          
        );
      }
    }

export default Schedule;