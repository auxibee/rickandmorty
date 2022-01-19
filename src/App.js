import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "routes/routes";
import '../src/styles/app.css'
import {HelmetProvider} from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
    <Router>
      <AppRoutes />
    </Router>
    </HelmetProvider>
  );
}

export default App;
