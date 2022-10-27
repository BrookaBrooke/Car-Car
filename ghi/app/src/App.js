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
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
