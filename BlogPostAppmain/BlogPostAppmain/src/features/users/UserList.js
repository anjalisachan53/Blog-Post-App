import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  // State to keep track of like counts
  const [likes, setLikes] = useState({});

  // Function to handle like button click
  const handleLikeClick = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  }

  const renderCard = () =>
    users.map((user) => (
      <div className="bg-gray-200 p-5 flex items-center justify-between mb-10 rounded-lg shadow-md" key={user.id}>
        <div style={{ maxWidth: '80%' }}>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span style={{ wordWrap: 'break-word' }} className="font-normal text-gray-600">{user.blog}</span>
        </div>
        <div className="flex gap-6">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </Link>
          <button onClick={() => handleRemoveUser(user.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <button onClick={() => handleLikeClick(user.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-5 text-red-500">
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
            <span className="ml-1">{likes[user.id] || 0}</span>
          </button>
        </div>
        
      </div>
    ));

  return (
    <div>
      <Link to="/add-user"><Button>Add Blog</Button></Link>
      <div className="flex flex-col">
        {users.length ? renderCard() : <p className="text-center text-gray-700 font-semibold">No Posts for now....</p>}
      </div>
    </div>
  );
}

export default UserList;
