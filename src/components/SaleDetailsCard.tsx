import { Card } from './ui/card';
import { useSale } from './UserContext';

function SaleDetailsCard() {
  const { data } = useSale();
  return (
    <div>
      <Card className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-80">
        <div className="flex flex-col gap-6 py-4 px-4 text-projeto-primary3">
          <p>ID:</p>
          <p>Nome:</p>
          <p>Preço:</p>
          <p>Status:</p>
          <p>Pagamento:</p>
        </div>
      </Card>
    </div>
  );
}

export default SaleDetailsCard;
