import React from 'react';

function ListOfSales() {

        const [data, setData] = React.useState([]);

        React.useEffect(() => {
          const url = `http://localhost:8090/api/automobilesales/`;
          fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json['automobilesales']))
            .catch((error) => console.log(error));
        }, []);

        React.useEffect(() => {
        }, [data]);

    return (
        <div>
            <p></p>
        <h1>Automobile Sale History</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Sales Person</th>
                    <th>Employee Number</th>
                    <th>Customer Name</th>
                    <th>VIN #</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map(automobilesales => {
                    return (
                        <tr key={automobilesales.id}>
                        <td>{ automobilesales.sales_person.name }</td>
                        <td>{ automobilesales.sales_person.employee_num }</td>
                        <td>{ automobilesales.customer.name }</td>
                        <td>{ automobilesales.automobile.vin }</td>
                        <td>$ { new Intl.NumberFormat().format(automobilesales.price) }</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
}

export default ListOfSales;
