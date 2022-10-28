import React, { useState, useEffect } from 'react';



 class ServiceHistory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            appointment: [],
            appointmentFilters: []
        };
        this.filterAppointments = this.filterAppointments.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        // const filterVin = e => {
        //     const search = e.target.value()
        //     const filteredVin = appointment.filter(vin => appointment.vin().includes(search))
        //     setVin(filteredVin)
        //     return filterVin
        // }
    }
    filterAppointments(e) {

        this.setState({vin:e.target.value.toLowerCase()})
        console.log("filter appointments")

    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.vin !== ""){
        let appointmentFilters = this.state.appointment
         const selectedAppointment = appointmentFilters.filter((appointment) => this.state.vin === appointment.vin.toLowerCase())
           console.log("appointment filters")
            this.setState({
             appointment: selectedAppointment,
            })
        }else{
            this.setState({appointment:this.state.appointmentFilters})
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
                appointmentFilters: appointmentData.appointment,


        });

        }
    }
//<input type="text" appointment={this.state.appointmentFilters} match={this.props.match} onChange={this.filterAppointments}></input>



    render(){
        return (
            <div className='container'>
                <p></p>
                <h2>Service History</h2>
                <div className='mb-3'>
                    <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.vin} onChange={this.filterAppointments}></input>
                <button type="submit" >Submit</button>
            </form>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>owner</th>
                                <th>technician</th>
                                <th>reason</th>
                                <th>time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.appointment.map(appointment =>{
                                return (
                                    <tr key={appointment.id}>
                                      <td>{appointment.vin}</td>
                                      <td>{appointment.owner}</td>
                                      <td>{appointment.technician.name}</td>
                                      <td>{appointment.reason}</td>
                                      <td>{appointment.scheduled_time}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

        );
    }

 }
export default ServiceHistory;
