import React from "react";

function ListAppointments() {
        const [data, setData] = React.useState([]);

        React.useEffect(() => {
            const url = `http://localhost:8080.api/appointment`;
            fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json['appointment']))
            .catch((error) => console.log(error));
        } );

        React.useEffect(() =>{
        }, [data]);

    return (
        <div>
            <p></p>
            <h2>Appointment List</h2>
            <table className="table table=striped table-hover">
                <thead>
                    <tr>
                        <th>Technician</th>
                        <th>Owner</th>
                        <th>VIN</th>
                        <th>Scheduled Time</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(appointment =>{
                        return(
                            <tr key={appointment.id}>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.owner}</td>
                                <td>{appointment.vin}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListAppointments;
