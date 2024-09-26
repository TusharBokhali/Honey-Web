import './App.css';
import About from './Componets/About'
import Shop from './Componets/Shop'
import Blog from './Componets/Blog'
import Contact from './Componets/Contact'
import Search from './Images/Search.svg'
import Logo from './Images/Main_Logo.png'
import Home from './Componets/Home';
import Center from './Componets/Center'
import Footer from './Componets/Footer'
function App() {
  return (
    <>
      <div className="main">
        <div className="container">
          <nav>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div className="search">
              <input type="text" id="" placeholder='Your E-mail' />
              <button><img src={Search} /></button>
            </div>
          </nav>
          <Home />
          <Center />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
