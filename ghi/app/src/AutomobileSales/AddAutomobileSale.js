import React from 'react';


class AddAutomobileSale extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            automobile: [],
            sales_person: [],
            customer: [],
        };
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const automobileSaleURL = `http://localhost:8090/api/automobilesales/`;
        const fetchConfig = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(automobileSaleURL, fetchConfig);
        if (response.ok) {

          const automobileURL = `http://localhost:8100/api/automobiles/${this.state.automobile}/`
            const autoFetchConfig = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sold: true })
        }
            const autoResponse = await fetch(automobileURL, autoFetchConfig)
            if (!autoResponse.ok) {
                console.error(autoResponse);
            }

          const cleared = {
            price: '',
            automobile: '',
            sales_person: '',
            customer: '',
        }
        this.setState(cleared);
    }
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price: value})
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value})
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
    }


    async componentDidMount() {
        const automobileURL = `http://localhost:8100/api/automobiles/`;
        const salespersonURL = `http://localhost:8090/api/salespeople/`;
        const customerURL = `http://localhost:8090/api/customers/`;

        const automobileResponse = await fetch(automobileURL);
        const salesPersonResponse = await fetch(salespersonURL);
        const customerResponse = await fetch(customerURL);

        if (automobileResponse.ok && salesPersonResponse.ok && customerResponse.ok) {
          const automobileData = await automobileResponse.json();
          const salesPersonData = await salesPersonResponse.json();
          const customerData = await customerResponse.json();

          this.setState({

            customers: customerData.customers,
            automobiles: automobileData.autos,
            salespeople: salesPersonData.salespeople
        });
        }
      }

    render() {
        return (
<div className="row">
        <div className="offset-3 col-6">
            <h1>Create a new Automobile Sale</h1>
            <form onSubmit={this.handleSubmit} id="create-automobilesale-form">
              <div className="form-floating mb-3">
                <input onChange={this.handlePriceChange} value={this.state.price} placeholder="Price" max="10000000" min="1" required type="number" name="price" id="price" className="form-control"/>
                <label htmlFor="price">Price</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleAutomobileChange} required id="automobile"
                        className="form-select" name="automobile" value={this.state.automobile}>
                    <option value="">Choose Automobile</option>
                        {this.state.automobile.map(automobile => {
                            if (automobile.sold === false) {
                            return (
                                <option key={automobile.vin} value={automobile.vin}>
                                    {automobile.vin}
                                </option>
                                );
                            } else {
                                return null
                            }
                        })}
                </select>
                </div>
                <div className="mb-3">
                <select onChange={this.handleSalesPersonChange} required id="sales_rep"
                        className="form-select" name="sales_rep" value={this.state.sales_person}>
                    <option value="">Choose Sales Person</option>
                        {this.state.sales_person.map(sales_person => {
                            return (
                                <option key={sales_person.sales_person} value={sales_person.sales_person}>
                                    {sales_person.sales_person}
                                </option>
                                );
                        })}
                </select>
                </div>
                <div className="mb-3">
                <select onChange={this.handleCustomerChange} required id="customer"
                        className="form-select" name="customer" value={this.state.customer}>
                    <option value="">Choose Customer</option>
                        {this.state.customer.map(customer => {
                            return (
                                <option key={customer.id} value={customer.name}>
                                    {customer.customer_name}
                                </option>
                                );
                        })}
                </select>
                </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        );
    }
}

export default AddAutomobileSale;
