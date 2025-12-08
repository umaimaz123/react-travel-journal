import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import Japan from "./assets/japan.png";
import Sydney from "./assets/sydney.png";
import Geirangerfjord from "./assets/geirangerfjord.png";
import data from "./Data.js";
// import Contact from "./components/Contact.jsx";
// import mrWhiskerson from "../images/mr-whiskerson.png"; // Loading image asset so that bundler can process it

export default function App() {
  const entryElement = data.map(entry => {
    return (
      <Entry 
        // if we remove the key prop here, React will show a warning in the console: 
        // "Each child in a list should have a unique "key" prop." 
        // that is why it is important to always add a key prop when rendering lists in React.
        // the work "key" is a reserved word in React, so we cannot use it as a prop name in our components.
        key={entry.id}
        entry={entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
        {entryElement}
      </main>

      {/* Practice of passing data to Contacts */}
      {/* <div className="contacts"> 
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
      </div> */}
    </>
  )
}
