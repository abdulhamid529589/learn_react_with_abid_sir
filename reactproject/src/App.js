import './App.css';
import BoxModel from './Components/BoxModel/BoxModel';
import Bg from './Components/Background/Bg.jsx'
import RecipeReviewCard from './Components/RecipeReviewCard/RecipeReviewCard.jsx';
import Content from './Components/Content/Content.jsx';
import DrawerAppBar from './Components/DrawerAppBar/DrawerAppBar.jsx';

function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <BoxModel/>
      <Bg/>
      <Content/>
      <RecipeReviewCard/>
    </div>
  );
}

export default App;
