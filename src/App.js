import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import NotFound from './component/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateWord from './component/createWord';
import CreateDay from './component/createDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<DayList/>}/>
          <Route path='/day/:inputDay' element={<Day/>}/>
          {/* : 후에 매개변수 키명을 입력하면 그 키값이 붙는다. */}
          <Route path='/create_day' element={<CreateWord/>}/>
          <Route path='/create_word' element={<CreateDay/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
