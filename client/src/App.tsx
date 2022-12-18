import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Detail } from './pages/detail/Detail';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/list/Products';
import CreateProduct from './pages/products/create/CreateProduct';
import { store } from './redux/app/store';
import { NotFound } from './pages/error/NotFound';
import { CrearProduct } from './pages/products/create/CrearProduct';
import { Profile } from './pages/profile/components/Profile';
import { Cart } from './pages/cart/components/Cart/Cart';
import { About } from './pages/about/about';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/create' element={<CreateProduct />} />
            <Route path='products/crear' element={<CrearProduct />} />
            <Route path='products/:id' element={<Detail />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
            <Route path='profile/' element={<Profile />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
