import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter from './pages/counter';
import HomePage from './pages/homepage';
import MaterialTestPage from './pages/material';
import OpPage from './pages/operatorPage';
import GlobalStyle from './styles/globalStyle';
import { paths } from './assets/constant';
import MapPage from './components/Mappage';
// export const paths = [
//   {path:'/', title:'홈페이지로 이동하기', component:<HomePage></HomePage>},
//   {path:'/counter', title:'카운터 페이지로 이동하기' , component:<Counter></Counter>},
//   {path:'/operator', title:'논리,삼항 연산자 사용해보기', component:<OpPage></OpPage>},
//   {path:'/material', title:'material ui 사용해보기', component:<MaterialTestPage></MaterialTestPage>},
// ];

//<Route path='/' element={<HomePage></HomePage>} /> 
//<Route path={'/counter'} element={<Counter></Counter>} />
//<Route path={'/operator'} element={<OpPage></OpPage>} />
//<Route path={'/material'} element={<MaterialTestPage></MaterialTestPage>} /> 
function App() {
  const routes = paths.map((e)=> <Route path={e.path} element={e.component} /> );
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/operator' element={<OpPage/>} />
        <Route path='/material' element={<MaterialTestPage/>} />
        <Route path='/map' element={<MapPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}



export default App;
