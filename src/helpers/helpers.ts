import axios from "axios";
import {
  getIndexFileContent,
  getIndexHtml,
  getInitialAppFileContent,
  getPackageJsonContent,
  getReadMeContent,
  getTsConfigContent,
  getWebVitals,
} from "./initialReactFiles";

const gitLabUrl = import.meta.env.VITE_REACT_APP_GITLAB_URL;
const accessToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

/**
 * Retrieves all projects from GitLab API.
 * @param {string} accessToken - The access token used for authentication.
 * @param {string} gitLabUrl - The GitLab API base URL.
 * @returns {Promise<Array<Object>>|null} - A promise that resolves to an array of project objects if successful,
 *   or null if an error occurred.
 */

export const getAllProjects = async () => {
  const url = `${gitLabUrl}/api/v4/projects`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Private-Token": accessToken,
      },
      params: {
        // owned: true,
        membership: true,
      },
    });

    if (response.status === 200) {
      // Projects retrieved successfully
      console.log("Projects retrieved successfully");
      return response.data;
    } else {
      console.error("Failed to get projects:", response.data);
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting projects:", error);
    return null;
  }
};

export const getRepoMembers = async (repoId: any) => {
  try {
    const url = `${gitLabUrl}/api/v4/projects/${repoId}/members`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Private-Token": accessToken,
      },
    });

    if (response.status === 200) {
      // Members retrieved successfully
      console.log("Members:", response.data);
      return response.data;
    } else {
      console.error("Failed to get members:", response.data);
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting members:", error);
    return null;
  }
};

export const deleteGitLabRepository = async (projectId: any) => {
  try {
    const response = await axios.delete(
      `${gitLabUrl}/api/v4/projects/${projectId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "PRIVATE-TOKEN": accessToken,
        },
      }
    );

    // Handle the response as needed
    console.log("Repository deleted:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error deleting repository:", error);
    throw error;
  }
};

// Add a member to a repository using email
export const addMemberToRepo = async (
  repoId: number,
  userId: any,
  accessLevel: number
) => {
  try {
    const url = `${gitLabUrl}/api/v4/projects/${repoId}/members`;
    const response = await axios.post(
      url,
      {
        user_id: userId,
        access_level: accessLevel,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Private-Token": accessToken,
        },
      }
    );

    if (response.status === 201) {
      // Member added successfully
      console.log("Member added to the repository");
      return true;
    } else {
      console.error("Failed to add member to the repository:", response.data);
      return false;
    }
  } catch (error) {
    console.error(
      "An error occurred while adding a member to the repository:",
      error
    );
    return false;
  }
};

// Delete a member from a repository using user ID
export const deleteMemberFromRepoByUserId = async (
  repoId: number,
  userId: any
) => {
  try {
    const url = `${gitLabUrl}/api/v4/projects/${repoId}/members/${userId}`;
    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        "Private-Token": accessToken,
      },
    });

    if (response.status === 204) {
      // Member deleted successfully
      console.log("Member deleted from the repository");
      return true;
    } else {
      console.error(
        "Failed to delete member from the repository:",
        response.data
      );
      return false;
    }
  } catch (error) {
    console.error(
      "An error occurred while deleting a member from the repository:",
      error
    );
    return false;
  }
};

export const getUserIDByUsername = async (username: string) => {
  try {
    const url = `${gitLabUrl}/api/v4/users?username=${encodeURIComponent(
      username
    )}`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Private-Token": accessToken,
      },
    });

    if (response.status === 200 && response.data.length > 0) {
      // User found, return the user_id
      return response.data[0].id;
    } else {
      console.error("Failed to fetch user ID:", response.data);
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the user ID:", error);
    return null;
  }
};

export const addFileToRepository = async (
  projectId: any,
  filePath: string,
  content: any
) => {
  try {
    await axios.post(
      `https://gitlab.com/api/v4/projects/${projectId}/repository/files`,
      {
        file_path: filePath,
        branch_name: "main",
        content: content,
        commit_message: `Added file ${filePath} to repository`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "PRIVATE-TOKEN": accessToken,
        },
      }
    );

    console.log("File added to the repository.");
  } catch (error) {
    console.error("Error adding file to the repository:", error);
    throw error;
  }
};

export const createCommit = async (projectId: any) => {
  const apiUrl = `https://gitlab.com/api/v4/projects/${projectId}/repository/commits`;
  const headers = {
    "PRIVATE-TOKEN": accessToken,
    "Content-Type": "application/json",
  };

  const payload = {
    branch: "main",
    commit_message: "Initial commit",
    actions: [
      {
        action: "create",
        file_path: "public/index.html",
        content: getIndexHtml(),
      },
      {
        action: "create",
        file_path: "src/App.tsx",
        content: getInitialAppFileContent(),
      },
      {
        action: "create",
        file_path: "src/index.tsx",
        content: getIndexFileContent(),
      },
      {
        action: "create",
        file_path: "src/reportWebVitals.ts",
        content: getWebVitals(),
      },
      {
        action: "create",
        file_path: "package.json",
        content: getPackageJsonContent(),
      },
      {
        action: "create",
        file_path: "tsconfig.json",
        content: getTsConfigContent(),
      },
      {
        action: "create",
        file_path: "README.md",
        content: getReadMeContent(),
      },
    ],
  };

  try {
    const response = await axios.post(apiUrl, payload, { headers });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
