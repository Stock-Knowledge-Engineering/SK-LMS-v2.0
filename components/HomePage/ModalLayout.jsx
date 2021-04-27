import FormWrapper from "./FormWrapper";

const ModalLayout = ({code, showModal}) => {

  return (
      <FormWrapper defaultForm={code ? 'forgot-password' : 'login'} code={code} showModal={showModal}/>
  );
};

export default ModalLayout;
