import DrawerAppBar from "./Component/Appbar/AppBar";
import Home from "./Component/Home/Home";
import TopBar from "./Component/TopBar/TopBar";
import OurFeature from "./Component/WebFeature/OurFeature";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <DrawerAppBar/>
        <Home/>
        <OurFeature/>
    </div>
  );
}

export default App;
