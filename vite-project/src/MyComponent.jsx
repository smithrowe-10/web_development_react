import { useContext } from "react";
import AuthContext from "./AuthContext";

function MyComponent() {
  const authContext = useContext(AuthContext);

  return (
    <>
      Welcome {authContext} 😊
    </>
  );
}

export default MyComponent;