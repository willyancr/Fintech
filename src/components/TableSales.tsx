import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useSale } from '../components/UserContext';
import SearchSales from './SearchSales';
import Loading from './Loading';

function TableSales() {
  const { data, loading, handleID } = useSale();
  const [search, setSearch] = React.useState('');

  if (loading) {
    return <Loading />;
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
        <TableBody className="cursor-pointer text-white">
          {data
            ?.filter((sale) =>
              sale.nome.toLowerCase().includes(search.toLowerCase()),
            )
            .map((sale) => (
              <TableRow key={sale.id} onClick={() => handleID(sale)}>
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
