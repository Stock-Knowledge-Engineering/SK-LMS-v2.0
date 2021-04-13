import { useState } from "react";
import PrivacyPolicyArticle from "./PrivacyPolicyArticle";
import TermsOfUseArticle from "./TermOfUseArticle";

const TermsAndPolicyComponents = (props) => {
  const [article, setArticle] = useState("terms");
  return (
    <>
      <div className="w-11/12 h-full m-auto flex flex-col items-center mt-10">
        <div className="w-full flex text-center">
          <div onClick={() => {setArticle('terms')}} className={`w-1/2 ${article == 'terms' ? ' border-skBlue text-skBlue' : ' border-skBlueInactive text-skBlueInactive'} font-semibold border-b-2 pb-4 cursor-pointer`}>
            <span>Terms Of Use</span>
          </div>
          <div onClick={() => {setArticle('privacy')}} className={`w-1/2  ${article == 'privacy' ? ' border-skBlue text-skBlue' : ' border-skBlueInactive text-skBlueInactive'} font-semibold border-b-2 pb-4 cursor-pointer`}>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="overflow-y-scroll h-96">
          {article == 'terms' && <TermsOfUseArticle />}
          {article == 'privacy' && <PrivacyPolicyArticle />}
        </div>
      </div>
    </>
  );
};

export default TermsAndPolicyComponents;
