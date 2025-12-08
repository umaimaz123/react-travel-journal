import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import Contact from "./components/Contact.jsx";
import mrWhiskerson from "../images/mr-whiskerson.png"; // Loading image asset so that bundler can process it

export default function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Entry /> */}

      {/* Practice of passing data to Contacts */}
      <div className="contacts"> 
        <Contact 
          img={mrWhiskerson} // using imported image asset
          imgAlt="Photo of Mr. Whiskerson"
          name="Mr. Whiskerson"
          contact="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
          num={1} // adding non-string prop example
        />
        <Contact
          img="./images/fluffykins.png"
          imgAlt="Photo of Fluffykins"
          name="Fluffykins"
          contact="(212) 555-2345"
          email="fluff@me.com"
          num={2}
        />
        <Contact 
          img="./images/felix.png"
          imgAlt="Photo of Felix"
          name="Felix"
          contact="(212) 555-4567"
          email="thecat@hotmail.com"
          num={3}
        />
        <Contact 
          img="./images/pumpkin.png"
          imgAlt="Photo of Pumpkin"
          name="Pumpkin"
          contact="(0800) CAT KING"
          email="pumpkin@scrimba.com"
          num={4}
        />
      </div>
    </>
  )
}
