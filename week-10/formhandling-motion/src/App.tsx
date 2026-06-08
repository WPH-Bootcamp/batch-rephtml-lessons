import "./App.css";
import Zod from "./components/Zod";
import RHF from "./components/RHF";
import ZodRHF from "./components/ZodRHF";
import FramerMotion from "./components/FramerMotion";

function App() {
  return (
    <>
      <h1>Form Handling + Framer Motion</h1>
      <div className="p-4 border border-gray-200 shadow-sm">
        {/* <Zod /> */}
        {/* <RHF /> */}
        {/* <ZodRHF /> */}
        <FramerMotion />
      </div>
    </>
  );
}

export default App;
