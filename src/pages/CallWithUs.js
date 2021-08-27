import React from "react";
import classes from "./callwithUs.module.css";
import foot from "../images/main-footer.png";

import flag from "../images/flag.jpg";

function CallWithUs() {
  return (
    <section>
      <h2 className={classes.h2class}>تماس با ما</h2>
      <iframe className={classes.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.278387526621!2d49.638780615259!3d37.193616679869486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff56656d13fc3a9%3A0x1cf42c6b054175b0!2sUniversity%20of%20Guilan!5e0!3m2!1sen!2sde!4v1629544471051!5m2!1sen!2sde"
        width="550"
        height="375"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <img className={classes.imgclass} src={flag} alt="flag"></img>
      <span className={classes.imgclass1}>
        تولید؛ پشتیبانی‌ها، مانع زدایی‌ها
      </span>
      <div className={classes.container}>
        <div>
          <img className={classes.foot} src={foot}></img>
        </div>
        <div className={classes.text}>
          <div className={classes.innertext}>
            رشت، بزرگراه خلیج فارس، کیلومتر ۵ جاده قزوین، مجتمع دانشگاه گیلان
          </div>
          <div className={classes.innertext}>کدپستی :۴۱۹۹۶۱۳۷۷۶</div>
          <div className={classes.innertext}>تلفن خانه: 33690274-013</div>
        </div>
      </div>
    </section>
  );
}
export default CallWithUs;
