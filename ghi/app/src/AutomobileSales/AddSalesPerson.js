import React from 'react';


class AddSalesPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_num: '',
        };
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleEmployeeNumChange = this.handleEmployeeNumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const salespersonURL = 'http://localhost:8090/api/salespeople/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };



        const response = await fetch(salespersonURL, fetchConfig);
        if (response.ok) {
            const cleared = {
                name: '',
                employee_num: '',
            }
            this.setState(cleared);
        }
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleEmployeeNumChange(event) {
        const value = event.target.value;
        this.setState({employee_num: value})
    }


    render() {
        return (
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>New Employee Form</h1>
            <form onSubmit={this.handleSubmit} id="create-salesperson-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleSalesPersonChange} value={this.state.name} placeholder="Sales Person" required type="text" name="sales_person" id="sales_person" className="form-control"/>
                <label htmlFor="sales_person">Employee Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleEmployeeNumChange} value={this.state.employee_num} placeholder="Employee Num" required type="number" min="0" max="1000" name="name" id="employee_num" className="form-control"/>
                <label htmlFor="employee_num">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
          </div>
         </div>
        );
    }
}

export default AddSalesPerson;
