import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './styles/index.scss';

/* -------------------------------------------------------
ProductPage Andréa
------------------------------------------------------- */
/* import ProductPage from './ProductPage/ProductPage';
<Route path='/products/:id' component={ProductPage} /> */
//--------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

