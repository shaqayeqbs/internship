import { Route, Switch } from "react-router-dom";
import AllEventssPage from "./pages/AllEvents";
import NewEventPage from "./pages/NewEvents";
import FavoritesPage from "./pages/Favorites";
import Layout from "./Components/layout/Layout";
import CallWithUs from "./pages/CallWithUs";

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllEventssPage />
        </Route>
        <Route path="/call-with-us">
          <CallWithUs />
        </Route>
        <Route path="/new-event">
          <NewEventPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
