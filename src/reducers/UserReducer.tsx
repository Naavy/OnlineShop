import { UserType } from "../types/User";

export const UserReducer = (
  state: UserType,
  action: { type: string; payload: UserType }
) => {
  switch (action.type) {
    case "CHANGE_USER":
      return (state = {
        email: action.payload.email,
        password: action.payload.password,
      });
    default:
      return state;
  }
};