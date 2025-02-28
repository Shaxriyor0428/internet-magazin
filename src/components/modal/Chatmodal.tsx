import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setMessages, setChatUsername } from "../../redux/features/chat-data";
import { FaRegUser } from "react-icons/fa";

const socket = io("wss://shaxriyorbek.uz", {
  path: "/socket.io/",
  transports: ["websocket", "polling"],
});

const ChatModal = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // console.log(socket);
  
  const { username } = useSelector((state: RootState) => state.chat);
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState("");

  const storedUsername = useSelector((state: RootState) => state.chat.username);
  const storedMessages = useSelector((state: RootState) => state.chat.messages);

  useEffect(() => {
    const chatContainer = document.getElementById("chatMessages");
    if (chatContainer) {
      setTimeout(() => {
        chatContainer.scrollTo({
          behavior: "smooth",
          top: chatContainer.scrollHeight,
        });
      }, 100);
    }
  }, [storedMessages]);

  useEffect(() => {
    const handleClientReply = (adminMessage: string) => {
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

  const handleMessageClick = (msg: string) => {
    setMessage(msg);
  };
  return (
    <div className="fixed bottom-0 right-6 z-50">
      <div className="bg-white shadow-2xl w-80 h-[500px] rounded-xl flex flex-col overflow-hidden border border-gray-200">
        {!username ? (
          <div className="p-6 flex flex-col items-center justify-center h-full bg-white rounded-xl shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
              {t("chat.enter_name")}
            </h2>

            <div className="relative w-full">
              <input
                type="text"
                required
                placeholder={t("chat.enter_input")}
                className="w-full p-3 pl-10 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaRegUser className="absolute left-3 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
            </div>

            <button
              onClick={handleUsernameSubmit}
              className="mt-6 w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {t("chat.enter_btn")}
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-t-xl">
              <span className="font-semibold">Admin</span>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300"
              >
                <MdClose size={24} />
              </button>
            </div>
            <div
              id="chatMessages"
              className="flex-1 p-2 overflow-y-auto bg-gray-100"
            >
              {storedMessages.length === 0 ? (
                <div className="flex justify-end flex-col gap-2 items-end h-full">
                  <p
                    onClick={() => handleMessageClick(t("chat.advice1"))}
                    className="rounded-full py-1 px-4 text-green-500 border border-green-500 cursor-pointer hover:bg-green-500 hover:text-white duration-300 transition-all"
                  >
                    {t("chat.advice1")}
                  </p>

                  <p
                    onClick={() => handleMessageClick(t("chat.advice2"))}
                    className=" rounded-full py-1 px-4 text-green-500 border border-green-500 cursor-pointer hover:bg-green-500 hover:text-white duration-300 transition-all"
                  >
                    {t("chat.advice2")}
                  </p>
                  <p
                    onClick={() => handleMessageClick(t("chat.advice3"))}
                    className=" rounded-full py-1  px-4 text-green-500 border border-green-500 cursor-pointer hover:bg-green-500 hover:text-white duration-300 transition-all"
                  >
                    {t("chat.advice3")}
                  </p>
                </div>
              ) : (
                storedMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "client" ? "justify-end" : "justify-start"
                    } mb-2`}
                  >
                    <div
                      className={`p-2 rounded-lg max-w-[75%]  ${
                        msg.sender === "client"
                          ? "bg-blue-500 text-white text-left"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t flex items-center bg-white">
              <input
                type="text"
                placeholder={t("chat.input_pl")}
                className="flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              {message.trim() && (
                <button
                  onClick={sendMessage}
                  className="ml-2 text-blue-500 text-2xl hover:text-blue-700 transition-all"
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
