import {createContext, useContext} from 'react';

const ContextDefault = createContext('default value');
const Context2 = createContext('default value 2');
const DefaultProvider = ({children}) => {
  return (
    <ContextDefault.Provider value={'value'}>
      {children}
    </ContextDefault.Provider>
  );
};
const Container = () => {
  const context = useContext(ContextDefault);

  return (
    <div>{context}</div>
  );
};
const Container2 = () => {
  const context = useContext(Context2);

  return (
    <div>{context}</div>
  );
};

function App() {
  return (
    <DefaultProvider>
      <Container />
      <Container2 />
    </DefaultProvider>
  );
}

export default App;
