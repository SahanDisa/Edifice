import React, { Component } from 'react';
import { jsPDF } from "jspdf";
import CostCodeDataService from "./../../services/costcode.service";
//import mainIcon from "./././../assets/logoedifice.png";


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
            isPDF:false,
            costCodes:[]
        }


    }

    getProjectCostCodes(id){

        CostCodeDataService.getAll(id)
            .then(response => {
            this.setState({
                costCodes: response.data
            })
            console.log(response.data);
            console.log(this.state);
            })
            .catch(e => {
            console.log(e);
        });
        console.log(this.state)
        let temp=[];

        this.state.costCodes.forEach((item, index)=>{
            console.log(item.costCode)
            temp.push(item.costCode)
        })

        return temp;
    }

    generatePDF(project,costCodes){

        const doc = new jsPDF();

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

        //Start Date
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("Start Date   :",10, 81, null, null, "left");

        doc.setFont("times", "bold");
        doc.text(project.startdate,35, 81, null, null, "left");

        //End Date
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("End Date   :",95, 81, null, null, "left");

        doc.setFont("times", "bold");
        doc.text(project.startdate,120, 81, null, null, "left");

        //COST CODES
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("Cost Codes   :",10, 88, null, null, "left");

        doc.setFont("times", "bold");
        var x1=35
        const temp=this.getProjectCostCodes(project.id)
        console.log(costCodes);
        temp.forEach((item, index)=>{
            doc.text(item,x1, 88, null, null, "left");
            x1+=5;
        })

        // doc.text("<CODE1 >",35, 88, null, null, "left");
        // doc.text("<CODE2 >",59, 88, null, null, "left");
        // doc.text("<CODE3 >",83, 88, null, null, "left");


        //other details-
        //DESCRIPTION
        doc.setFontSize(12);
        doc.setFont("times","normal");
        doc.text("Description :",10, 95, null, null, "left");

        doc.setFont("times", "normal");
        doc.text(project.description,10, 101, null, null, "left");

        //WORKING EMPLOYEES
        //LOCATION
        doc.setFontSize(16);
        doc.setFont("times","normal");
        doc.text(" No. of Employees  :",10, 114, null, null, "left");

        doc.setFont("times", "bold");
        doc.text("<NO >",59, 114, null, null, "left");

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

        doc.table(12, 117, tempdata, headers,{ fontSize: 10 },{ autoSize: true });

        doc.save("ProjectReport.pdf");
    }
    
}
export default new Report;