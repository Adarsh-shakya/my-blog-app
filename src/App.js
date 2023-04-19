import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const user=false;
  return (
   <div>
    <Router>
      <TopBar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={user?<Home/>:<Register/>}/>
          <Route path='/login' element={user?<Home/>:<Login/>}/>
          <Route path='/write' element={user?<Write/>:<Register/>}/>
          <Route path='/setting' element={user?<Setting/>:<Register/>}/>
          <Route path='/post/:postId' element={<Single/>}/>
          
        </Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
