import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurant from './components/Restaurant';
import RestView from './components/RestView';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}/>
        <Route path='view-restaurant/:id' element={<RestView></RestView>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
