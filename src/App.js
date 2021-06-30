import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";

// components
import { About } from "./components/About";
import { Home } from "./components/Home";

function App() {
    const history = useHistory();
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <button
                onClick={() => {
                    history.push("/");
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    history.push("/about");
                }}
            >
                About
            </button> */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
