import * as React from "react";
import "./styles.css";

const [GRID, LIST] = ["Grid", "List"];
export default function App() {
  const [users, setUsers] = React.useState([]);
  const [viewType, setViewType] = React.useState(GRID);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  function getRevertType() {
    return viewType === GRID ? LIST : GRID;
  }
  const handleViewType = () => {
    setViewType(getRevertType());
  };
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <button onClick={handleViewType}>{getRevertType()}</button>

      <div className="">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id} className={`card ${viewType}`}>
                <img key={user.avatar} src={user.avatar} />
                <div className="card-content">
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
