import logo from './logo.svg';
import './App.css';
import TopBar from './Component/TopBar';
import { FollowupPage } from './Component/FollowupPage';
import  Carousel from './Component/Carousel';
function App() {
  return (
    <div className="App">
        
         <FollowupPage name="Cakes" image="cake.png" id="1"  color="yellow"/>
         
         <FollowupPage name="Bento" image="pastry.png" id="2" color="white"/>
         <FollowupPage name="Cupcake" image="cupcake.png" id="3" color="yellow"/>
         

    </div>
  );
}

export default App;
