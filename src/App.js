
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ROUTE } from "./constants";
import Home from "./Pages/Home"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
