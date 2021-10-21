import logo from './logo.svg';
import './App.css';
import ava from './modules/ava.jpg';
import Card from './modules/index.js'

const user1 = {
  name: "Tommy Vercetti",
  tagline: "@Vercetti",
  imgSrc: ava,
  fol: "400",
  post: "18"
}
function App() {
  return (
    <Card user={user1}/>
  );
}



export default App;
