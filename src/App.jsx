import { BrowserRouter, Route, Routes } from "react-router-dom"
import ControllerInput from "./components/ControllerInput"
import Counter from "./components/Counter"
import CounterParent from "./components/CounterParent"
import FakeApiFetch from "./components/FakeApiFetch"
import OpenAndCloseParent from "./components/OpenAndCloseParent"
import ProfileCard from "./components/ProfileCard"
import Todo from "./components/Todo"
import Toggle from "./components/Toggle"
import Header from "./components2/Header"
import Home from "./components2/Home"
import Contact from "./components2/Contact"
import About from "./components2/About"
import NotFound from "./components2/NotFound"
import Form from "./components/Form"
import UsernameSaver from "./custom Hook/UsernameSaver"
import SearchFilter from "./components2/SearchFilter"
import Tabs from "./components2/Tabs"
 


function App() {

  return (
    <>
    {/* <ProfileCard name="Adarsh" title="React developer" avatarURL="https://i.pravatar.cc/150?img=3"/>
    <Counter /> */}
    {/* <Todo /> */}
    {/* <Toggle /> */}
    {/* <ControllerInput /> */}
    {/* <FakeApiFetch /> */}
    {/* <CounterParent /> */}
    {/* <OpenAndCloseParent /> */}
    {/* <Form /> */}
    {/* <UsernameSaver /> */}
    {/* <SearchFilter /> */}
    <Tabs />
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
