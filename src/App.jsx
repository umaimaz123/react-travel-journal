import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Entry /> */}

      {/* Practice of passing data to Contacts */}
      <div className="contacts"> 
        <Contact 
          img="./images/mr-whiskerson.png"
          imgAlt="Photo of Mr. Whiskerson"
          name="Mr. Whiskerson"
          contact="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="./images/fluffykins.png"
          imgAlt="Photo of Fluffykins"
          name="Fluffykins"
          contact="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact 
          img="./images/felix.png"
          imgAlt="Photo of Felix"
          name="Felix"
          contact="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact 
          img="./images/pumpkin.png"
          imgAlt="Photo of Pumpkin"
          name="Pumpkin"
          contact="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </>
  )
}
