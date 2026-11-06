import About from "./About";
import Advantages from "./Advantages";
import BookReminder from "./BookReminder";
import Header from "./Header";
import Reviews from "./Reviews";
import Services from "./Services";

export default function Homepage() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Advantages />
      <BookReminder />
      <Reviews />
    </div>
  );
}
