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
import { Link } from 'react-router-dom';

function TableSales() {
  return (
    <Table className="text-projeto-primary3">
      <TableCaption>Uma lista das suas faturas recentes.</TableCaption>
      <TableHeader>
        <TableRow className="bg-projeto-primary1/20">
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <Link to="/vendas/id">
          <TableRow>
            <TableCell>1012</TableCell>
            <TableCell>MARIA JOSÉ DA SILVA</TableCell>
            <TableCell>R$ 256,30</TableCell>
          </TableRow>
        </Link>
      </TableBody>
      <TableFooter>
        <TableRow className="bg-projeto-primary1/20">
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default TableSales;
