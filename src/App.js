import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout'
import Main from './components/Main'
import Brand from './components/brand/Brand'
import History from './components/history/History'
import Company from './components/history/Company'
import Since from './components/history/Since'
import Story from './components/story/Story'
import SocialValue from './components/socialValue/SocialValue'
import Sustain from './components/socialValue/Sustain'
import Social from './components/socialValue/Social'
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<RootLayout/>}>
      <Route index element={<Main/>}></Route>
      <Route path ="brand" element={<Brand/>}></Route>
      <Route path ="history" element={<History/>}>
        <Route path="company" element={<Company/>}></Route>
        <Route path="since" element={<Since/>}></Route>
      </Route>
      <Route path ="story" element={<Story/>}></Route>
      <Route path ="social-value" element={<SocialValue/>}>
        <Route path="sustainability" element={<Sustain/>}></Route>
        <Route path="social" element={<Social/>}></Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <div className='App'>
      <RouterProvider router ={router}>
      </RouterProvider>
    </div>
  );
}

export default App;