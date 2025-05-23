import DrawerAppBar from "./Component/Appbar/AppBar";
import OurFeature from "./Component/OutFeature/OurFeature";
import TopBar from "./Component/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <DrawerAppBar/>
      <OurFeature/>
    </div>
  );
}

export default App;
