import React from 'react';
import {useParams} from 'react-router-dom';


const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() =>{
    
  })
    return (
        <div>UserDetails</div>
    );
}

export default UserDetails;
