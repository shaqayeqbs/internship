import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Slider } from "../../Slider";
import "../../scss/Main.css";
import MainFooter from "./MainFooter";
import News from "./News";

function Layout(props) {
  return (
    <div>
      <MainNavigation />

      <div>
        <div className={classes.container}>
          <News />
          <div className={classes.newcontainer}>
            <div>
              <Slider></Slider>
            </div>
            <div>
              <main className={classes.main}>{props.children}</main>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default Layout;
