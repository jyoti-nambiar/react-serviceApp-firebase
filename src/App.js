import './App.css'
import AppRoute from './components/AppRoute'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import './firebase/config';
import {BookingProvider} from './components/BookingContext';
import {UserProvider} from './firebase/UserProvider';

function App() {


  return (
    <UserProvider>
    <BookingProvider>
      <Navbar />
     
      <AppRoute />
      
      <Footer />
     </BookingProvider>
    </UserProvider>
  );
}

export default App;

