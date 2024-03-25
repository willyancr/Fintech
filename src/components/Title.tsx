import React from 'react';
import { Card } from './ui/card';

function Title() {
  return (
    <Card className="rounded-[6px] bg-projeto-primary1/10 border-[1px] border-projeto-primary1/20 w-80">
      <h1 className="pt-4 pb-2 px-4 text-2xl font-bold">Resumo</h1>
    </Card>
  );
}

export default Title;
