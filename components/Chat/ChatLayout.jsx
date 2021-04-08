import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/socket";
import { addRecipientHook } from "../../hooks/addRecipientHook";
import { useFriendHook } from "../../hooks/friendsHook";
import { usePostHttp } from "../../hooks/postHttp";

const NewMessageBox = (props) => {
  const socket = useContext(SocketContext);

  const friends = useFriendHook();

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const addRecipient = (newRecipient, recipients) => {
    const chatIndex = props.chats.findIndex((x) => x.chatId == 0);
    const recipientIndex = recipients.findIndex(
      (recipient) => recipient.id == newRecipient.id
    );
    const newChats = [...props.chats];

    if(recipientIndex < 0)
      newChats[chatIndex].recipients.push(newRecipient);

    // if(newChats[chatIndex].recipients.length > 1)
    //   newChats[chatIndex].type = 'group';

    props.updateChats(newChats);
    setName('');
    // index > -1 ? props.setChat(prevState => prevState) : props.setChat(prevState => [...prevState, ])
  };

  const SendMessage = (chatid) => {
    const newChats = [...props.chats];

    const chatIndex = newChats.findIndex((x) => x.chatId == 0);
    const messageId = newChats[chatIndex].messages.length + 1;

    newChats[chatIndex].body = message;

    socket.emit("SEND_MESSAGE", newChats[chatIndex]);
  }

  return (
    <div className="w-1/4 h-96 self-end bg-subheading mr-2 brounded-t-lg flex flex-col justifiy-between rounded-t-lg">
      <div className="w-full h-10 flex items-center justify-between p-2">
        <h3 className="text-white text-lg">New Message</h3>
        <div className="flex items-center space-x-2">
          <span
            onClick={() => {
              props.closeChatBox(props.chatId);
            }}
            className="right-1 top-1 px-1 rounded-full bg-white text-sm font-bold flex items-center hover:text-white hover:bg-heading"
          >
            &times;
          </span>
        </div>
      </div>
      <div className="flex items-center border-heading border-b relative flex-wrap space-x-2 space-y-2">
        <h3 className="pl-4 text-white">To: </h3>
        {props.recipients.map((recipient) => {
          return (
            <div
              key={recipient.id}
              className="w-auto h-8 px-2 rounded-full border text-center relative flex items-center space-x-2"
            >
              <p>{recipient.name}</p>
              <span
                onClick={() => {
                  setRecipients(
                    recipients.filter(
                      (recipients) => recipients.id !== recipient.id
                    )
                  );
                }}
                className="right-1 top-1 px-1 rounded-full bg-white text-sm font-bold flex items-center hover:text-white hover:bg-heading"
              >
                &times;
              </span>
            </div>
          );
        })}
        <div className="relative w-auto ">
          <input
            className="bg-subheading border-none border-0 focus:shadow-none w-full"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
                          addRecipient(
                            { id: friend.id, name: friend.name },
                            props.recipients
                          );
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
          value={message}
          onChange={e => {setMessage(e.target.value)}}
          className="bg-subheading border-none border-0 focus:shadow-none w-5/6 inline-block"
          type="text"
        />
        <svg
          onClick={() => {SendMessage(props.chatId)}}
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
  );
};

const ChatBox = (props) => {
  const { chatId, chatName, type, recipients, messages, chats } = props;

  const getChatIndex = (chatid) => {
    return new Promise((resolve, reject) => {
      resolve(chats.findIndex((x) => x.id == chatid));
    });
  };

  const hideChatBox = (chatid) => {
    const index = chats.findIndex((x) => x.chatId == chatid);
    const newChats = [...chats];
    newChats[index].display = false;
    props.updateChats(newChats);
  };

  return (
    <div className="w-1/4 h-96 self-end bg-subheading mr-2 brounded-t-lg flex flex-col rounded-t-lg">
      <div className="w-full h-16  flex items-center justify-between p-2 border-b ">
        <h3 className="text-white text-lg truncate w-3/4">
          {type == "private" ? recipients[0].name : ''}
          {type == "group" && chatName == '' ? 'New Group Chat' : chatName}
        </h3>
        <div className="flex items-center space-x-2">
          <span
            onClick={() => {
              hideChatBox(chatId);
            }}
            className="right-1 top-1 px-1 rounded-full bg-white text-sm font-bold flex items-center hover:text-white hover:bg-heading"
          >
            &minus;
          </span>
          <span
            onClick={() => {
              props.closeChatBox(chatId);
            }}
            className="right-1 top-1 px-1 rounded-full bg-white text-sm font-bold flex items-center hover:text-white hover:bg-heading"
          >
            &times;
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center border-heading border-b overflow-hidden">
        <div className="overflow-y-scroll w-full h-screen px-4">
          {messages.map((message) => {
            return <p key={message.id}>{message.message}</p>;
          })}
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
  );
};

