import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import ProductionOrder from './ProductionOrder/ProductionOrder';
import SubPartSKU from './SubPartSKU/SubPartSKU';
import Login from './Login/Login';

export default function Router() {
    
    let routes = useRoutes([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/ProductionOrder",
            element: <ProductionOrder />
        },
        {
            path: "/SubPartSKU",
            element: <SubPartSKU />
        },
    ]);

  return routes;

}
