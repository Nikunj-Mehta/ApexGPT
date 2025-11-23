import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from './MyContext.jsx';

function App() {
  const providerValues = {}; // We will be passing down our values using this object. It is used to avoid passing state variables to each component store it here and any component can use it. 

  return (
    <div className='app'>
      <MyContext.Provider values={providerValues}></MyContext.Provider>
      <Sidebar></Sidebar>
      <ChatWindow></ChatWindow>
    </div>
  )
}

export default App
