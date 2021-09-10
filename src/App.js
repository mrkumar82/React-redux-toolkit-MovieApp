import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import store from "./Store/Store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie/:id" component={MovieDetail} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}
