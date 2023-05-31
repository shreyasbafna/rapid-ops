import { SetStateAction, useState } from "react";
import "./App.css";
import {
  addMemberToRepo,
  deleteMemberFromRepoByUserId,
  getRepoMembers,
  getUserIDByUsername,
} from "./helpers/helpers";
import Home from "./modules/app/Home/Home";
import { Header } from "./components/Header/Header";

function App() {
  const fetchMembers = async () => {
    const repoId = 46419912; //438;
    const members = await getRepoMembers(repoId);
    // Do something with the members array
    console.log("Members:", members);
  };

  const repoId = 46419912;
  const [email, setEmail] = useState("");
  const [accessLevel, setAccessLevel] = useState("developer");

  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleAccessLevelChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setAccessLevel(event.target.value);
  };

  const getAccessLevelValue = (accessLevel: string) => {
    // Map the access level string to its corresponding value
    switch (accessLevel) {
      case "developer":
        return 30;
      case "maintainer":
        return 40;
      // Add more cases for other access levels if needed
      default:
        return 0; // Default value for unknown access level
    }
  };

  const addMember = async () => {
    getUserIDByUsername(email).then(async (userId) => {
      if (userId) {
        // User ID retrieved successfully, perform any necessary actions
        console.log(`User ID for ${email}: ${userId}`);
        const accessLevelValue = getAccessLevelValue(accessLevel);
        const success = await addMemberToRepo(repoId, userId, accessLevelValue);

        if (success) {
          // Member added successfully, perform any necessary actions
        } else {
          // Failed to add member to the repository, handle the error
        }
      } else {
        // Failed to retrieve the user ID, handle the error
        console.error("Failed to retrieve the user ID");
      }
    });
  };

  const deleteMember = async () => {
    getUserIDByUsername(email).then(async (userId) => {
      if (userId) {
        // User ID retrieved successfully, perform any necessary actions
        await deleteMemberFromRepoByUserId(repoId, userId);
      } else {
        // Failed to retrieve the user ID, handle the error
        console.error("Failed to retrieve the user ID");
      }
    });
  };
  return (
    <>
      {/* <Header /> */}
      <div>
        <Home />
        <button onClick={fetchMembers}>Get Repository Members</button>

        {/* <button onClick={handleDeleteRepo}>Delete Repository</button> */}
      </div>

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <label htmlFor="accessLevel">Access Level:</label>
      <select
        id="accessLevel"
        value={accessLevel}
        onChange={handleAccessLevelChange}
      >
        <option value="developer">Developer</option>
        <option value="maintainer">Maintainer</option>
        {/* Add more options for other access levels if needed */}
      </select>
      <br />
      <button onClick={addMember}>Add Member to Repository</button>

      <button onClick={deleteMember}>Delete Member from Repository</button>
    </>
  );
}

export default App;
