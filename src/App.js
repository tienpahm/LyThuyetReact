import logo from "./logo.svg";
import "./App.css";
import DemoHookUseState from "./Hooks/DemoHookUseState";
import DemoHookUseEffect from "./Hooks/DemoHookUseEffect";
import DemoHookUseCallBack from "./Hooks/DemoHookUseCallBack";
import DemoHookUseMemo from "./Hooks/DemoHookUseMemo";
import DemoHookUseRef from "./Hooks/DemoHookUseRef";
import DemoHookUseReducer from "./Hooks/DemoHookUseReducer";
import DemoHookUseContext from "./Hooks/DemoHookUseContext";
import ContextProvider from "./Hooks/Context/ContextProvider";
import DemoHookRedux from "./Hooks/DemoHookRedux";
import DemoUseSpring from "./Hooks/DemoUseSpring";
import Ex2UseString from "./Hooks/Ex2UseString";
import Ex3UseSprings from "./Hooks/Ex3UseSprings";
import Ex4UseTrail from "./Hooks/Ex4UseTrail";
import Ex5UseTransition from "./Hooks/Ex5UseTransition";
import Ex6UseChain from "./Hooks/Ex6UseChain";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        {/* <DemoHookUseState /> */}
        {/* <DemoHookUseEffect /> */}
        {/* <DemoHookUseCallBack /> */}
        {/* <DemoHookUseMemo /> */}
        {/* <DemoHookUseRef /> */}
        {/* <DemoHookUseReducer /> */}
        {/* <DemoHookUseContext /> */}
        {/* <DemoHookRedux /> */}
        {/* <DemoUseSpring /> */}
        {/* <Ex2UseString /> */}
        {/* <Ex3UseSprings /> */}
        {/* <Ex4UseTrail /> */}
        {/* <Ex5UseTransition /> */}
        {/* <Ex6UseChain /> */}
      </div>
    </ContextProvider>
  );
}

export default App;
