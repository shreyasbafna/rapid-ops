import { useState } from "react";
import CustomModal from "../customModal/CustomModal";
import { HeaderWrapper } from "./Header.style";
import CreateRepoForm from "../CreateRepoForm";
import { Link } from "react-router-dom";

export const Header = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <h2>Rapid-Ops</h2>
        </Link>
        <button onClick={() => setShowModal(true)}>Create</button>
      </HeaderWrapper>
      {showModal && (
        <CustomModal
          headerText={"Create Repo"}
          closeModal={() => setShowModal(false)}
          closeBtn={false}
        >
          <CreateRepoForm />
        </CustomModal>
      )}
    </>
  );
};
