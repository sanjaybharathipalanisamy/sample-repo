import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";
import cryptoJS from "crypto-js";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const store = configureStore({
//   reducer: persistReducer(persistConfig, rootReducer),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  let state = store.getState();



  // console.log("1->state->", state);
});

console.log("1->store->", store);

// const persistor = persistStore(store);

// export { store, persistor };
export { store };

// CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
