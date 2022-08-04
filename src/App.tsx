import './App.css';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { LoggedIn } from './components/LoggedIn';
import { Box } from './components/context/Box';
import { DomRef } from './components/ref/DomRef';
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
      <br />
      <DomRef/>
    </div>
  );
}

export default App;
