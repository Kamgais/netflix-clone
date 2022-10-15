import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './Context/UserContext';
import LanguageContextProvider from './Context/LanguageContext';
import { Provider } from 'react-redux';
import { store } from './redux/store/preferencedList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <UserContextProvider>
  <LanguageContextProvider>
  <Provider store={store}>
  <App />
  </Provider>
  </LanguageContextProvider>
  </UserContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);



