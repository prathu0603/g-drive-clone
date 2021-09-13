import "./App.css";
import Signup from "./Components/User/Signup";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/User/Profile";
import Signin from "./Components/User/Signin";
import PrivateRoute from "./PrivateRoutes";
import ForgotPassword from "./Components/User/ForgotPassword";
import UpdateProfile from "./Components/User/UpdateProfile";
import Dashboard from "./Components/GDrive/Dashboard";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            {/* G-Drive Routes */}
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/folder/:folderId"
              component={Dashboard}
            />
            {/* User Routes */}
            <PrivateRoute exact path="/user" component={Profile} />
            <PrivateRoute
              exact
              path="/update_profile"
              component={UpdateProfile}
            />

            {/* Auth Routes */}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/forgot_password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
