import React from 'react';
import { BiSearch } from 'react-icons/bi';
function SearchSales({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <div className="relative">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Pesquisar pelo nome..."
        className="bg-projeto-primary1/20 text-projeto-primary3 rounded text-sm pl-8 py-2 w-full outline-none"
      />
      <BiSearch className="text-projeto-primary3 absolute top-[0.7rem] left-2 " />
    </div>
  );
}

export default SearchSales;
