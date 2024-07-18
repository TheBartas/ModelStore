import './App.css';
import ProductsTable from './products/table.products';
import InputArea from './products/input.insert.area.product';
import Form from './home';
import ModProduct from './products/mod.product';
import LogIn from './auth/login';
import { CartMain } from './cart/cart';
import { ChangePassword } from './user/change.password';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './auth.user';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Routes>
            <Route path='/' element = { <Form />} />  { /* SignUp */}
            <Route path='/login' element = { <LogIn /> } />  { /* SignIn */}
            <Route path='/profile/products' element = {     
                <RequireAuth>
                  <ProductsTable />
                </RequireAuth>      
            }/>     
            <Route path='/profile/product/insert' element = { 
                <RequireAuth>
                  <InputArea /> 
                </RequireAuth>
            }/>
            <Route path='/profile/product/update/:id' element = { 
                <RequireAuth>
                  <ModProduct />
                </RequireAuth>
            }/>
            <Route path='/profile/settings/password' element = {
                <RequireAuth>
                  <ChangePassword />
                </RequireAuth> 
            }/>
            <Route path='/profile/cart' element = {
              <RequireAuth>
                <CartMain/>
              </RequireAuth>
            }/>
          </Routes>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
