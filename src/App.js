import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout'
import Home from './components/home/Home'
import Brand from './components/brand/Brand'
import Detail from 'components/brand/Detail'
import Company from './components/history/Company'
import Since from './components/history/Since'
import Story from './components/story/Story'
import SocialValue from './components/socialValue/SocialValue'
import Sustain from './components/socialValue/Sustain'
import Notfound from './components/main/Notfound';
import SearchBox from './components/main/SearchBox';
import SearchResults from './components/main/SearchResults'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/search" element={<SearchBox />} />
        <Route path="/result/:id" element={<SearchResults/>} />
      <Route path ="brand" element={<Brand/>}>
      <Route path="detail/:id" element={<Detail/>}></Route>
      </Route>
      <Route path="company" element={<Company/>}></Route>
      <Route path="since" element={<Since/>}></Route>
      <Route path ="story" element={<Story/>}></Route>
      <Route path ="social" element={<SocialValue/>}></Route>
      <Route path="sustainability" element={<Sustain/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Route>
  )
)

function App(){
  return (
    <div className='App'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;