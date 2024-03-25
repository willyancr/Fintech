import Month from './Month';
import Date from './Date';
import Title from './Title';
function Sales() {
  return (
    <div className="bg-projeto-primary rounded-xl rounded-l-lg px-8 py-7">
      <h1 className="text-projeto-primary3 text-xl font-bold mb-4">
        Dashboard
      </h1>
      <div className="flex gap-4 text-projeto-primary3 mb-4">
        <Date />
        <Title>Vendas</Title>
      </div>
      <div className="flex flex-col gap-4 ">
        <Month />
      </div>
    </div>
  );
}

export default Sales;
