import './App.css';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { LoggedIn } from './components/LoggedIn';
function App() {
  return (
    <div className="App">
      <Greet name="Brook" />
      <Button handleClick={(event) => {
        console.log('Button Clicked!', event);
      }} />
      <LoggedIn />
    </div>
  );
}

export default App;
