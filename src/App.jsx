import { BrowserRouter, Switch } from "react-router-dom";
import { Layout } from "./Layout";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Router />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
