import React from 'react';
import useFetch from './Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export type Sale = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  data: string;
};
type UserContextValue = {
  data: Sale[] | null;
  loading: boolean;
  error: null | string;
  calculateTotalSales: (data: Sale[] | null) => number;
  calculateReceived: (data: Sale[] | null) => number;
  calculateProcessing: (data: Sale[] | null) => number;
  handleID: (sales: Sale) => void;
  selectedSale: Sale | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};
const UserContext = React.createContext<UserContextValue | null>(null);
export const useSale = () => {
  const context = React.useContext(UserContext);
  if (context == null) {
    throw new Error('useSale must be used within a UserContextProvider');
  }
  return context;
};
function getDaysAgo(days: number) {
  const today = new Date();
  const date = new Date(today.getTime());
  date.setDate(date.getDate() - days);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
}
export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const [selectedSale, setSelectedSale] = React.useState<Sale | null>(null);
  const [inicio, setInicio] = React.useState(getDaysAgo(30));
  const [final, setFinal] = React.useState(getDaysAgo(0));

  const { data, loading, error } = useFetch<Sale[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  const calculateTotalSales = (sales: Sale[] | null) => {
    if (!sales) return 0;
    return sales.reduce((total, sale) => total + sale.preco, 0);
  };
  const calculateReceived = (sales: Sale[] | null) => {
    if (!sales) return 0;
    return sales
      .filter((sale) => sale.status === 'pago')
      .reduce((total, sale) => total + sale.preco, 0);
  };
  const calculateProcessing = (sales: Sale[] | null) => {
    if (!sales) return 0;
    return sales
      .filter((sale) => sale.status === 'processando')
      .reduce((total, sale) => total + sale.preco, 0);
  };
  const handleID = (sales: Sale) => {
    setSelectedSale(sales);
    navigate(`/vendas/detalhes`);
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
        handleID,
        selectedSale,
        inicio,
        setInicio,
        final,
        setFinal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
