import React from 'react';
import { Card } from './ui/card';
import Month from './Month';

function Content() {
  return (
    <div className="bg-projeto-primary rounded-xl rounded-l-lg px-8 py-7">
      <h1 className="text-projeto-primary3 text-xl font-bold mb-4">
        Dashboard
      </h1>
      <div className="text-projeto-primary3 mb-4">
        <div className="flex gap-4">
          <Card className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-80">
            <div className="flex gap-6 pt-4 pb-2 px-4">
              <p className="flex items-center bg-projeto-primary1 text-projeto-primary3 rounded w-32 pl-2 py-1 font-bold text-sm">
                Início
              </p>
              <p className="flex items-center bg-projeto-primary1 text-projeto-primary3 rounded w-32 pl-2 py-1 font-bold text-sm">
                Final
              </p>
            </div>
            <div className="flex gap-6 pb-4 px-4">
              <input
                type="date"
                className="w-32 bg-projeto-primary1 text-projeto-primary3 rounded text-sm pl-2 py-1"
              />
              <input
                type="date"
                className="w-32 bg-projeto-primary1 text-projeto-primary3 rounded text-sm pl-2 py-1"
              />
            </div>
          </Card>
          <Card className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-80">
            <h1 className="pt-4 pb-2 px-4 text-2xl font-bold">Resumo</h1>
          </Card>
        </div>
      </div>
      <Month />
    </div>
  );
}

export default Content;
