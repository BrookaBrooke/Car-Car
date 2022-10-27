// import React from "react";

// class AddVehicleModel extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             manufacturers: [],
//             name: "",
//             pictureUrl: "",
//         };
//         this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handlePictureChange = this.handlePictureChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};
//         delete data.manufacturers;
//         delete data.pictureUrl;

//         const url = `${process.env.REACT_APP_INVENTORY_API}/api/models/`;
//         const fetchConfig = {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };
//         const response = await fetch(url, fetchConfig);
//         if (response.ok) {
//             const cleared = {
//                 name: "",
//                 pictureUrl: "",
//                 technician: "",
//                 formVisible: "shadow p-4 mt-4 d-none",
//                 successVisible: "",
//                 message: "New model added successfully"
//             }
//             this.setState(cleared)
//         } else {
//             console.log(response)
//         }
//     }

//     handleReset(event) {
//         this.setState({
//             successVisible: "d-none",
//             formVisible: "shadow p-4 mt-4",
//         });
//     }

//     handleNameChange(event) {
//         const value = event.target.value;
//         this.setState({name: value});
//     }

//     handlePictureChange(event) {
//         const value = event.target.value;
//         this.setState({pictureUrl: value});
//     }

//     handleManufacturerChange(event) {
//         const value = event.target.value;
//         this.setState({manufacturer: value});
//     }

//     async componentDidMount() {
//         AllowedToVisit()
//         const url = `${process.env.REACT_APP_INVENTORY_API}/api/manufacturers/`;
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             this.setState({manufacturers: data.manufacturers});
//         } else {
//             console.error("invalid request")
//         }
//     }

//     render () {
//         return (
//             <div className="row">
//                 <div className="offset-3 col-6">
//                     <div className={this.state.successVisible}>
//                         <div className="alert alert-success mt-4" role="alert">
//                             {this.state.message}
//                         </div>
//                         <button className="btn btn-outline-success" onClick={this.handleReset}>
//                             Add another model
//                         </button>
//                     </div>
//                     <div className={this.state.formVisible}>
//                         <h1>Create a vehicle model</h1>
//                         <form onSubmit={this.handleSubmit} id="addModelForm">
//                             <div className="form-floating mb-3">
//                                 <input
//                                     className="form-control" required type="text"
//                                     onChange={this.handleNameChange} id="name"
//                                     placeholder="name" value={this.state.name}
//                                 />
//                                 <label htmlFor="name">Name</label>
//                             </div>
//                             <div className="form-floating mb-3">
//                                 <input
//                                     className="form-control" required type="text"
//                                     onChange={this.handlePictureChange} id="pcitureUrl"
//                                     name="pictureUrl" value={this.state.pictureUrl}
//                                     placeholder="pictureUrl"
//                                 />
//                                 <label htmlFor="pictureUrl">Picture URL</label>
//                             </div>
//                             <div className="form-floating mb-3">
//                                 <select
//                                     className="form-select" required id="manufacturer"
//                                     onChange={this.handleManufacturerChange} name="manufacturer"
//                                     placeholder="manufacturer" value={this.state.manufacturer}
//                                 >
//                                     <option value="">Choose One</option>
//                                     {this.state.manufacturers.map(manufacturer => {
//                                         return (
//                                             <option key={manufacturer.id} value={manufacturer.id}>
//                                                 {manufacturer.name}
//                                             </option>
//                                         );
//                                     })}
//                                 </select>
//                                 <label htmlFor="manufacturer">Manufacturer</label>
//                             </div>
//                             <button className="btn btn-primary">Create Model</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     };
// }

// export default AddVehicleModel;
