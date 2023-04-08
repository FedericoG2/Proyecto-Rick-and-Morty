import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../Search/Search";

const NavBar = () => {
  return (
    <div className={style.bg}>
      <div className={style.bgHyC}>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
