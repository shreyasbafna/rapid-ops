/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteGitLabRepository,
  getRepoMembers,
} from "../../../helpers/helpers";
import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const fetchMembers = async () => {
    const member = await getRepoMembers(id);
    setMembers(member);
  };

  const handleDeleteRepo = async () => {
    setLoading(true);
    const success = await deleteGitLabRepository(id);
    if (success) {
      // Handle the repository deletion success
      console.log("Repository deleted.");
      navigation("/");
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, [id]);

  const getRole = (id: number) => {
    switch (id) {
      case 30:
        return "Developer";
      case 40:
        return "Maintainer";
      case 50:
        return "Owner";
      default:
        return "Other";
    }
  };
  return (
    <>
      <div>Project Details</div>
      {id && <p>Project ID: {id}</p>}

      <p>Members</p>
      {members &&
        members.map((member: any) => {
          return (
            <p>
              {member.name} - {getRole(member.access_level)}
            </p>
          );
        })}
      <button onClick={handleDeleteRepo}>
        {loading ? <Spinner fontSize={"20px"} /> : "Delete Repository"}
      </button>
    </>
  );
};

export default ProjectDetails;
