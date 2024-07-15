import './App.css';
import ProductsTable from './products/table.products';
import InputArea from './products/input.insert.area.product';
import Form from './home';
import ModProduct from './products/mod.product';
import LogIn from './auth/login';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './auth.user';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element = { <Form />} />
          <Route path='/profile/products' element = {     
            <RequireAuth>
              <ProductsTable />
            </RequireAuth>      
            }/>     
          <Route path='/product/insert' element = { <InputArea /> }/>
          <Route path='/product/update/:id' element = { <ModProduct/> } />
          <Route path='/login' element = { <LogIn /> } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
