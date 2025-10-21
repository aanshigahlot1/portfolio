import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Project/Project";

function App() {
  return (
    <>
      
      <Layout/>
      <div className="container">
        <About/>
        <Techstack/>
        <Project/>
      </div>
    </>
  );
}

export default App;
