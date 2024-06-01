import FAQ from "./components/Accordion/FAQ";
import Carrousel from "./components/carrousel/carrousel";

function App() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-4">
       
        <FAQ />
        <br />
        <Carrousel/>
        <br />
        

      </div>
    </div>
  );
}

export default App;
