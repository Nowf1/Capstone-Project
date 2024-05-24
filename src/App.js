import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="sign-in" element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
