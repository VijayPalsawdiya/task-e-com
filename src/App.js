import { BrowserRouter ,Switch , Route } from 'react-router-dom';
import './App.css';
import About from './component/About';
import AddEdit from './component/AddEdit';
import Home from './component/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/signin/SignIn';
import Cards from './component/Cards';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <header className="App-header"> */}
        {/* <Header /> */}
        <ToastContainer position="top-center" />
          <Switch>
            <Route exact path="/" component={SignIn} /> 
            <Route path="/home" component={Home} />
             <Route path="/add" component={AddEdit} />
            <Route path="/update/:id" component={AddEdit} />
            <Route path="/cards/" component={Cards} />
            <Route  path="/about" component={About} />
          </Switch>
          {/* <Footer /> */}
        {/* </header> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
