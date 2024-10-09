// import './App.css';
import './main.css';

const style2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0, )',
};

const style1 = ({backgroundColor = '#222'}) => ({
  backgroundColor: backgroundColor,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px', 
});

const Li = ({children, id}) => {
  // console.log(props);

  return (
    <li className='class-li'>
        {children} {id}
    </li>
  );
};

function App() {
  const value = 'test';

  return (
    <ul className='class-ul'>
      <Li id='1'>value</Li>
    </ul>
  );
}

export default App;
