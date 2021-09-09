import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ContactPage } from "./page/contact.page";
import { HomePage } from "./page/home.page";
import { Layout } from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout exact>
          <Route component={HomePage} path="/" exact />
          <Route component={ContactPage} path="/contact" exact />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
