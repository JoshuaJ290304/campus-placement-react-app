import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddRegistration from "./components/AddRegistration";
import SearchRegistration from "./components/SearchRegistration";
import DeleteRegistration from "./components/DeleteRegistration";
import ViewRegistration from "./components/ViewRegistration";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<AddRegistration />} />
        <Route path="/search" element={<SearchRegistration />} />
        <Route path="/delete" element={<DeleteRegistration />} />
        <Route path="/view" element={<ViewRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;