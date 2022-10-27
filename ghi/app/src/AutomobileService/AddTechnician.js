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
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch (technicianURL, fetchConfig);
        if(response.ok){
            const cleared = {
                name: '',
                employee_num: '',
            }
            this.setState(cleared);
        }
    }
    handleTechnicianNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }
    handleTechnicianNumChange(event) {
        const value = event.target.value;
        this.setState({employee_num: value})
    }
    render() {
        return (
    <div className="row">
        <div className="offset-3 col-6">
            <h1>New Employee Form</h1>
            <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleTechnicianNameChange} value={this.state.name} placeholder="Technician" required type="text" name="technician" id="technician" className="form-control"/>
                <label htmlFor="sales_person">Employee Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleTechnicianNumChange} value={this.state.employee_num} placeholder="Employee Num" required type="number" min="0" max="1000" name="name" id="employee_num" className="form-control"/>
                <label htmlFor="employee_num">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        );
    }
}

export default AddTechnician
