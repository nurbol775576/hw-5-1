import React from 'react';
import {useNavigate} from 'react-router-dom';
const Users = () => {
  const [users, setUsers] = useState(null);
 const [loading, setLoading] =useState(false);
 const navigate = useNavigate();
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.log(err))
    .finaly(() => setLoading(false));
  }, [])
    return (
        <ul>
            {loading
            ?  'loading ...'
        : users?.map((el) => (
            <li key={el.id}>
                {el.name} <button onClick={() => navigate(`/
                users/${el.id}`)}>more</button>
            </li>
        ))}
        </ul>
    );
};

export default Users;
