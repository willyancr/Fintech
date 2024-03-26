import { useSale } from '../components/UserContext';

function TriCardStatus() {
  const { data, calculateTotalSales, calculateReceived, calculateProcessing } =
    useSale();

  return (
    <div className="flex justify-between gap-2 text-projeto-primary3">
      <div className="flex flex-col gap-4 font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-52 pl-4 py-2">
        <p>Vendas</p>
        <p>
          {calculateTotalSales(data).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
      <div className="flex flex-col gap-4 font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-52 pl-4 py-2">
        <p>Recebido</p>
        <p>
          {calculateReceived(data).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
      <div className="flex flex-col gap-4 font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-52 pl-4 py-2">
        <p>Processando</p>
        <p>
          {calculateProcessing(data).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
    </div>
  );
}

export default TriCardStatus;
