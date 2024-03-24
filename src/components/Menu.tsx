import React from 'react';
import {
  BiCog,
  BiHomeAlt,
  BiSolidBank,
  BiExit,
  BiPurchaseTag,
  BiEnvelope,
  BiTransfer,
} from 'react-icons/bi';

function Menu() {
  return (
    <div className="bg-projeto-primary text-projeto-primary3 min-w-52 rounded-xl rounded-r-lg border-r-[1px] border-projeto-primary1/30">
      {/* <Logo /> */}
      <div className="flex gap-2 items-center px-7 pt-7 mb-14">
        <BiSolidBank className="text-projeto-secondary1 size-7" />
        <h1 className="text-projeto-secondary font-bold text-xl">FINTECH</h1>
      </div>
      <div className="px-5">
        <div className="flex items-center gap-3 mb-6 px-2 py-1 rounded hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:font-bold hover:cursor-pointer ease-in duration-150">
          <BiHomeAlt className=" size-5 " />
          <p>Resumo</p>
        </div>
        <div className="flex items-center gap-3 mb-6 px-2 py-1 rounded hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:font-bold hover:cursor-pointer ease-in duration-150">
          <BiPurchaseTag className="size-5" />
          <p>Vendas</p>
        </div>
        <div className="flex items-center gap-3 mb-6 px-2 py-1 rounded hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:font-bold hover:cursor-pointer ease-in duration-150">
          <BiTransfer className="size-5" />
          <p>Webhooks</p>
        </div>
        <div className="flex items-center gap-3 mb-6 px-2 py-1 rounded hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:font-bold hover:cursor-pointer ease-in duration-150">
          <BiCog className="size-5" />
          <p>Configurações</p>
        </div>
        <div className="flex items-center gap-3 mb-6 px-2 py-1 rounded hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:font-bold hover:cursor-pointer ease-in duration-150">
          <BiEnvelope className="size-5" />
          <p>Contato</p>
        </div>
        <div className="flex items-center gap-3 mb-6 px-2 py-1 rounded hover:bg-projeto-secondary/80 hover:text-projeto-primary hover:font-bold hover:cursor-pointer ease-in duration-150">
          <BiExit className="size-5" />
          <p>Sair</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
