import * as React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import ProductionOrder from './ProductionOrder/ProductionOrder';
import SubPartSKU from './SubPartSKU/SubPartSKU';
import Router from './routes';
import { BrowserRouter} from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Router/>
        </div>
    </BrowserRouter>
);

}
