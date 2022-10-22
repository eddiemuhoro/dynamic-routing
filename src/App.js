import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './All';
import User from './User';
import AllItems from './components/AllItems';
import SingleItem from './components/SingleItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<All />} />
              <Route path="user/:id" element={<User />} />
            </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
