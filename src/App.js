
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Welcome from "./components/welcome";
// import Thanks from "./components/thanks";
// import Fruits from "./components/fruits";
// import Onchange from "./components/onChange";
// import OnChangeSingleLine from "./components/onChangeSingleLine";
import FormValidation from "./components/formValidation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome name="Shakil" weight="120"></Welcome> */}
        {/* <Fruits /> */}
        {/* <Thanks /> */}
        {/* <Onchange /> */}
        {/* <OnChangeSingleLine /> */}
        <FormValidation />
      </header>
    </div>
  );
}

export default App;
