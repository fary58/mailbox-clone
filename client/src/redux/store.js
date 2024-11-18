import { configureStore } from "@reduxjs/toolkit";
import sendMail from "./slice";

export default configureStore({
  reducer: {
    sendMail: sendMail,
  },
});
