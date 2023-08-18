// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowProduct from "./CRUDproduct/showProduct";
import CreateProduct from "./CRUDproduct/CreateProduct";
import EditProduct from "./CRUDproduct/EditProduct";
import Detail from "./CRUDproduct/detail";

function App() {
  return (
      <>
        <div className="App">
            <Routes>
                <Route path="/" element={<ShowProduct />} />
                <Route path="/create" element={<CreateProduct/>}/>
                <Route path="/edit/:id" element={<EditProduct/>}/>
                <Route path="/:id" element={<Detail/>}/>
            </Routes>
        </div>

      </>
  );
}

export default App;
