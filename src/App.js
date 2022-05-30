import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CreatePost from './CreatePost'
import Post from './Post'

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/Blog" element={<Home />}>
        </Route>
        <Route exact path="/Blog/create" element={<CreatePost />}>
        </Route>
        <Route exact path="/Blog/posts/:id" element={<Post />}>
        </Route> 
      </Routes>
    
    </>
  );
}

export default App;
