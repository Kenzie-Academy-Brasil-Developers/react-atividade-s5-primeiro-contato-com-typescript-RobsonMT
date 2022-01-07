import { createContext, useContext, useState, ReactNode } from "react";

interface ListProviderProps {
  children: ReactNode;
}

interface User {
  name: string;
  hobby: string;
  age: number;
}

interface ListProviderData {
  users: User[];
  newUser: User;
  createNewUser: (user: User) => void; //sem retorno explicito || nada
}

const ListContext = createContext<ListProviderData>({} as ListProviderData);

const useList = () => {
  const context = useContext(ListContext);

  return context;
};

const ListProvider = ({ children }: ListProviderProps) => {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [newUser, setNewUser] = useState({} as User);

  const createNewUser = (user: User) => {
    setUsers((oldState) => [...oldState, user]);
    setNewUser(user);
  };

  return (
    <ListContext.Provider value={{ createNewUser, users, newUser }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListProvider, useList };
