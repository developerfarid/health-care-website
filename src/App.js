
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProviders from './Context/AuthProviders';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import PrivateRoute  from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..



function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="app">
      <AuthProviders>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          <PrivateRoute exact path="/servic/:id">
            <ServiceDetails />
            </PrivateRoute>
            <Route path="*">
            <NotFound />
          </Route>
            </Switch>
            <Footer />
      </BrowserRouter>
      </AuthProviders>
      
    </div>
  );
}

export default App;
