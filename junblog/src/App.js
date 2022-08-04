import TopBar from './components/topbar/TopBar';
import Home from './homepage/Home';
import Single from './components/single/Single';
import Write from './write/Write';
import Setting from './setting/Setting';
import Login from './login/Login';
import Register from './register/Register';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/setting" element={user?<Setting/>:<Register/>}/>
        <Route path="/write" element={user?<Write/>:<Register/>}/>
        <Route path="/post/:postID" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
