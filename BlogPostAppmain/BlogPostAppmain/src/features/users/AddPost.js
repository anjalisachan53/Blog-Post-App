import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    blog: ''
  });
  const [error, setError] = useState('');

  const handleAddUser = () => {
    // Check if both name and blog fields are not empty
    if (values.name.trim() !== '' && values.blog.trim() !== '') {
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        blog: values.blog
      }));
      setValues({ name: '', blog: '' }); // Clear the input fields
      navigate('/');
    } else {
      setError('Both fields are required.'); // Display an error message
    }
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Title"
        value={values.name}
        onChange={(e) => {
          if (e.target.value.length <= 20) {
            setValues({ ...values, name: e.target.value });
            setError(''); // Clear the error message when the user types in the field
          }
        }}
        inputProps={{ type: 'text', placeholder: 'lorem ipsum' }}
      />
      <br />
      <TextField
        label="Your Thoughts.."
        value={values.blog}
        onChange={(e) => {
          if (e.target.value.length <= 200) {
            setValues({ ...values, blog: e.target.value });
            setError(''); // Clear the error message when the user types in the field
          }
        }}
        inputProps={{ type: 'blog', placeholder: 'lorem ipsum' }}
      />
      {error && <p className="text-red-500">{error}</p>} {/* Display the error message */}
      <Button onClick={handleAddUser}>Post</Button>
    </div>
  )
}

export default AddUser;
