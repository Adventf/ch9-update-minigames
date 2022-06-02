import { useState, useEffect } from "react";
import { db } from "../../services/firebase-config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import "./InputScore.css";

function App() {
  const [newUsername, setNewUsername] = useState("");
  const [newScore, setNewScore] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { username: newUsername, score: Number(newScore) });
    window.location.reload();
  };

  const updateUser = async (id, score) => {
    const userDoc = doc(db, "users", id);
    const newFields = { score: score + 1 };
    await updateDoc(userDoc, newFields);
    window.location.reload();
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="appis">
      <div className="row">
        <div className="col">
          <h2>Input Your Score Here!</h2>
          <input
            placeholder="Username"
            onChange={(event) => {
              setNewUsername(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Score"
            onChange={(event) => {
              setNewScore(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="submitis" onClick={createUser}>
            Submit
          </button>
        </div>
      </div>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <div className="row-sm">
              <h6 className="col-sm">Username: {user.username}</h6>
              <h6 className="col-sm">Score: {user.score}</h6>
            </div>
            <div className="buttonis">
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                {" "}
                <h6>Delete User</h6>
              </button>
              <button
                onClick={() => {
                  updateUser(user.id, user.score);
                }}
              >
                {" "}
                <h6>Increase Score</h6>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
