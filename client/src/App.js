import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import AddProduct from './components/AddProducts';
import EditProduct from './components/EditProducts';
import ProductList from './components/ProductList';

function App() {
  return (
    
      <Router>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<ProductList />} />
            <Route exact path='/add' element={<AddProduct />} />
            <Route exact path='/edit/:id' element={<EditProduct />} />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
