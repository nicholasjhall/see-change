import React, { useMemo, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import LogList from "./components/LogList";
import Login from "./components/Login";
import { UserContext } from "./UserContext";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  const [userId, setUserId] = useState(0);
  // const providerValue = useMemo(() => ({userId, setUserId}), [userId, setUserId]);

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userId, setUserId }}>
        <Login />
        <LogList />
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
