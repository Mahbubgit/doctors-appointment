import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Blog from './Pages/Blog/Blog';
import EArticle from './Pages/EArticle/EArticle';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/article' element={<EArticle></EArticle>}></Route>
        <Route path='/faq' element={<FAQ></FAQ>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
