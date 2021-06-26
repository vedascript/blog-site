import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { SinglePost } from "./Pages/SinglePost/SinglePost";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <SinglePost />
    </div>
  );
}

export default App;
