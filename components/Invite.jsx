import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FieldAlert from "./FieldAlert";
import { useHttp } from "../hooks/http";
import { useRouter } from "next/dist/client/router";

export default function Invite(props) {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [toSubmit, setToSubmit] = useState(false);
  const [registraion, setRegistration] = useState("");
  const [endpoint, setEndpoint] = useState("");

  const [validatingInviteCode, validInviteCode] = useHttp(
    toSubmit ? `/register/verify/invite?code=${code}` : null,
    [toSubmit]
  );

  const [invalidCredential, setInvalidCredential] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (validInviteCode && validInviteCode.success) {
      router.push(`/admin/registration?code=${validInviteCode.result.code}`)
    }
    if (validInviteCode && !validInviteCode.success) {
      setToSubmit(false);
    }
  }, [validInviteCode]);

  return (
    <>
      <div className="w-1/2">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Registration
        </h1>
        <br />
        {invalidCredential && (
          <FieldAlert message="Invalid code or password" />
        )}
        <input
          type="text"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Invite Code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <br />
        <div className="flex space-x-4">
          <button
            onClick={(e) => setToSubmit(true)}
            className="bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
