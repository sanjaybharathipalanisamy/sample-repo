import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import CryptoJS from "crypto-js";

// let encryptedPresistKey = CryptoJS.AES.encrypt("state", "123").toString();

// let descriptedPersistKey = CryptoJS.AES.decrypt(
//   encryptedPresistKey,
//   "123"
// ).toString(CryptoJS.enc.Utf8);

// console.log("1->encryptedPresistKey->", encryptedPresistKey);

// console.log("1->descriptedPersistKey->", descriptedPersistKey);

let persistKey = "state";
let secretKey = "sanjay-bharathi-secret-key-that-nobody-knows";

const getPreviousState = () => {
  let previousValue = localStorage.getItem(persistKey) || false;
  // console.log(
  //   "1->getPreviousState()->",
  //   JSON.parse(
  //     CryptoJS.AES.decrypt(previousValue, secretKey).toString(CryptoJS.enc.Utf8)
  //   )
  // );
  if (!previousValue) return {};
  return (
    JSON.parse(
      CryptoJS.AES.decrypt(previousValue, secretKey).toString(CryptoJS.enc.Utf8)
    ) || {}
  );
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreviousState(),
});

store.subscribe(() =>
  localStorage.setItem(
    persistKey,
    CryptoJS.AES.encrypt(JSON.stringify(store.getState()), secretKey).toString()
  )
);

export { store };
