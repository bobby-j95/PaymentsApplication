import './App.css'
import Transactions from './components/Transaction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './components/pageHeader/PageHeader';
import NewTransaction from './components/NewTrans/NewTransaction';
import { LoginContextType, UserType, LoginContext } from './context/context';
import { useState } from 'react';
import SignIn from './components/SignIn/SignIn';

function App() {

  const [user, setUser] = useState<UserType>({id:0, name:"", role:""});

  console.log(user);

  const login = (user: UserType) => {
    setUser(user);
  };

  const logout = () => {
    setUser({id:0, name:"", role:""});
  };

  const statefulContext: LoginContextType = {
    user: user,
    login: login,
    logout: logout
  };

  return (
    <LoginContext.Provider value={statefulContext} >
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/signin" element={<SignIn />}> </Route>
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
    </LoginContext.Provider>
  )
}

export default App
