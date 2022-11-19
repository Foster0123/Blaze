import HomePage from './components/HomePage';
import NavBar from './components/shared/NavBar';

import './assets/scss/main.scss';
function App() {

  return (
    <div className="App">
      <HomePage />
      <NavBar />
      <h1 className='text-3xl text-indigo-900'>Working</h1>
    </div>
  )
}

export default App
