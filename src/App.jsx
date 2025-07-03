
// we renamed browserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';


function App() {
  return (
    <Router>

      <Route path="/" component={Home} exact />
      <Route path="/product-detail" component={ProductDetail} exact />
      <Route path="/cart" component={Cart} exact />
    </Router>
  );
}

export default App;
