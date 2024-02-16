import './App.css';
import Header from '../src/components/header/Header';
import Sidebar from './components/sidebar/SideBar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;