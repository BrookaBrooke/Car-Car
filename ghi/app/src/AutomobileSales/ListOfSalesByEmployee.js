import React from 'react';

class ListOfSalesByEmployee extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        salespeople: [],
        automobilesales: [],
        salesPerson: '',
      };
      this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
      const value = event.target.value;
      this.setState({ salesPerson: value });

      const automobileSaleURL = `http://localhost:8090/api/automobilesales/`;
      const automobileSaleResponse = await fetch(automobileSaleURL);

      if (automobileSaleResponse.ok) {
        const automobileSaleData = await automobileSaleResponse.json();

        if (this.state.salesPerson === "") {
          this.setState({ automobilesales: automobileSaleData.automobilesales });
        } else {
          let automobileSaleByEmployee = [];
          for (const automobileSale of automobileSaleData.automobilesales) {
            if (automobileSale.sales_person.name === this.state.salesPerson) {
                automobileSaleByEmployee.push(automobileSale);
            }
          }
          this.setState({ automobilesales: automobileSaleByEmployee });
        }
      }
    }

    async componentDidMount() {
      const salesPeopleURL = `http://localhost:8090/api/salespeople/`;
      const automobileSaleURL = `http://localhost:8090/api/automobilesales/`;
      const salesPeopleResponse = await fetch(salesPeopleURL);
      const automobileSaleResponse = await fetch(automobileSaleURL);

      if (salesPeopleResponse.ok && automobileSaleResponse.ok) {
        const salesPeopleData = await salesPeopleResponse.json();
        console.log('salesPeoepleData', salesPeopleData)
        const automobileSaleData = await automobileSaleResponse.json();
        console.log('automobileSaleData', automobileSaleData)

        this.setState({
            salespeople: salesPeopleData.salespeople,
            automobilesales: automobileSaleData.automobilesales
         });
      }
    }

    render() {
      return (
        <div className="container">
            <p></p>
          <h2>Sales History</h2>
          <div className="mb-3">
            <select onChange={this.handleChange} value={this.state.salespeople} required name="salesPerson" id="salesPerson" className="form-select">
              <option value="">Choose a Sales Person</option>
              {this.state.salespeople.map(salesPerson => {
                return (
                  <option key={salesPerson.name} value={salesPerson.name}>
                    {salesPerson.name}
                  </option>
                )
              })}
            </select>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sales Person</th>
                <th>Customer</th>
                <th>VIN #</th>
                <th>Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.automobilesales.map(automobilesales => {
                return (
                  <tr key={automobilesales.id}>
                    <td>{automobilesales.sales_person.name}</td>
                    <td>{automobilesales.customer.name}</td>
                    <td>{automobilesales.automobile.vin}</td>
                    <td>$ {new Intl.NumberFormat().format(automobilesales.price)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }

export default ListOfSalesByEmployee;
