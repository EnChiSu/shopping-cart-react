import './App.css';
import useFetchData from './hooks/useFetchData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
    const { loading, products } = useFetchData();

    return (
        <div className="App">
            <Navbar />
            <Product product={products}/>
            <Footer infos={products[0].infos} />
        </div>
    );
}

export default App;
