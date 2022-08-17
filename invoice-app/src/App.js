import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AppProvider } from './context/AppContext';
import SharedLayout from './components/SharedLayout';
import ViewCustomer from './views/ViewCustomer';
import AddCustomer from './views/AddCustomer'
import ViewItem from './views/ViewItem';
import AddItem from './views/AddItem'
import Error from './components/Error'
import { VIEWS } from './utils/Constant'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<ViewCustomer />} />
            <Route path={VIEWS.ADD_CUSTOMER} element={<AddCustomer/>} />
            <Route path={VIEWS.VIEW_CUSTOMER} element={<ViewCustomer/>} />
            <Route path={VIEWS.ADD_ITEM} element={<AddItem/>} />
            <Route path={VIEWS.VIEW_ITEM} element={<ViewItem/>} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
