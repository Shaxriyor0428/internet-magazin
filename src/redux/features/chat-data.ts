import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  username: string;
  messages: { sender: string; message: string }[];
}

const initialState: ChatState = {
  username: "",
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    addMessage(
      state,
      action: PayloadAction<{ sender: string; message: string }>
    ) {
      state.messages.push(action.payload);
    },
    setMessages(
      state,
      action: PayloadAction<{ sender: string; message: string }[]>
    ) {
      state.messages = action.payload;
    },
  },
});

export const { setUsername, addMessage, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
