// Changes its return value
const impureFunction = () => new Date.toLocalString();

console.log(impureFunction());

// Pure function never changes its value
const MyComponent = ({myProp}) => {
  return (
    <div>
      Name: {myProp}
    </div>
  );
};

const App = () => {
  return (
    <MyComponent myProp={'myProp'} />
  );
};

export default App;
