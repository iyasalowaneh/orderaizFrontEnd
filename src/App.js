import { useSelector } from "react-redux";
import "./App.css";

//components
import Routes from "./components/Routes";
function App() {
  const user = useSelector((state) => state.user.user);
  const itemsArray = useSelector((state) => state.items.items);

  console.log(itemsArray);

  return (
    <div>
      <h1>Hello {user.firstName}</h1>
      <Routes />
    </div>
  );
}

export default App;
