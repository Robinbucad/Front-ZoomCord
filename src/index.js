import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import header_en from './translations/en/header.json'
import header_es from './translations/es/header.json'
import home_en from './translations/en/home.json'
import home_es from './translations/es/home.json'
import registerLogin_es from './translations/es/register.login.json'
import registerLogin_en from './translations/en/register.login.json'
import UserProvider from './context/user/user.provider.jsx'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      header: header_es,
      home: home_es,
      registerLogin: registerLogin_es,
    },
    en: {
      header: header_en,
      home: home_en,
      registerLogin: registerLogin_en,
    },
  },
})


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>

    </UserProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
