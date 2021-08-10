import './App.css'
import AppRoute from './components/AppRoute'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import './firebase/config';
import {BookingContext} from './components/BookingContext';
import {UserProvider} from './firebase/UserProvider';

function App() {


  return (
    <UserProvider>
    <BookingContext.Provider>
      <Navbar />
      </BookingContext.Provider>
      <AppRoute />
      <Footer />
    
    </UserProvider>
  );
}

export default App;

