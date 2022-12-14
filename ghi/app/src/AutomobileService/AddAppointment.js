import React from "react";

class AddAppointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            owner: '',
            scheduled_time: '',
            reason: '',
            technicians: [],
            technician: '',
        };
        this.handleAddVin = this.handleAddVin.bind(this);
        this.handleAddOwner = this.handleAddOwner.bind(this);
        this.handleAddTime = this.handleAddTime.bind(this);
        this.handleAddReason = this.handleAddReason.bind(this);
        this.handleAddTechnician = this.handleAddTechnician.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const appointmentURL = `http://localhost:8080/api/appointment/`;
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentURL, fetchConfig);
        if (response.ok) {
        }
        const cleared = {
            vin: '',
            owner: '',
            scheduled_time:'',
            reason: '',
            technicians: [],
            technician: '',
        }
        this.setState(cleared);

    }
    handleAddVin(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    handleAddOwner(event) {
        const value = event.target.value;
        this.setState({owner: value})
    }

    handleAddTime(event) {
        const value = event.target.value;
        this.setState({scheduled_time: value})
    }
    handleAddReason(event) {
        const value = event.target.value;
        this.setState({reason: value})
    }
    handleAddTechnician(event) {
        const value = event.target.value;
        this.setState({technician: value})
    }

    async componentDidMount() {
        const technicianURL = `http://localhost:8080/api/technician/`;
        const technicianResponse = await fetch(technicianURL);

        if (technicianResponse.ok) {

            const technicianData = await technicianResponse.json();

            this.setState({

                technicians: technicianData.technician
            });
        }
    }

    render(){
        return (
            <div className="row">
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new Appointment</h1>
                    <form onSubmit={this.handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAddVin} value={this.state.vin} placeholder="VIN" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">VIN #</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAddOwner} value={this.state.owner} placeholder="owner" required id="owner" className="form-control" name="owner"></input>
                            <label htmlFor="owner">Owner</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAddTime} value={this.state.scheduled_time} placeholder="time" required id="time" className="form-control" name="time"></input>
                            <label htmlFor="scheduled_time">Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAddReason} value={this.state.reason} placeholder="reason" required id="reason" className="form-control" name="reason"></input>
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={this.handleAddTechnician} required id="technician"
                        className="form-select" name="technician" value={this.state.technician}>
                    <option value="">Choose Technician</option>
                        {this.state.technicians.map(technician => {
                            return (
                                <option key={technician.employee_num} value={technician.id}>
                                    {technician.name}
                                </option>
                                );
                        })}
                </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }

}
export default AddAppointment
