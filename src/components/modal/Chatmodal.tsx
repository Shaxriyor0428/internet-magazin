import {  useState } from "react";
import { MdClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ChatModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const { t } = useTranslation();

  const sendMessage = () => {
    if (message.trim() === "") return;
    setMessages((prev) => [...prev, message]);
    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-6 z-50">
      <div className="bg-white shadow-lg w-[320px] h-[450px] rounded-lg flex flex-col">
        <div className="flex justify-between items-center p-4 bg-purple-700 text-white rounded-t-lg">
          <span>Admin</span>
          <button onClick={onClose}>
            <MdClose size={24} />
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "text-right" : "text-left"} mb-2`}
            >
              <div
                className={`${
                  index % 2 === 0 ? "bg-green-500 text-white" : "bg-gray-200"
                } p-2 rounded-lg inline-block`}
              >
                {msg}
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
      </div>
    </div>
  );
};

export default ChatModal;
