import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { NewUserForm } from './components/NewUserForm';

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading, refetch } = useQuery(GET_USER);

  if (loading) return <p>Carregando</p>;

  return (
    <div className="App">
      <ul>
        {data?.users?.map((user: any) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <NewUserForm />
    </div>
  );
}

export default App;
