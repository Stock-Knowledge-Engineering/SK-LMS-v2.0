import FormWrapper from "./FormWrapper";

const ModalLayout = ({signup, code, showModal}) => {

  return (
    <>
          {!code && !signup && <FormWrapper defaultForm={'login'} code={code} showModal={showModal}/>}
          {code && <FormWrapper defaultForm={'forgot-password'} code={code} showModal={showModal}/>}
          {signup && <FormWrapper defaultForm={'signup'} code={code} showModal={showModal}/>}
    </>


  );
};

export default ModalLayout;
