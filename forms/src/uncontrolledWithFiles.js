import logo from './logo.svg';
import './App.css';

function App() {
  const submit  = (e) => {
    e.preventDefault();

    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };

  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name='field1' />
      </div>
      <input name='field2' />
      <input type='file' name='file' />
      <input type='submit' value='send' />
    </form>
  );
}

export default App;
