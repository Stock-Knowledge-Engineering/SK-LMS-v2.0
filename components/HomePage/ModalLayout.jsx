import FormWrapper from "./FormWrapper";

const ModalLayout = ({code, showModal}) => {

  return (
      <FormWrapper defaultForm="login" code={code} showModal={showModal}/>
  );
};

export default ModalLayout;
