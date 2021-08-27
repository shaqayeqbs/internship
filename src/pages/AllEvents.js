import EventList from "../Components/events/eventList";
import react, { useState, useEffect } from "react";
import classes from "./callwithUs.module.css";
function AllEventssPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedevents, setLoadedEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://internship-793be-default-rtdb.firebaseio.com/events.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const events = [];
        for (const key in data) {
          const event = {
            id: key,
            ...data[key],
          };
          events.push(event);
        }
        setIsLoading(false);
        setLoadedEvents(events);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  //loadedevents be jaye dummmy data
  return (
    <section>
      <h2 className={classes.h2class}>رویداد ها</h2>

      <EventList events={loadedevents} />
    </section>
  );
}
export default AllEventssPage;
