import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddCustomer from './AutomobileSales/AddCustomer';
import AddSalesPerson from './AutomobileSales/AddSalesPerson';
import AddAutomobileSale from './AutomobileSales/AddAutomobileSale';
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
          </Route>
          <Route path="/salespeople">
            <Route path="new" element={<AddSalesPerson/>} />
          </Route>
          <Route path="/customers">
            <Route path="new" element={<AddCustomer/>} />
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
