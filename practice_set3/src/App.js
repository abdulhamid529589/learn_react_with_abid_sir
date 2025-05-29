import DrawerAppBar from "./Component/Appbar/AppBar";
import Home from "./Component/Home/Home";
import MainBody from "./Component/MainBody/MainBody";
import TopBar from "./Component/TopBar/TopBar";
import OurFeature from "./Component/WebFeature/OurFeature";
import WebFeatureAdd from "./Component/WebFeatureadd/WebFeatureAdd";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <DrawerAppBar/>
        <Home/>
        <OurFeature/>
        <WebFeatureAdd/>
        <MainBody/>
    </div>
  );
}

export default App;
