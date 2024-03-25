import React from 'react';
import useFetch from './Hooks/useFetch';

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  data: string;
};
type UserContextValue = {
  data: Venda | null;
  loading: boolean;
  error: null | string;
};
const UserContext = React.createContext<UserContextValue | null>(null);
export const useSale = () => React.useContext(UserContext);

function UserContextProvider({ children }: React.PropsWithChildren) {
  const { data, loading, error } = useFetch<Venda>(
    'https://data.origamid.com.br/vendas',
  );

  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
