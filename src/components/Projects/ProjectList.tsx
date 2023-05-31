import { Link } from "react-router-dom";
import bgImg from "../../assets/aws.png";
import { CardImage, ProjectListWrapper } from "./ProjectList.style";
import { formatDistanceToNow } from "date-fns";

const ProjectList = (props: any) => {
  const project = props.project;
  const dateTime = new Date(project.last_activity_at);
  const relativeTime = formatDistanceToNow(dateTime, { addSuffix: true });

  return (
    <Link to={`/project/${project.id}`}>
      <ProjectListWrapper>
        <CardImage src={bgImg} alt="Card" />
        <h2>{project.name} </h2>
        <p>{project.description} </p>
        <br />
        <p>{relativeTime}</p>
      </ProjectListWrapper>
    </Link>
  );
};

export default ProjectList;
