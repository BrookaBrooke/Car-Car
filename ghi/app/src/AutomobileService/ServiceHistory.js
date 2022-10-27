import React, { useState, useEffect } from 'react';



 class ServiceHistory extends React.Component{
         constructor(props) {
             super(props);
             this.state = {
                 vin: '',
                 appointment: [],



             };
             this.handleChange = this.handleChange.bind(this);
         }
         async handleChange(event) {
             const value = event.target.value;
             this.setState({ salesPerson: value });

             const appointmentURL = `http://localhost:8080/api/appointment/`;


             if (appointmentResponse.ok) {
                 const appointmentData = await appointmentResponse.json();

                 if (this.state.appointment === "") {
                     this.setState({ appointment: appointmentData.appointment});
                 } else {
                     let appointmentbyVin = [];
                     for (const appointments of appointmentData.appointment) {
                         if (appointments.vin === this.state.appointment) {
                             appointmentbyVin.pusj(appointments);
                         }
                    }
                    this.setState({ appointment: appointmentbyVin});
                }
            }
        }
        async componentDidMount() {
            const appointmentURL = `http://localhost:8080/api/appointment/`;
            const appointmentResponse = await fetch(appointmentURL);

            if (appointmentResponse.ok) {
                const appointmentData = await appointmentResponse.json();
                console.log('appointmentData', appointmentData)

                this.setState({

                    appointment: appointmentData.appointment,
                });
            }
        }
        render() {
            return (
                <div className="container">
                    <p></p>
                    <h2>Service History</h2>
                    <div className="mb-3">
                        <form>
                            <input onChange={this.handleChange} value={this.state.vin} id="get-appointment-form"></input>

                        </form>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer Name</th>
                                <th>Time</th>
                                <th>Technician</th>
                                <th>Reason</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.appointment.map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.owner}</td>
                                        <td>{appointment.scheduled_time}</td>
                                        <td>{appointment.technician.name}</td>
                                        <td>{appointment.reason}</td>
                                    </tr>
                                )
                            }

                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
            )
        }
}
export default ServiceHistory;


