import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }
  return (
    <>
       <h3>React Core Concepts</h3>
       <Friends></Friends>
       <Team></Team>
       <Counter></Counter>
       <button onClick = {handleClick}>Click me</button>
       <button onClick = {handleClick2}>Click 2</button>
    </>
  )
}

export default App
