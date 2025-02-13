import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setMessages, setChatUsername } from "../../redux/features/chat-data";

const socket = io("http://localhost:5000");

const ChatModal = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.chat);
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState("");

  const storedUsername = useSelector((state: RootState) => state.chat.username);
  const storedMessages = useSelector((state: RootState) => state.chat.messages);

  useEffect(() => {
    const handleClientReply = (adminMessage: string) => {
      console.log(adminMessage);
      dispatch(setMessages({ sender: "admin", message: adminMessage }));
    };

    socket.on("clientReply", handleClientReply);

    return () => {
      socket.off("clientReply", handleClientReply);
    };
  }, [dispatch]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = { sender: "client", message };
    dispatch(setMessages(newMessage));
    socket.emit("sendMessage", { username, message });
    setMessage("");
  };

  const handleUsernameSubmit = () => {
    if (name.trim() === "") return;
    dispatch(setChatUsername(name));
    if (!storedUsername) {
      socket.emit("join", name);
    }
  };

  return (
    <div className="fixed bottom-0 right-6 z-50">
      <div className="bg-white shadow-lg w-[320px] h-[420px] rounded-lg flex flex-col">
        {!username ? (
          <div className="p-4 bg-gray-200 flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-semibold mb-4">
              {t("chat.enter_name")}
            </h2>
            <input
              type="text"
              placeholder={t("chat.enter_name")}
              className="w-full p-2 border rounded-lg outline-none mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={handleUsernameSubmit}
              className="bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              {t("chat.enter_btn")}
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-4 bg-purple-700 text-white rounded-t-lg">
              <span>Admin</span>
              <button onClick={onClose}>
                <MdClose size={24} />
              </button>
            </div>
            <div className={`flex-1  p-2 overflow-y-auto`}>
              {storedMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`${
                    msg.sender === "client" ? "text-right" : "text-left"
                  } mb-2`}
                >
                  <div
                    className={`${
                      msg.sender === "client"
                        ? "bg-green-500 text-white text-start"
                        : "bg-gray-200 text-black"
                    } p-2 rounded-lg inline-block max-w-[70%]`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex items-center">
              <input
                type="text"
                placeholder={t("chat.input_pl")}
                className="w-full p-2 border rounded-lg outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              {message.trim() && (
                <button
                  onClick={sendMessage}
                  className="ml-2 text-green-500 text-2xl"
                >
                  <IoSend />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatModal;
