import { useEffect, useState } from "react";
import { getAllProjects } from "../../../helpers/helpers";
import ProjectList from "../../../components/Projects/ProjectList";
import { Spinner } from "../../../components/spinner/Spinner";

const Home = () => {
  const [projectRepos, setProjectRepos] = useState<any>();
  const [loading, setLoading] = useState(false);
  /**
   * Handles the retrieval of all projects from the GitLab API.
   * @async
   */
  const handleGetAllProjects = async () => {
    // Call the getAllProjects function
    setLoading(true);
    const projects = await getAllProjects();
    if (projects) {
      // Projects retrieved successfully, do something with the projects array
      console.log("Projects:", projects);
      setProjectRepos(projects);
      setLoading(false);
    } else {
      // Failed to get projects
      console.log("Failed to get projects");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllProjects();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <Spinner fontSize="80px" />
        </div>
      ) : (
        <div style={{ padding: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {projectRepos &&
              projectRepos.map((proj: any) => {
                return <ProjectList project={proj} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
