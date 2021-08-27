import { useHistory } from "react-router-dom";
import classes from "./callwithUs.module.css";
import NewEventForm from "../Components/events/NewEventForm";
function NewEventPage() {
  const history = useHistory();
  function addEventHandler(eventData) {
    fetch("https://internship-793be-default-rtdb.firebaseio.com/events.json", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h2 className={classes.h2class}>اضافه کردن رویداد جدید</h2>
      <NewEventForm onAddEvent={addEventHandler} />
    </section>
  );
}
export default NewEventPage;
