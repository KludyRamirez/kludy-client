import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontWeight: "600",
            textAlign: "center",
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home title={"Landing"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
