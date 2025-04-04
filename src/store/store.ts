import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { DropdownSlice } from "./slices/dropdownSlice";
import { TWSlice } from "./slices/twSlice";
import { CarSlice } from "./slices/carSlice";
import { TermSlice } from "./slices/termSlice";
import { TermFullJourneySlice } from "./slices/termFullJourney/TermFullJourneySlice";
import { HealthSlice } from "./slices/healthSlice";
import { TravelSlice } from "./slices/travel/TravelSlice";
import { CKYCSlice } from "./slices/ckycSlice";
import { householdDetailsSlice } from "./slices/homeInsurance/HouseholdDetails/HouseholdDetailSlice";
import { quoteSlice } from "./slices/homeInsurance/Quotes/QuoteSlice";
import { proposalSlice } from "./slices/homeInsurance/Proposal/ProposalSlice";
import { kycResponseSlice } from "./slices/homeInsurance/KycResponse/KycResponseSlice";
import { pageSlice } from "./slices/homeInsurance/PageSlice/PageSlice";

const rootReducer = combineReducers({
  CommonDropdownData: DropdownSlice.reducer,
  TW: TWSlice.reducer,
  Car: CarSlice.reducer,
  Term: TermSlice.reducer,
  TermFullJourney: TermFullJourneySlice.reducer,
  Health: HealthSlice.reducer,
  Travel: TravelSlice.reducer,
  CKYC: CKYCSlice.reducer,
  householdDetails: householdDetailsSlice.reducer,
  quote: quoteSlice.reducer,
  proposalInformation: proposalSlice.reducer,
  kycResponseSlice: kycResponseSlice.reducer,
  pageSlice: pageSlice.reducer,
});

// Configure Redux Persist with session storage
const persistConfig = {
  key: "proposal root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the Redux Persist store
const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
