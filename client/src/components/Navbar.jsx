import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link>PicPrism</Link>
        <h1>hello</h1>
      </div>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
    </div>
  );
};

export default Navbar;
