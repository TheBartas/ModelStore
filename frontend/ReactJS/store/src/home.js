// import HomeNavbar from './navbar/navbar.home';

import SignUp from "./auth/signup";
import { useAuth } from "./auth.user";

function Form() {

  const { logout } = useAuth();

  logout();

  return (

    <div>
      {/* <HomeNavbar /> */}
      <SignUp />
    </div>
  )
}
export default Form;