import React from 'react';



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

    render(){
        return (
            <div className='row'>
                <div className="offset-1 col-10">
                    <div className="p-4 m-2">
                        <form className ="input-group" onSubmit={this.handleSubmit}>
                            <input className="form-control" type="text" value={this.state.vin} onChange={this.filterAppointments}></input>
                            <button className="btn btn-dark input-group-append" >Search VIN #</button>
                        </form>
                    <div>
                <h1>Service History</h1>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>VIN #</th>
                                <th>Owner</th>
                                <th>Technician</th>
                                <th>Reason</th>
                                <th>Time</th>
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
        </div>

        );
    }

 }
export default ServiceHistory;
