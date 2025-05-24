import DrawerAppBar from "./Component/Appbar/AppBar";
import Home from "./Component/Home/Home";
import TopBar from "./Component/TopBar/TopBar";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <DrawerAppBar/>
        <Home/>
    </div>
  );
}

export default App;
