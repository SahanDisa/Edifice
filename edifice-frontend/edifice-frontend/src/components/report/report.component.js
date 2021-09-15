import React, { Component } from 'react';
import { jsPDF } from "jspdf";
//import mainIcon from "./././../assets/logoedifice.png";


const doc = new jsPDF();

// Default export is a4 paper, portrait, using millimeters for units

class Report extends Component {

    constructor(props) {
        super(props);
        var today = new Date(),

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state={

            type:"",
            currentDate: date,
            currentTime: today.toLocaleTimeString(),
            isPDF:false
        }


    }

    generatePDF(project){

        doc.setFont("times");
        doc.setFontSize(12);
        doc.text("Date :"+this.state.currentDate,160, 10, null, null)
        doc.text("Time :"+this.state.currentTime,160, 16, null, null)
        
        //line(x1, y1, x2, y2, style) START :0 END:
        doc.line(10, 20, 200, 20); // horizontal line

        //doc.addImage("/146874499_433250618091789_8408160976424755805_o.png",'PNG', 20, 40,1200,955);//components\report\report.component.js
        
        doc.setFont("times");
        doc.setFontSize(22);
        //doc.text("Edifice Construction Management System",105, 40, null, null, "center");
        doc.setFont("times", "bold");
        doc.setFontSize(18);

        const title = "Project Title: ".concat(project.title);
        doc.text( title,100, 50, "center");

        //PROJECT ID AND STUFF
        doc.setFont("times","normal");
        doc.setFontSize(12);
        doc.text("Project ID :",10, 65, null, null, "left");

        doc.setFont("times", "bold");
        doc.text(project.id.toString(),35, 65, null, null, "left");

        //LOCATION
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("Location   :",10, 72, null, null, "left");

        doc.setFont("times", "bold");
        doc.text(project.location,35, 72, null, null, "left");

        //COST CODES
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("Cost Codes   :",10, 79, null, null, "left");

        doc.setFont("times", "bold");
        doc.text("<CODE1 >",35, 79, null, null, "left");
        doc.text("<CODE2 >",59, 79, null, null, "left");
        doc.text("<CODE3 >",83, 79, null, null, "left");


        //other details-
        //DESCRIPTION
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("Description :",10, 85, null, null, "left");

        doc.setFont("times", "normal");
        doc.text(project.description,10, 91, null, null, "left");

        //WORKING EMPLOYEES
        //LOCATION
        doc.setFontSize(16);
        doc.setFont("times","normal");
        doc.text(" No. of Employees  :",10, 104, null, null, "left");

        doc.setFont("times", "bold");
        doc.text("<NO >",59, 104, null, null, "left");

        //final save
        //TABLE OF WORKING EMPLOYEES
        const tempdata=[
            {
            empID:"1",
            name: "Ivar Boneless",
            role: "Engineer",
            enrollDate: "2021-9-12",
            mobileNo: "0723235665"
            },
            {
            empID:"2",
            name: "Ragnar Lothbrok",
            role: "Engineer",
            enrollDate: "2021-9-12",
            mobileNo: "0724235665"
            }
        ]

        const headers=["empID","name","role","enrollDate","mobileNo"];

        doc.table(12, 107, tempdata, headers,{ fontSize: 10 },{ autoSize: true });

        doc.save("ProjectReport.pdf");
    }
    
}
export default new Report;