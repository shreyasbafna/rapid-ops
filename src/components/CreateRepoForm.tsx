import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Spinner } from "./spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { createCommit } from "../helpers/helpers";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  input,
  select {
    padding: 12px;
    background: white;
    color: #000;
    border: 1px solid;
  }

  *:focus {
    outline: none;
  }

  label {
    text-align: left;
  }
`;

const CreateRepoForm = () => {
  const [repoName, setRepoName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("private");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const createRepository = async () => {
    try {
      setLoading(true);
      const accessToken = "glpat-iL5szfponTyjNkZZsoun";
      const apiUrl = "https://gitlab.com/api/v4/projects";

      const response = await axios.post(
        apiUrl,
        {
          name: repoName,
          description: description || "", // Optional description
          visibility: visibility || "private", // Optional visibility (private by default)
        },
        {
          headers: {
            "PRIVATE-TOKEN": accessToken,
          },
        }
      );
      console.log(response.data); // Repository creation response
      await createCommit(response.data.id);
      setLoading(false);
      navigation(0);
    } catch (error) {
      setLoading(false);
      console.error("Error creating repository:", error);
    }
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRepoName(e.target.value);
  };

  return (
    <FormWrapper>
      <label>Repo Name: </label>
      <input
        type="text"
        placeholder="Enter repository name"
        value={repoName}
        onChange={handleInputChange}
      />
      <label>Description: </label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <label>Visibility: </label>
      <select
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
      >
        <option value="private">Private</option>
        <option value="internal">Internal</option>
        <option value="public">Public</option>
      </select>
      <button onClick={createRepository}>
        {loading ? <Spinner fontSize={"20px"} /> : "Create Repository"}
      </button>
    </FormWrapper>
  );
};

export default CreateRepoForm;
