import classes from "./News.module.css";
function News() {
  return (
    <section className={classes.container1}>
      <h2>اطلاعیه ها</h2>

      <div>
        <div className={classes.maintext}>
          نحوه دسترسی دانشجویان به سامانه آموزش دانشگاه
        </div>
        <div className={classes.text}>سه‌شنبه، ۱۹ مرداد ۱۴۰۰</div>
      </div>
      <div>
        <div className={classes.maintext}>
          پذیرش بر اساس سوابق تحصیلی (بدون آزمون) در دانشگاه گیلان ویژه داوطلبان
          آزمون سراسری سال ۱۴۰۰
        </div>
        <div className={classes.text}>شنبه، ۱۶ مرداد ۱۴۰۰</div>
      </div>
      <div>
        <div className={classes.maintext}>
          نحوه فعالیت دانشگاه در ایام تابستان 1400
        </div>
        <div className={classes.text}>شنبه، ۱۶ مرداد ۱۴۰۰</div>
      </div>
      <div>
        <div className={classes.maintext}>
          عدم دسترسی به سامانه Erp در روز 12 مرداد ماه
        </div>
        <div className={classes.textfree}>سه‌شنبه، ۱۲ مرداد ۱۴۰۰</div>
      </div>
    </section>
  );
}

export default News;
