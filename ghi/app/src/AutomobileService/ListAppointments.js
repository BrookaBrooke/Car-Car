import React from "react";

class ListAppointments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            appointment: []
        }

    };
    async componentDidMount(){
        const appointmentURL = `http://localhost:8080/api/appointment/`
        const appointmentResponse = await fetch(appointmentURL);

        if (appointmentResponse.ok){
            const appointmentData = await appointmentResponse.json();

            this.setState({
                appointment: appointmentData.appointment
            });
        }
    }




    render() {
    return (
        <div>
            <p></p>
            <h1>Appointment List</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Technician</th>
                        <th>Owner</th>
                        <th>VIN #</th>
                        <th>Scheduled Time</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appointment.map(appointment =>{
                        return(
                            <tr key={appointment.id}>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.owner}</td>
                                <td>{appointment.vin}</td>
                                <td>{appointment.scheduled_time}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}}
export default ListAppointments;
