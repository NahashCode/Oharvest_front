import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Main from './UI/Main/Main';
import Footer from './Footer/Footer';

import './App.scss';

import { plots } from './plots';

function App() {
    return (
        <div className="app">
            <Header />
            <NavBar />
            <Main plots={plots} />
            <Footer />
        </div>
    );
}

export default App;