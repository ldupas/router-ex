import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CssDefinition from './pages/CssDefinition';
import Home from './pages/Home';
import HtmlDefinition from './pages/HtmlDefinition';
import JsDefinition from './pages/JsDefinition';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html" component={HtmlDefinition} />
        <Route path="/css" component={CssDefinition} />
        <Route path="/javascript" component={JsDefinition} />
      </Switch>
    </div>
  );
}

export default App;
