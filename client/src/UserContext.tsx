import { createContext } from "react";

export const UserContext = createContext({userId: 0, setUserId: (id: number) => {}})