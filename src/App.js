import { Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/Header/Header';
import { Character } from './pages/Character/Character';
import { Episode } from './pages/Episode/Episode';
import { Location } from './pages/Location/Location';
import { SingilPage } from './pages/SingilPage/SingilPage';

function App() {
	return (
		<>
			<Header />
      <Routes>
        <Route path='/' element={<Character/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/episode' element={<Episode/>}/>
        <Route path='/id/:id' element={<SingilPage/>} />

      </Routes>
		</>
	);
}

export default App;
