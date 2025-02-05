import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import i18n from "./translations/i18n";
import {I18nextProvider} from "react-i18next";

const root = ReactDOM.createRoot(
  document.getElementById('root-widget') as HTMLElement
);

const companySecretKey = document.getElementById('root-widget')?.getAttribute('data-secretkey');

sessionStorage.setItem('company_secret', companySecretKey ? companySecretKey : '$2y$10$ttCyt5jIlV7XOIRVmNIF6eGGEOVsd7GSFNLKakb09wc8z84ULhZgK');

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <I18nextProvider i18n={i18n}>
              <App companySecret={companySecretKey ? companySecretKey : '$2y$10$ttCyt5jIlV7XOIRVmNIF6eGGEOVsd7GSFNLKakb09wc8z84ULhZgK'}/>
          </I18nextProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
