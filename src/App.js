import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import NotFound from './component/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<DayList/>}/>
          <Route path='/day/:inputDay' element={<Day/>}/>
          {/* : 후에 매개변수 키명을 입력하면 그 키값이 붙는다. */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
