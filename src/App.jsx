import { Routes,Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Realisation from './pages/Realisation';
import Service from './pages/Service';
import Mention from "./pages/MentionLegale";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Realisation" element={<Realisation/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>
        <Route path="/Mentions" element={<Mention/>}></Route>
      </Routes>
    </main>
  );
};

export default App;
