import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddPost";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-12">
      <h1 className="text-center font-bold text-4xl text-gray-700 underline">BLOG APP</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
