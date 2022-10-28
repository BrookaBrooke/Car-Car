import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListOfSales from './AutomobileSales/ListOfSales';
import ListOfSalesByEmployee from './AutomobileSales/ListOfSalesByEmployee';
import AddCustomer from './AutomobileSales/AddCustomer';
import AddSalesPerson from './AutomobileSales/AddSalesPerson';
import AddAutomobileSale from './AutomobileSales/AddAutomobileSale';
import ListOfManufacturers from './Inventory/ListOfManufacturers';
import AddManufacturer from './Inventory/AddManufacturer';
import AddTechnician from './AutomobileService/AddTechnician';
import AddAppointment from './AutomobileService/AddAppointment';
<<<<<<< HEAD
import ListAppointments from './AutomobileService/ListAppointments';
import ServiceHistory from './AutomobileService/ServiceHistory';
=======
import AddVehicleModel from './Inventory/AddVehicleModel';
import ListOfAutomobiles from './Inventory/ListOfAutomobiles';
import AddAutomobileToInventory from './Inventory/AddAutomobileToInventory';
import ListOfVehicleModels from './Inventory/ListOfVehicleModels';
>>>>>>> main

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobilesales">
            <Route path="new" element={<AddAutomobileSale/>} />
            <Route path="" element={<ListOfSales />}/>
          </Route>
          <Route path="/salespeople">
            <Route path="new" element={<AddSalesPerson/>} />
            <Route path=""element={<ListOfSalesByEmployee/>} />
          </Route>
          <Route path="/customers">
            <Route path="new" element={<AddCustomer/>} />
          </Route>
          <Route path="/manufacturers">
            <Route path="" element={<ListOfManufacturers/>} />
            <Route path="new" element={<AddManufacturer/>} />
          </Route>
          <Route path="/technician">
            <Route path="new" element={<AddTechnician/>} />
          </Route>
          <Route path="/appointment">
            <Route path="new" element={<AddAppointment/>} />
            <Route path="list" element={<ListAppointments/>}/>
            <Route path="history" element={<ServiceHistory/>}/>
          </Route>
          <Route path="/models">
            <Route path="new" element={<AddVehicleModel/>} />
            <Route path="" element={<ListOfVehicleModels/>} />
          </Route>
          <Route path="/automobiles">
            <Route path="" element={<ListOfAutomobiles/>} />
            <Route path="new" element={<AddAutomobileToInventory/>} />
          </Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
