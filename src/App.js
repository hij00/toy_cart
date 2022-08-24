import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Cart } from "./components/pages/Cart";
import { Main } from "./components/pages/Main";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
