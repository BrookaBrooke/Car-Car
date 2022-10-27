import React from 'react';


class AddAutomobileSale extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
              sales_person: '',
              customers: [],
              customer: '',
              price: '',
              automobile: '',
              autos: [],
              salesPersons: [],
            }
            this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
            this.handleCustomerChange = this.handleCustomerChange.bind(this)
            this.handlePriceChange = this.handlePriceChange.bind(this)
            this.handleAutomobileChange = this.handleAutomobileChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
          }

        async handleSubmit(event) {
            event.preventDefault();
            const data = {...this.state};
            delete data.autos;
            delete data.customers;
            delete data.salesPersons;

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
                const automobileFetchConfig = {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sold: true })
            }
                const automobileResponse = await fetch(automobileURL, automobileFetchConfig)
                if (!automobileResponse.ok) {
                    console.error(automobileResponse);
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

    async componentDidMount() {
        const automobileURL = `http://localhost:8100/api/automobiles/`;
        const salespersonURL = `http://localhost:8090/api/salespeople/`;
        const customerURL = `http://localhost:8090/api/customers/`;

        const automobileResponse = await fetch(automobileURL);
        const salesPersonResponse = await fetch(salespersonURL);
        const customerResponse = await fetch(customerURL);

        if (automobileResponse.ok && salesPersonResponse.ok && customerResponse.ok) {
          const automobileData = await automobileResponse.json();
          console.log('auto', automobileData)
          const salesPersonData = await salesPersonResponse.json();
          console.log('salesPerson', salesPersonData)
          const customerData = await customerResponse.json();
          console.log('customer', customerData)


          this.setState({

            customers: customerData.customers,
            autos: automobileData.autos,
            salesPersons: salesPersonData.salespeople
        });
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

      render () {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a new Automobile Sale</h1>
                <form onSubmit={this.handleSubmit} id="create-automobilesale-form">
                <div className="form-floating mb-3">
                <select onChange={this.handleSalesPersonChange} required name="sales_person" id="sales_person" value={this.state.salesPersons.id} className="form-select">
                <option>Choose a Sales Person</option>
                {this.state.salesPersons.map(salesPerson => {
                return (
                    <option key={salesPerson.id} value={salesPerson.id}>
                    {salesPerson.name}
                    </option>
                );
                })}
                </select>
                </div>
                <div className="form-floating mb-3">
                <select onChange={this.handleCustomerChange} required name="customer" id="customer" value={this.state.customer} className="form-select">
                <option value="">Choose a Customer</option>
                {this.state.customers.map(customer => {
                return (
                    <option key={customer.id} value={customer.id}>
                    {customer.name}
                    </option>
                );
                })}
                </select>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control" value={this.state.price} />
                <label htmlFor="style">Price</label>
                </div>
                <div className="form-floating mb-3">
                <select onChange={this.handleAutomobileChange} required name="automobile" id="automobile" value={this.state.automobile} className="form-select">
                <option value="">Choose an Automobile</option>
                {this.state.autos.map(autos => {
                return (
                    <option key={autos.vin} value={autos.vin}>
                    {autos.vin}
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
        )
      }
    }


export default AddAutomobileSale;
