import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function SaleDetailsCard() {
  return (
    <Table className="text-projeto-primary3">
      <TableHeader>
        <TableRow className="bg-projeto-primary1/20">
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pagamento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1012</TableCell>
          <TableCell>MARIA JOSÉ DA SILVA</TableCell>
          <TableCell>R$ 256,30</TableCell>
          <TableCell>Processando</TableCell>
          <TableCell>Boleto</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default SaleDetailsCard;
