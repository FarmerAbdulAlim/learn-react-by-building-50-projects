import './App.css';

function App() {
  const drone = [
    {name: 'DJI Mini 2', price: '$400'},
    {name: 'DJI Mini 3', price: '$600'},
    {name: 'DJI Mavic Air 2', price: '$1200'},
    {name: 'DJI Mavic 3', price: '$1500'}
  ]

  return (
    <div className="App">
      {
        drone.map(item => <Product singleDrone = {item} />)
      }
    </div>
  );
}

const Product = (props) => {
  const productStyle = {
    border: '3px solid white',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    margin: '100px 2px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.singleDrone.name}</h3>
      <h4>Price: {props.singleDrone.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
