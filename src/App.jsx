import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import Japan from "./assets/japan.png";
import Sydney from "./assets/sydney.png";
import Geirangerfjord from "./assets/geirangerfjord.png";
// import Contact from "./components/Contact.jsx";
// import mrWhiskerson from "../images/mr-whiskerson.png"; // Loading image asset so that bundler can process it

export default function App() {
  return (
    <>
      <Header />
      <Entry 
        img={{ src: Japan, alt: "Photo of Mount Fuji" }} 
        country="Japan"
        href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        location="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Entry 
        img={{src: Sydney, alt: "Photo of Sydney Opera House"}}
        country="AUSTRALIA"
        href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        location="Sydney Opera House"
        date="27 May, 2023 - 8 Jun, 2023"
        description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
      <Entry 
        img={{src: Geirangerfjord, alt: "Photo of Geirangerfjord"}}
        country="NORWAY"
        location="Geirangerfjord"
        date="01 Oct, 2024 - 18 Nov, 2024"
        description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />

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
