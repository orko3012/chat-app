import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact name="Li Yun" avatar="https://randomuser.me/api/portraits/women/70.jpg" online />
      <Contact name="Simon Raj" avatar="https://randomuser.me/api/portraits/men/28.jpg" />
      <Contact name="Marie Stu" avatar="https://randomuser.me/api/portraits/women/56.jpg" online />
    </div>
  );
}

export default App;
