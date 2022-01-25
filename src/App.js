import background from './images/Background.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import About from './components/about';
import Category from './components/category';
import Destination from './components/destination';
import Bookings from './components/booking';
import Footer from './components/footer';
import Contact from './components/contact';
function App() {
  return (<>
    <div className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%'
    }} >
      <Navigation />
      <About/>
    </div>
    <div>
        <Category/>
    </div>
    <div>
      <Destination/>
    </div>
    <div>
      <Bookings/>
    </div>
    <div>
      <Footer/>
    </div>
    <div>
      <Contact/>
    </div>
  </>);
}

export default App;
