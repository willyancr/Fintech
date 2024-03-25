import React from 'react';

function Month() {
  const [months, setMonths] = React.useState<{ month: string }[]>([]);

  React.useEffect(() => {
    const futureMonth = [];
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() + i);

      futureMonth.push({
        month: date.toLocaleDateString('pt-BR', { month: 'long' }),
      });

      setMonths(futureMonth);
    }
  }, []);

  return (
    <div className="flex justify-between gap-2 text-projeto-primary3">
      {months.map((month) => (
        <p className="font-bold rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-36 py-2 text-center hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:cursor-pointer ease-in duration-150 capitalize">
          {month.month}
        </p>
      ))}
    </div>
  );
}

export default Month;
