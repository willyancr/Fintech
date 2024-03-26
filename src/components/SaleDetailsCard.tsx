import { Card } from './ui/card';
import { useSale } from './UserContext';

function SaleDetailsCard() {
  const { selected } = useSale();
  return (
    <div>
      {selected && (
        <Card
          key={selected.id}
          className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-full"
        >
          <div className="flex flex-col gap-6 py-4 px-4 text-projeto-primary3 capitalize">
            <p >ID: <span className='bg-projeto-primary1/50 rounded p-1'>{selected.id}</span> </p>
            <p>Nome: <span className='bg-projeto-primary1/50 rounded p-1'>{selected.nome}</span> </p>
            <p>Preço: <span className='bg-projeto-primary1/50 rounded p-1'>R$ {selected.preco}</span> </p>
            <p>Status: <span className='bg-projeto-primary1/50 rounded p-1'>{selected.status}</span> </p>
            <p>Pagamento: <span className='bg-projeto-primary1/50 rounded p-1'>{selected.pagamento}</span> </p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default SaleDetailsCard;
