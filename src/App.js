import './App.css';
import DashBoard from './components/dashboard';
import Sidebar from './components/sidebar';

const App=()=>{
  return(
    <div className="main_container">
    <Sidebar/>
    <DashBoard/>
    </div>
  )
}

export default App;
