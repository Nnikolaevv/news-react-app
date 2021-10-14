import './App.css';
import {HashRouter as Router} from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import Header from "./components/Header/Header";


function App() {


    return (
        <Router>
            <div className="App">
                <Header/>
                <NewsPage/>
            </div>
        </Router>
    );
}

export default App;
