import React from "react";

class AddTechnician extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            employee_num: '',
        }
        this.handleTechnicianNameChange = this.handleTechnicianNameChange.bind(this)
        this.handleTechnicianNumChange = this.handleTechnicianNumChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};

        const technicianURL = `http://localhost:8080/api/technician/`

    }

}
