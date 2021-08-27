import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import EventList from "../Components/events/eventList";
import classes from "./callwithUs.module.css";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p className={classes.lets}>شما هنوز رویداد مورد علاقه ای ندارید،میخواهید اضافه کنید؟ </p>;
  } else {
    content = <EventList events={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h2 className={classes.h2class}>مورد علاقه من</h2>
      {content}
    </section>
  );
}
export default FavoritesPage;
