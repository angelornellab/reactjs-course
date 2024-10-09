import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const element = React.createElement('p', null, 'Hello world!!');
// const JSXElement = () =>  <p>Hello world!!</p>;
// const Li = ({children, id}) => {
//   console.log(children, id);
  
//   return (
//     <li>{children} {id}</li>
//   );
// }

// const Ul = () =>  
//   <ul>
//     <Li id={'1'}>Element</Li>
//     <li>Element 2</li>
//     <li>Element 3</li>
//   </ul>

// root.render(
//   <Ul></Ul>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
