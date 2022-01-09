import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "routes/routes";
import '../src/styles/app.css'

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
