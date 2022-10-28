import React from 'react';

class AddAutomobileToInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            color: '',
            year: '',
            model_id: '',
            model_ids: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ model_ids: data.models })
        }
    }

    handleVinChange(event) {
        const value = event.target.value
        this.setState({ vin: value })
    }
    handleColorChange(event) {
        const value = event.target.value
        this.setState({ color: value })
    }
    handleYearChange(event) {
        const value = event.target.value
        this.setState({ year: value })
    }
    handleModelChange(event) {
        const value = event.target.value
        this.setState({ model_id: value })
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state};
        delete data.model_ids

        const url = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json',
            },
        };
        console.log(data)

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                vin: '',
                color: '',
                year: '',
                model_id: '',
            })
        }
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add an Automobile to Inventory</h1>
                    <form onSubmit={this.handleSubmit} id='create-automobile-form'>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleColorChange} placeholder="Color" name='color' required type='text' id='color' className='form-control' />
                            <label htmlFor='color'>Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleYearChange} placeholder ="Year" name='year' required type='number' id='year' className='form-control' />
                            <label htmlFor='year'>Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" value={this.state.vin} />
                            <label htmlFor="vin">VIN #</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleModelChange} name='model' className="form-select" id="model" value={this.state.model}>
                                <option value="">Choose a Model</option>
                                {this.state.model_ids.map(model => {
                                    return (
                                <option key={model.id} value={model.id}>{model.name}</option>
                                    )
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
export default AddAutomobileToInventory;
