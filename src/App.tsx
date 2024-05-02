import './App.css'
import Transactions from './components/Transaction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './components/pageHeader/PageHeader';
import NewTransaction from './components/NewTrans/NewTransaction';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/find" element={
          <>
            {/* <label htmlFor="orderId">Order ID: </label>
            <input type="string" id="order_Id"/>
            <button onClick={SearchForID}>Search</button> */}
            <Transactions />
          </>
        } />
        <Route path="/add" element={<NewTransaction />} />
        <Route path="/" element={<h1>Payments system</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
