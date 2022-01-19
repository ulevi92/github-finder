import { createContext, FC, useContext, useReducer } from "react";
import { alertReducer, AlertReducerActions } from "./AlertReducers";

export interface AlertProviderState {
  message: string | null;
  type: string | null;
}

interface AlertContextProps extends AlertProviderState {
  setAlert: (msg: string, type: string) => void;
}

const Context = createContext<AlertContextProps | null>(null);

export const useAlertContext = () => {
  const ctx = useContext(Context);

  if (!ctx)
    throw new Error("useAlertContext must be used within AlertProvider");

  return ctx;
};

const AlertProvider: FC = ({ children }) => {
  const initialState: AlertProviderState = {
    message: null,
    type: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message: string, type: string) => {
    dispatch({ type: AlertReducerActions.SET_ALERT, payload: { message, type } });

    setTimeout(
      () => dispatch({ type: AlertReducerActions.REMOVE_ALERT }),
      3000
    );
  };

  return (
    <Context.Provider value={{ ...state, setAlert }}>
      {children}
    </Context.Provider>
  );
};

export default AlertProvider;
