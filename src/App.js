import './App.css';
import Clock from './component/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Clock locale="bn-BD"/></h1>
        <Clock locale="bn-BD" />
      </header>
    </div>
  );
}

export default App;
