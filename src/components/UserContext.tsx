import React from 'react';
import useFetch from './Hooks/useFetch';

type Sale = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  data: string;
};
type UserContextValue = {
  data: Sale | null;
  loading: boolean;
  error: null | string;
  calculateTotalSales: (data: Sale[]) => number;
  calculateReceived: (data: Sale[]) => number;
  calculateProcessing: (data: Sale[]) => number;
};
const UserContext = React.createContext<UserContextValue | null>(null);
export const useSale = () => {
  const context = React.useContext(UserContext);
  if (context == null) {
    throw new Error('useSale must be used within a UserContextProvider');
  }
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<Sale>(
    'https://data.origamid.dev/vendas',
  );
  const calculateTotalSales = (sales: Sale[]) => {
    if (!sales) return 0;
    return sales.reduce((total, sale) => total + sale.preco, 0);
  };
  const calculateReceived = (sales: Sale[]) => {
    if (!sales) return 0;
    return sales
      .filter((sale) => sale.status === 'pago')
      .reduce((total, sale) => total + sale.preco, 0);
  };
  const calculateProcessing = (sales: Sale[]) => {
    if (!sales) return 0;
    return sales
      .filter((sale) => sale.status === 'processando')
      .reduce((total, sale) => total + sale.preco, 0);
  };
  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        error,
        calculateTotalSales,
        calculateReceived,
        calculateProcessing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
