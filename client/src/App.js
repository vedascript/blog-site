import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Settings } from "./Pages/Settings/Settings";
import { SinglePost } from "./Pages/SinglePost/SinglePost";
import { Write } from "./Pages/Write/Write";

function App() {
  return (
    <div>
      <Navbar />
      <Settings />
    </div>
  );
}

export default App;
