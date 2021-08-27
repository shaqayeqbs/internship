import { useContext } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.mylogo}>
          <img src={logo} className={classes.mylogo}></img>
        </div>
        <div className={classes.text}>رویداد های دانشگاه گیلان</div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/call-with-us">تماس با ما</Link>
          </li>
          <li>
            <Link to="/">رویداد ها</Link>
          </li> 

          <li>
            <Link to="/new-event">اضافه کردن رویداد جدید</Link>
          </li>
          <li>
            <Link to="/favorites">
              مورد علاقه
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
