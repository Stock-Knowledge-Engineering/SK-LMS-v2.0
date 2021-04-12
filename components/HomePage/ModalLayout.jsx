import SignupFormWrapper from "./SignupFormWrapper";

const ModalLayout = ({code, showModal}) => {

  return (
      <SignupFormWrapper defaultForm="login" code={code} showModal={showModal}/>
  );
};

export default ModalLayout;
