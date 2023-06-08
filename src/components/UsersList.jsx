/* 
END POINT: https://dummyjson.com/users
Rendereizar os campos: firstName, lastName, age, gender, email, image, bloodGroup
Não esqueça de criar o botão para mostrar e sumir com a lista (como exemplo em aula)
*/
import { useState, useEffect } from "react";
import axios from "axios";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response);
      setUsers(response.data.users);
    }
    fetchUsers();
  }, []);
  function handleUsers() {
    setShowUsers(!showUsers);
  }
  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleUsers}>Mostrar Users</button>
      {showUsers === true && (
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <h3>{user.firstName}</h3>
                <p>{user.lastName}</p>
                <p>{user.age}</p>
                <p>{user.gender}</p>
                <p>{user.email}</p>
                <img src={user.image} />
                <p>{user.bloodGroup}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