const ChatLayout = (props) => {
  const socket = useContext(SocketContext);
  const user = useSelector(state => state.UserReducer);

  const friends = useFriendHook();

  const [name, setName] = useState("");
  const [addRecipient, setAddRecipient] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [openedChatBoxCount, setOpenedChatBoxCount] = useState(0);
  const [chat, setChat] = useState({});
  const [chats, setChats] = useState([
    {
      chatId: 1,
      chatName: "",
      display: false,
      type: "private",
      recipients: [
        {
          id: 1,
          name: "test 1",
        },
      ],
      messages: [
        {
          id: 1,
          from: 1,
          content: "test message 1",
        },
        {
          id: 2,
          from: 2,
          content: "test message 2",
        },
      ],
    },
    {
      chatId: 2,
      chatName: "Chat Name 1",
      display: true,
      type: "group",
      recipients: [
        {
          id: 1,
          name: "test 1",
        },
        {
          id: 2,
          name: "test 2",
        },
        {
          id: 3,
          name: "test 3",
        },
      ],
      messages: [
        {
          id: 1,
          from: 1,
          content: "test message 1",
        },
        {
          id: 2,
          from: 2,
          content: "test message 2",
        },
      ],
    },
  ]);

  useEffect(() => {
    // console.log(recipients);
  }, [recipients]);

  useEffect(() => {
    setName("");
  }, [addRecipient]);

  useEffect(()=>{
    let newChats = [...chats];

    if(chat.chatId == 0){
      chat.chatId = chat.chatId == 0 ? chats.length + 1 : chat.chatId;
      
    }
    newChats[0] = chat;

    setChats(newChats)
  },[chat])

  useEffect(() => {
    console.log(chats);
    setOpenedChatBoxCount(
      chats.filter((chat) => {
        return chat.display == true;
      }).length
    );
  }, [chats]);

  useEffect(()=>{
    socket.on('SEND_MESSAGE', (data) => {
      setChat(data); 
    })
  })

  const closeChatBox = (chatid) => {
    setChats(
      chats.filter((chat) => {
        return chat.chatId != chatid;
      })
    );
  };

  const showChatBox = (chatid) => {
    var index = chats.findIndex((x) => x.chatId == chatid);

    const newChats = [...chats];
    newChats[index].display = true;

    if (openedChatBoxCount < 2) setChats(newChats);
  };

  const newMessage = () => {
    const newMessage = {
      chatId: 0,
      chatName: "",
      display: true,
      type: "newMessage",
      sender: user.data.id,
      recipients: [],
      messages: [],
    };

    if (openedChatBoxCount < 2)
      setChats((prevState) => [newMessage, ...prevState]);
  };

  return (
    <div className="fixed w-full bottom-0 flex flex-row-reverse space-x-reverse">
      <div className="w-16 mb-2 mr-2 self-end rounded-full flex flex-col-reverse">
        {/* CHAT HEAD  START*/}
        <div
          onClick={() => {
            newMessage();
          }}
          className="bg-skBlue w-full h-16 rounded-full flex justify-center items-center mt-2"
        >
          MSG
        </div>
        {/* <div className="bg-skBlue w-full h-16 rounded-full flex justify-center items-center mt-2">
          chat
        </div> */}
        {chats.map((chat, i) => {
          if (!chat.display)
            return (
              <div
                onClick={() => {
                  showChatBox(chat.chatId);
                }}
                key={i}
                className="bg-skBlue w-full h-16 rounded-full flex justify-center items-center mt-2"
              >
                chat
              </div>
            );
        })}
        {/* CHAT HEAD  END*/}
      </div>
      {/* {chatbox} */}
      {chats.map((chat, i) => {
        if (chat.display && chat.type != "newMessage") {
          return (
            <ChatBox
              key={i}
              chatId={chat.chatId}
              chatName={chat.chatName}
              type={chat.type}
              recipients={chat.recipients}
              messages={chat.messages}
              chats={chats}
              updateChats={setChats}
              closeChatBox={closeChatBox}
            />
          );
        }

        if (chat.display && chat.type == "newMessage" && i == 0) {
          return (
            <NewMessageBox
              key={i}
              chats={chats}
              updateChats={setChats}
              closeChatBox={closeChatBox}
              chatId={chats[i].chatId}
              recipients={chats[i].recipients}
            />
          );
        }
      })}
      {/* {chatbox} */}
    </div>
  );
};

export default ChatLayout;
