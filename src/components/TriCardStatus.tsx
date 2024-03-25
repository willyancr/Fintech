function TriCardStatus() {
  return (
    <div className="flex justify-between gap-2 text-projeto-primary3">
      <div className="flex flex-col gap-4 font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-52 pl-4 py-2">
        <p>Vendas</p>
        <p>R$ 84.200,00</p>
      </div>
      <div className="flex flex-col gap-4 font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-52 pl-4 py-2">
        <p>Recebido</p>
        <p>R$ 54.200,00</p>
      </div>
      <div className="flex flex-col gap-4 font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-52 pl-4 py-2">
        <p>Processando</p>
        <p>R$ 34.200,00</p>
      </div>
    </div>
  );
}

export default TriCardStatus;
