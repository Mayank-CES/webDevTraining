import './App.css';

import { AppProvider } from './context/AppContext';
import Header from './components/header'
import ViewCustomer from './views/viewCustomer'
import AddCustomer from './views/addCustomer'
import ChooseView from './views/ChooseView'
import ViewItem from './views/ViewItem'
import AddItem from './views/AddItem'
import Footer from './components/footer'
import tableRow from './components/tableRow';
import Menu from './components/menu'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <Menu/>
        <ChooseView/>
        {/* <AddCustomer/>
        <ViewCustomer/>
        <AddItem/>
        <ViewItem/> */}
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
