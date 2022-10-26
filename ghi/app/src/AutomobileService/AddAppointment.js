import React from "react";

class AddAppointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            owner: '',
            scheduled_time: [],
            reason: '',
            technician: [],
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

            // const appointmentURL = `http://localhost:8080/api/appointment/${this.state.appointment}/`
            // const autoFetchConfig ={
            //     method: "PUT",
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify({sold: true})
            // }
            // const autoResponse = await fetch(appointmentURL, autoFetchConfig)
            // if (!autoResponse.ok) {
            //     console.error(autoResponse);
            // }
        //}
        const cleared = {
            vin: '',
            owner: '',
            scheduled_time:'',
            reason: '',
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

                technicians: technicianData.technicians
            });
        }
    }


}
