import './App.css';
import Basic from './components/Basic';
import Customizing from './components/Customizing';
// import Horizontal from './components/Horizontal Split';
import Nested from './components/Nested Split Panes';
import Resizing from './components/Resizable Sidebar';
import Saving from './components/Saving and Restoring Pane Sizes';

function App() {
  return (
    <div>
      <Basic />
      <Nested />
      <Customizing />
      <Saving />

      <Resizing />
      {/* <div>
        <Horizontal />
      </div> */}
    </div>
  );
}

export default App;
