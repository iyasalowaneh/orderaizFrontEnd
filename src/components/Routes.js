import { Switch, Route } from "react-router";

//components
import Signup from "./Users/Signup";
import Signin from "./Users/Signin";
import ItemList from "./Item/ItemList";
import AddItem from "./Item/AddItem";
const Routes = () => {
  return (
    <Switch>
      <Route path="/items/new">
        <AddItem />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/items">
        <ItemList />
      </Route>
    </Switch>
  );
};
export default Routes;
