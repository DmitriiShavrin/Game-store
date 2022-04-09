import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import GamePage from "./pages/game-page/game-page";
import OrderPage from "./pages/order-page/order-page";
import {Store} from './redux';

function App() {
  return (
    <>
      <Provider store={Store}>
      <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path="/app/:title" element={<GamePage />} />
              <Route exact path="/order" element={<OrderPage />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
