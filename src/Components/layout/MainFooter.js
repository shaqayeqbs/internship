import classes from "./footer.module.css";
import logo from "../../images/logo-footer.png";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.imagefooter}>
        <img src={logo} alt="logo-footer"></img>
      </div>
      <div className={classes.seconddiv}>
        <div className={classes.title}>مراکز</div>
        <ul className={classes.myul}>
          <li>
            <a href="http://www.saamad.ir/portal/Home/Default.aspx">
              ارتباط مردمی ریاست جمهوری
            </a>
          </li>

          <li>
            <a href="http://www.investingilan.ir/">خدمات سرمایه گذاری استان</a>
          </li>
          <li>
            <a href="https://www.olgou.ir/index.php/fa/">
              الگوی اسلامی ایرانی پیشرفت
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.thirddiv}>
        <div className={classes.title}>پایگاه های اطلاع رسانی</div>
        <ul className={classes.myul}>
          <li>
            <a href="https://www.leader.ir/">دفتر مقام معظم رهبری</a>
          </li>

          <li>
            <a href="http://www.president.ir/">ریاست جمهوری اسلامی ایران</a>
          </li>
          <li>
            <a href="https://isc.ac/fa">علوم جهان اسلام</a>
          </li>
        </ul>
      </div>
      <div className={classes.forthdiv}>
        <div className={classes.title}>سازمان ها</div>
        <ul className={classes.myul}>
          <li>
            <a href="http://iranhdm.ir/">موزه انقلاب اسلامی و دفاع مقدس</a>
          </li>

          <li>
            <a href="https://www.msrt.ir/fa"> وزارت علوم، تحقیقات و فناوری</a>
          </li>
          <li>
            <a href="http://isef.ir/">
            فدراسیون سرآمدان علمی ایران
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default MainFooter;
