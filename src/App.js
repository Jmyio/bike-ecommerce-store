import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AppNavBarCss from './AppNavBar.module.css'
import AppContactCss from './AppContact.module.css'
import './styles.css'
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './HomePage';
import BikeSpecs from './BikeSpecs';
import BikeList from './BikesList'
import Cart from './Cart';
import { CartContext } from './CartContext';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>

        <div className={AppNavBarCss.NavBar}>
            <div className={AppNavBarCss.container}>
                <div className={AppNavBarCss.NavBarIcon}>
                    <img src={process.env.PUBLIC_URL + "/img/Bike Icon.jpg"} alt=""/>
                    <p className={AppNavBarCss.IconName}>GO BIKE</p>
                </div>
                <div className={AppNavBarCss.NavBarOptions}>
                    <ul>
                        <li><Link className={AppNavBarCss.link} to={'/'}>Home</Link></li>
                        <li><Link className={AppNavBarCss.link} to={'/cart'}>Cart</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/bikeslist' element={<BikeList/>}>
            <Route path=':brand' element={<BikeList/>}></Route>
          </Route>
          <Route path='/bikeSpecs' element={<BikeSpecs/>}>
            <Route path=':brand' element={<BikeList/>}>
              <Route path=':id' element={<BikeSpecs/>}></Route>
            </Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>

        <div className={AppContactCss.contact}>
          <div className={AppContactCss.container}>
            <div className={AppContactCss.row}>
              <div className={AppContactCss.contact_left}>
                <h1 className={AppContactCss.sub_title}>Contact</h1>
                <p>Email : jimmyjimmy26282@gmail.com</p>
                <p>PhoneNo : +852 12345678</p>
                <p>This Website is created by Jimmy Leung</p>
              </div>
              <div className={AppContactCss.contact_right}>
                <form>
                  <input type="text" name="Name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                  <button type="submit" className={`${AppContactCss.btn} ${AppContactCss.btn2}`}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
