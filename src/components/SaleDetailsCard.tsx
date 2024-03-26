import { Card } from './ui/card';
import { useSale } from './UserContext';

function SaleDetailsCard() {
  const { selectedSale } = useSale();
  return (
    <div>
      {selectedSale && (
        <Card
          key={selectedSale.id}
          className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-full"
        >
          <div className="flex flex-col gap-6 py-4 px-4 text-projeto-primary3 capitalize">
            <p >ID: <span className='bg-projeto-primary1/50 rounded p-1'>{selectedSale.id}</span> </p>
            <p>Nome: <span className='bg-projeto-primary1/50 rounded p-1'>{selectedSale.nome}</span> </p>
            <p>Preço: <span className='bg-projeto-primary1/50 rounded p-1'>R$ {selectedSale.preco}</span> </p>
            <p>Status: <span className='bg-projeto-primary1/50 rounded p-1'>{selectedSale.status}</span> </p>
            <p>Pagamento: <span className='bg-projeto-primary1/50 rounded p-1'>{selectedSale.pagamento}</span> </p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default SaleDetailsCard;
