import { Card } from './ui/card';

function Date() {
  return (
    <Card className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-80">
      <div className="flex gap-6 pt-4 pb-2 px-4">
        <p className="flex items-center bg-projeto-primary1/10 text-projeto-primary3 rounded w-32 pl-2 py-1 font-bold text-sm">
          Início
        </p>
        <p className="flex items-center bg-projeto-primary1/10 text-projeto-primary3 rounded w-32 pl-2 py-1 font-bold text-sm">
          Final
        </p>
      </div>
      <div className="flex gap-6 pb-4 px-4">
        <input
          type="date"
          className="w-32 bg-projeto-primary1/50 text-projeto-primary3 rounded text-sm pl-2 py-1"
        />
        <input
          type="date"
          className="w-32 bg-projeto-primary1/50 text-projeto-primary3 rounded text-sm pl-2 py-1"
        />
      </div>
    </Card>
  );
}

export default Date;
