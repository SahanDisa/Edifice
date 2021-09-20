import React, { Component } from 'react';
import { Link } from "react-router-dom";

import bulldozerIcon from "././../../assets/066-bulldozer.png";
import dailylogIcon from "././../../assets/dailylog.png";
import meetingIcon from "././../../assets/meeting.png";
import documentIcon from "././../../assets/documents.png";


function ResourceCard(props) {
  // render(props) {
  return (
    <div>
      <h3>Manage resources</h3>
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          <div className="card card-hover shadow-sm">
            <Link className="d-block nav-heading text-center mb-2 mt-2" to={"/crew/" + props.id}>
              <img src={meetingIcon} alt="" width="50" />
              <h3 className="h5 nav-heading-title mb-0">Crews</h3>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          <div className="card card-hover shadow-sm">
            <Link className="d-block nav-heading text-center mb-2 mt-2" to={"/equipments/"}>
              <img src={bulldozerIcon} alt="" width="50" />
              <h3 className="h5 nav-heading-title mb-0">Equipments</h3>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          <div className="card card-hover shadow-sm">
            <Link className="d-block nav-heading text-center mb-2 mt-2" to={"/schedule/" + props.id}>
              <img src={dailylogIcon} alt="" width="50" />
              <h3 className="h5 nav-heading-title mb-0">Schedule</h3>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          <div className="card card-hover shadow-sm">
            <Link className="d-block nav-heading text-center mb-2 mt-2" to={"/timesheet/" + props.id}>
              <img src={documentIcon} alt="" width="50" /><br />
              <h3 className="h5 nav-heading-title mb-0">Timesheet</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
}
// }

export default ResourceCard;
