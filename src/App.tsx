import './App.css';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { LoggedIn } from './components/LoggedIn';
import { Box } from './components/context/Box';
function App() {
  return (
    <div className="App">
      <Greet name="Brook" />
      <Button handleClick={(event) => {
        console.log('Button Clicked!', event);
      }} />
      <LoggedIn />
      <br />
      <Box/>
    </div>
  );
}

export default App;
