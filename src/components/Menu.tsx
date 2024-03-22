import React from 'react';
import Logo from '../image/Logo';
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
    <div className="bg-projeto-primary w-52 p-8 rounded-xl text-projeto-primary3">
      {/* <Logo /> */}
      <div className="flex gap-2 items-center mb-14">
        <BiSolidBank className="text-projeto-secondary1 size-7" />
        <h1 className="text-projeto-secondary font-bold">FINTECH</h1>
      </div>
      <div>
        <div className="flex gap-3  mb-6">
          <BiHomeAlt className="text-projeto-primary3 size-5" />
          <p>Resumo</p>
        </div>
        <div className="flex gap-3 mb-6">
          <BiPurchaseTag className="text-projeto-primary3 size-5" />
          <p>Vendas</p>
        </div>
        <div className="flex gap-3 mb-6">
          <BiTransfer className="text-projeto-primary3 size-5" />
          <p>Webhooks</p>
        </div>
        <div className="flex gap-3 mb-6">
          <BiCog className="text-projeto-primary3 size-5" />
          <p>Configurações</p>
        </div>
        <div className="flex gap-3 mb-6">
          <BiEnvelope className="text-projeto-primary3 size-5" />
          <p>Contato</p>
        </div>
        <div className="flex gap-3 mb-6">
          <BiExit className="text-projeto-primary3 size-5" />
          <p>Sair</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
