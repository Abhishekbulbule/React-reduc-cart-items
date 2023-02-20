import './App.css';
import Home from './Containers/HomeContainer';
import HeaderContainer from './Containers/HeaderContainer';
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <div className='cart'>
        <Home/>
      </div>
    </div>
  )
}

export default App;
