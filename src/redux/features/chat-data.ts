import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  username: string;
  messages: { sender: string; message: string }[];
}

const initialState: ChatState = {
  username: localStorage.getItem("chatUsername") || "",
  messages: JSON.parse(localStorage.getItem("chatMessages") || "[]"),
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
      localStorage.setItem("chatUsername", state.username);
    },
    setMessages(
      state,
      action: PayloadAction<
        | { sender: string; message: string }
        | { sender: string; message: string }[]
      >
    ) {
      const newMessages = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.messages = [...state.messages, ...newMessages];
      localStorage.setItem("chatMessages", JSON.stringify(state.messages));
    },
  },
});

export const { setChatUsername, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
