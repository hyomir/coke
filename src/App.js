import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Brand from './components/brand/Brand';
import Detail from './components/brand/Detail';
import Company from './components/history/Company';
import Since from './components/history/Since';
import Story from './components/story/Story';
import SocialValue from './components/socialValue/SocialValue';
import Sustain from './components/socialValue/Sustain';
import Notfound from './components/main/Notfound';
import SearchBox from './components/main/SearchBox';
import SearchResults from './components/main/SearchResults';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} basename={process.env.PUBLIC_URL}> 
      <Route path='/' element={<Home/>} />
      <Route path="/search" element={<SearchBox />} />
      <Route path="/result/:id" element={<SearchResults />} />
      <Route path="brand" element={<Brand />}>
      <Route path="detail/:id" element={<Detail />} />
      </Route>
      <Route path="company" element={<Company />} />
      <Route path="since" element={<Since />} />
      <Route path="story" element={<Story />} />
      <Route path="social" element={<Sustain />} />
      <Route path="sustainability" element={<SocialValue />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

function App() {
  return (
    <div className='App'>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
