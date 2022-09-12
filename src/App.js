import { useSelector } from "react-redux";
import "./App.scss";
import Success from "./components/Success";
import Users from "./components/Users";

function App() {
  const { isSentInvitation } = useSelector((state) => state.users);

  return (
    <div className="App">{isSentInvitation ? <Success /> : <Users />}</div>
  );
}

export default App;
