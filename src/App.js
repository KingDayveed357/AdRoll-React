import React, {useState} from "react";
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';
// import QuoteCallout from './components/QuoteCallout';



function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
};

  return (
<div className={`drawer drawer-end`}>
<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col">
  <Header  />

  {/* Page content here */}
  <Section/>
  <Footer/>
</div>
<div className="drawer block lg:hidden bg-white ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

  <div className={`drawer-side right-0  `} >
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
  </div>
</div>
</div>
    
  );
}

export default App;
