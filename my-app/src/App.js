import CommingSoonContainer from './Pages/CommingSoon/CommingSoonContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <CommingSoonContainer />
      </div>
    </Router>
  );
}

export default App;
