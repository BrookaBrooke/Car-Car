import React from 'react'


class AddCustomer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phone_number: '',
    }
    this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};

    const customerURL = 'http://localhost:8090/api/customers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };


    const response = await fetch(customerURL, fetchConfig);
    if (response.ok) {
      const cleared = {
        name: '',
        address: '',
        phone_number: '',
      }
      this.setState(cleared)
    }
  }


  handleCustomerNameChange(event) {
    const value = event.target.value
    this.setState({name:value})
  }

  handleAddressChange(event) {
    const value = event.target.value
    this.setState({address:value})
  }

  handlePhoneNumberChange(event) {
    const value = event.target.value
    this.setState({phone_number:value})
  }

  render() {
    return (
<div className="row">
    <div className="offset-3 col-6">
        <h1>New Customer Form</h1>
        <form onSubmit={this.handleSubmit} id="create-customer-form">
          <div className="form-floating mb-3">
            <input onChange={this.handleCustomerNameChange} value={this.state.name} placeholder="Customer" required type="text" name="customer_name" id="customer_name" className="form-control"/>
            <label htmlFor="customer_name">Customer Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={this.handleAddressChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control"/>
            <label htmlFor="address">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={this.handlePhoneNumberChange} value={this.state.phone_number} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control"/>
            <label htmlFor="phone_number">Phone Number</label>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
    );
}
}


export default AddCustomer;
