import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";

export default function App() {
  const Firstname = "John";
  return (
    <>
      {/* <Header /> */}
      {/* <Entry /> */}

      <h1> It is currently about {new Date().getHours() % 12 }</h1> 
      {/* The {} brackets contain the Javascript code */}
    </>
  )
}
