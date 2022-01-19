import { AlertProviderState } from "./AlertContext";

export enum AlertReducerActions {
  SET_ALERT = "[alert] SET_ALERT",
  REMOVE_ALERT = "[alert] REMOVE_ALERT",
}

export type AlertReducerType =
  | {
      type: AlertReducerActions.SET_ALERT;
      payload: { message: string; type: string };
    }
  | { type: AlertReducerActions.REMOVE_ALERT };

export const alertReducer = (
  state: AlertProviderState,
  action: AlertReducerType
) => {
  switch (action.type) {
    case AlertReducerActions.SET_ALERT:
      return {
        message: action.payload.message,
        type: action.payload.type,
      };

    case AlertReducerActions.REMOVE_ALERT:
      return {
        message: null,
        type: null,
      };

    default:
      return state;
  }
};
