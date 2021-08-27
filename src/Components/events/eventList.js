import classes from "./EventsList.module.css";
import EventItem from "./eventItem";

function EventList(props) {
  return (
    
    <ul className={classes.list}>
      
      {props.events.map((event) => (
        <EventItem  
          
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          address={event.address}
          description={event.description}
        />
      ))}
    </ul>
  );
}

export default EventList;
