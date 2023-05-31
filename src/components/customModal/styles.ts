import styled from "styled-components";
export const SuccessModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(5, 31, 54, 0.7);
  backdrop-filter: blur(10px);
`;

export const SuccessModalContainer = styled.div<any>`
  width: 510px;
  max-height: 90vh;
  background: #fff;
  box-shadow: 0px 39px 60px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0px 48px 48px 48px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: ${(props: any) => props?.bgColor};
  @media (max-width: 600px) {
    padding: 0 24px 24px;
    width: 90%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalHeader = styled.div<any>`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: ${(props: any) => (props?.bgColor ? props?.bgColor : "#fff")};
  /* background: #fff; */
  padding: 40px 0 12px 0;
`;
export const SuccessModalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 36px 0;
`;

export const SuccessModalImage = styled.img``;

export const SuccessModalHeaderText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #c17d10;
  margin: 8px 0;
`;
export const SuccessModalText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: grey;
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    padding: 4px;
    background-color: #c17d10;
    border-radius: 50%;
  }
`;
