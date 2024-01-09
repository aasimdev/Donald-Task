import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useMenu } from "./context/SidebarContext";

function App() {
  const { showSidebar } = useMenu("");
  return (
    <>
      <Header />
      <div className="block">
        <Sidebar isOpen={showSidebar}/>
        <Content />
      </div>
    </>
  );
}

export default App;
