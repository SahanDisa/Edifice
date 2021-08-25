import React, { Component } from 'react';

import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();


class Report extends Component {

    doc = new jsPDF();

    generate(){
        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");

    }

    render() {
        return (
            <div>
          
                <ul>
                    <li>
                        <a href={this.generate()}>Press to generate</a>
                    </li>
                </ul>
            </div>
        )
            
    }
    

}
export default Report;