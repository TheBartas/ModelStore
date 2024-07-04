import './App.css';
import ProductsTable from './products/table.products';
import InputArea from './products/input.insert.area.product';
import Form from './home';

import GetData from './data/getData';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Routes>
          <Route path='/' element = { <Form />} />
          <Route path='/products' element = { <ProductsTable />}/>     
          <Route path='/product/insert' element = { <InputArea /> }/>
        </Routes> */}


        <GetData />

      </header>
    </div>
  );
}

export default App;
