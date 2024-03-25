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

function TableSales() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/vendas/id');
  }
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
      <TableBody onClick={handleClick} className='cursor-pointer'>
        <TableRow>
          <TableCell>1012</TableCell>
          <TableCell>MARIA JOSÉ DA SILVA</TableCell>
          <TableCell>R$ 256,30</TableCell>
        </TableRow>
      </TableBody>
      {/* <TableFooter>
        <TableRow className="bg-projeto-primary1/20">
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}

export default TableSales;
