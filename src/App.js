import './App.css';
import Developer from './components/Developer';
import './components/styles.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Developer 
           name1="Gabriel"
           age1={19}
           country1="Brasil"
           name2="Filipe"
           age2={28}
           country2="Brasil"
           name3="Mariana"
           age3={24}
           country3="Itália"
          />
      </header>
    </div>
  );
}

export default App;
