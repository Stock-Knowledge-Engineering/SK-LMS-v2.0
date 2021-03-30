import { useEffect, useRef, useState } from "react";
import { addRecipientHook } from "../../hooks/addRecipientHook";
import { useFriendHook } from "../../hooks/friendsHook";
import { usePostHttp } from "../../hooks/postHttp";

// const ChatFilteredFriends = (props) => {
//   return (

//   )
// }

const ChatLayout = (props) => {
  const friends = useFriendHook();

  const [name, setName] = useState("");
  const [addRecipient, setAddRecipient] = useState(null);
  const [recipients, setRecipients] = useState([]);

  const [updateRecipient, setUpdateRecipient] = useState(false);

  // const [recipientLoading, validateRecipient] = addRecipientHook(
  //   addRecipient ? { addRecipient, recipients } : null,
  //   "/validate/receiptients",
  //   [addRecipient]
  // );

  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  //   useEffect(() => {
  //     console.log(friends);
  //   }, [friends]);

  const handleClick = (recipient, recipients) => {
    var index = recipients.findIndex((x) => x.id == recipient.id);

    setRecipients((prevState) =>
      index < 0 ? [...prevState, recipient] : [...prevState]
    );
    setName("");
  };

  useEffect(() => {
    console.log(recipients);
  }, [recipients]);

  useEffect(() => {
    setName("");
  }, [addRecipient]);

  return (
    <div className="fixed w-full bottom-0 flex flex-row-reverse space-x-reverse">
      <div className="w-16 mb-2 mr-2 self-end rounded-full flex flex-col-reverse">
        <div className="bg-skBlue w-full h-16 rounded-full flex justify-center items-center mt-2">
          chat
        </div>
        <div className="bg-skBlue w-full h-16 rounded-full flex justify-center items-center mt-2">
          chat
        </div>
      </div>
      <div className="w-1/4 h-96 self-end bg-subheading mr-2 brounded-t-lg flex flex-col justifiy-between rounded-t-lg">
        <h3 className="w-full h-10 text-white text-lg ml-4 flex items-center">
          New Message
        </h3>
        <div className="flex items-center border-heading border-b relative flex-wrap space-x-2 space-y-2">
          <h3 className="pl-4 text-white">To: </h3>
          {recipients.map((recipient) => {
            return (
              <div
                key={recipient.id}
                className="w-auto h-8 px-2 rounded-full border text-center relative flex items-center space-x-2"
              >
                <p>{recipient.name}</p>
                <span onClick={() => {setRecipients(recipients.filter(recipients => recipients.id !== recipient.id))}} className="right-1 top-1 px-1 rounded-full bg-white text-sm font-bold flex items-center hover:text-white hover:bg-heading">&times;</span>
              </div>
            );
          })}
          {/* <p className="w-auto h-8 px-2 rounded-full border text-center">
            Tasdfasdfest Tasdfasdfasdfasdfest
          </p>
          <p className="w-auto h-8 px-2 rounded-full border text-center">
            Test Test
          </p>
          <p className="w-auto h-8 px-2 rounded-full border text-center">
            Test Test
          </p>
          <p className="w-auto h-8 px-2 rounded-full border text-center">
            Test Test
          </p>
          <p className="w-auto h-8 px-2 rounded-full border text-center">
            Test Test
          </p>
          <p className="w-auto h-8 px-2 rounded-full border text-center">
            Test Test
          </p> */}
          <div className="relative w-auto ">
            <input
              className="bg-subheading border-none border-0 focus:shadow-none w-full"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {/* {name != "" && (
              <div className="absolute w-full bg-white">
                {friends &&
                  friends
                    .filter((friend) => {
                      return friend.name.toLowerCase().includes(name);
                    })
                    .map((friend) => {
                      recipient.forEach((receipient) => {
                        if (friend.id != recipient.id)
                          console.log(friend.name);
                      });
                      return (
                        <p
                          key={friend.id}
                          onClick={(e) => {
                            setRecipients(state => [...state, { id: friend.id, name: friend.name }])
                          }}
                          className="cursor-pointer"
                        >
                          {friend.name}
                        </p>
                      );
                    })}
              </div>
            )} */}
          </div>
        </div>
        <div className="flex flex-col items-center border-heading border-b overflow-hidden">
          <div className="overflow-y-scroll w-full px-4 h-screen">
            {name != "" && (
              <>
                {friends &&
                  friends
                    .filter((friend) => {
                      return friend.name.toLowerCase().includes(name);
                    })
                    .map((friend) => {
                      return (
                        <p
                          key={friend.id}
                          onClick={(e) => {
                            handleClick(
                              { id: friend.id, name: friend.name },
                              recipients
                            );
                            // setAddRecipient({ id: friend.id, name: friend.name })
                          }}
                          className="cursor-pointer w-full"
                        >
                          {friend.name}
                        </p>
                      );
                    })}
              </>
            )}
          </div>
        </div>
        <div className="space-x-2 flex items-center">
          <input
            className="bg-subheading border-none border-0 focus:shadow-none w-5/6 inline-block"
            type="text"
          />
          <svg
            className="h-full w-10 h-10 py-2 text-white inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="w-1/4 h-96 self-end bg-subheading mr-2 brounded-t-lg flex flex-col rounded-t-lg">
        <h3 className="w-full h-10 text-white text-lg pl-4 flex items-center border-heading border-b">
          First Name Last Name
        </h3>
        <div className="flex flex-col items-center border-heading border-b overflow-hidden">
          <div className="overflow-y-scroll w-full px-4">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
        <div className="space-x-2 flex items-center">
          <input
            className="bg-subheading border-none border-0 focus:shadow-none w-5/6 inline-block"
            type="text"
          />
          <svg
            className="h-full w-10 h-10 py-2 text-white inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
