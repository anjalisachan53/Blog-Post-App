import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, blog } = existingUser[0];
  const [values, setValues] = useState({
    name,
    blog
  });

  const handleEditUser = () => {
    setValues({ name: '', blog: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      blog: values.blog
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Title"
        value={values.name}
        onChange={(e) =>
          {
            if(e.target.value.length<=20)
            {
            setValues({ ...values, name: e.target.value })
            }
          }
          } 
        inputProps={{ type: 'text', placeholder: 'lorem ipsum' }}
      />
      <br />
      <TextField
        label="Your Thoughts..."
        value={values.blog}
        onChange={(e) =>
           {
            if(e.target.value.length<=20)
            {
            setValues({ ...values, blog: e.target.value })
          }
           }
           }
        inputProps={{ type: 'text', placeholder: 'lorem ipsum' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser