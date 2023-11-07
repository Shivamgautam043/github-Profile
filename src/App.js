import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [userNameData, setUserNameData] = useState("");

  const [movies, setMovies] = useState({});
  const [userId, setuserId] = useState("");
  const [userName, setuserName] = useState("");
  const [userFollowers, setuserFollowers] = useState("");
  const [userBio, setuserBio] = useState("");
  const [userPic, setuserPic] = useState(
    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  );
  const[dataFetched,setdataFetched]=useState(false);
  const getAPIdata = async () => {
    const result = await axios.get(
      "https://api.github.com/users/" + userNameData
    );
    console.log(result);
    setMovies(result);
    setuserId(result.data.id);
    setuserName(result.data.name);
    setuserBio(result.data.bio);
    setuserFollowers(result.data.followers);
    setuserPic(result.data.avatar_url);
    setdataFetched(true);
  };

  return (
    <div>
      <div className="App">
        <input
          className="shiv"
          type="text"
          placeholder="Enter your github username"
          value={userNameData}
          onChange={(e) => setUserNameData(e.target.value)}
        ></input>

        <button className="search" onClick={getAPIdata}>
          Search
        </button>
      </div>
      {/* <p>{JSON.stringify(movies)}</p> */}

      {/* <p>your id is:{movies.data.id}</p> */}

      { dataFetched?(
      <div className="shivam">
        <table>
          <td>
            <img src={userPic} alt="" height={150} width={150} />

            <ul>
              <li>User ID :{userId}</li>

              <li>User Name :{userName}</li>

              <li>User Bio :{userBio}</li>

              <li>User Followers :{userFollowers}</li>
            </ul>
          </td>
        </table>
      </div>):(
        <p>data is loading.......</p>)}
      
    </div>
  );
}

export default App;
