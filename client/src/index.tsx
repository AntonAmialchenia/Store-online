import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { typesBrands, devices } from './store/DeviseStore';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviseStore';

// interface DeviceContext {
//   _types: typesBrands[]
//   _brands: typesBrands[]
//   _devices: devices[]
//   _selectedType: {}
// }
// interface UserContext {
//   _isAuth: boolean
//   _user: {}
// }
export const Context = createContext<any | null>(null)
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
  );
