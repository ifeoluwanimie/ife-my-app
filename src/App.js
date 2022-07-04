import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import MyForm from "./components/MyForm";
import Login from "./components/Login";
import Register from "./components/Register";
import EditForm from "./components/EditForm";
import AllContactsPage from "./components/AllContactsPage";
import SingleContact from "./components/SingleContact";

// import MyForm from "./components/MyForm";

function App() {
  return (
    <div>
      <MyForm />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/edit/:id" element={<EditForm />} />
            <Route path="/all-contacts" element={<AllContactsPage />} />
            <Route path="/all-contacts/:id" element={<SingleContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;