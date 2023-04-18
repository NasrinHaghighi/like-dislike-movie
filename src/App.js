
import './App.css';
import Layout from './components/Layout/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Likes from './pages/Likes';
import Dislikes from './pages/Dislikes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/likes" element={<Likes />}> </Route>
        <Route path="/dislikes" element={<Dislikes />}></Route>
       
      </Routes>
    
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
