import Landing from "./page/Landing";
import Main from "./page/Main";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Final from "./page/Final";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/mainh" element={<Final />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;