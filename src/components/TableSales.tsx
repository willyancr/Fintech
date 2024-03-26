import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { useSale } from '../components/UserContext';
import SearchSales from './SearchSales';

function TableSales() {
  const navigate = useNavigate();
  const { data } = useSale();
  const [search, setSearch] = React.useState('');
  function handleClick() {
    navigate('/vendas/id');
  }
  return (
    <>
      <SearchSales search={search} setSearch={setSearch} />
      <Table className="text-projeto-primary3">
        <TableCaption>Uma lista das suas faturas recentes.</TableCaption>
        <TableHeader>
          <TableRow className="bg-projeto-primary1/20">
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody onClick={handleClick} className="cursor-pointer text-white">
          {data
            ?.filter((sale: { id: string; nome: string; preco: number }) =>
              sale.nome.toLowerCase().includes(search.toLowerCase()),
            )
            .map((sale: { id: string; nome: string; preco: number }) => (
              <TableRow key={sale.id}>
                <TableCell>{sale.id}</TableCell>
                <TableCell>{sale.nome}</TableCell>
                <TableCell>R$ {sale.preco}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default TableSales;
