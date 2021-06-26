import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { SinglePost } from "./Pages/SinglePost/SinglePost";
import { Write } from "./Pages/Write/Write";

function App() {
  return (
    <div>
      <Navbar />
      <Write />
    </div>
  );
}

export default App;
