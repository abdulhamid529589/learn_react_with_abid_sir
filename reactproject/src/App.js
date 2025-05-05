import './App.css';
import BoxModel from './Components/BoxModel/BoxModel';
import Bg from './Components/Background/Bg.jsx'
import RecipeReviewCard from './Components/RecipeReviewCard/RecipeReviewCard.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hellow</h1>
      <BoxModel/>
      <Bg/>
      <RecipeReviewCard/>
    </div>
  );
}

export default App;
