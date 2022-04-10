import './App.css';
// import SwitchButton from "./Components/SwitchButton.js";
import Social from "./Components/Social/Social";
import Input from "./Components/Input";
function App() {
  return (
    <div className="App">
        <div className="Form_container">
            {/*<SwitchButton/>*/}
            <Social/>
            <Input/>
        </div>
    </div>
  );
}

export default App;
