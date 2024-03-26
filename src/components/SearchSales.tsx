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
        className="bg-projeto-primary1/20 text-projeto-primary3 rounded pl-9 py-4 w-full outline-none"
      />
      <BiSearch className="text-projeto-primary3 absolute top-4 left-2 size-5" />
    </div>
  );
}

export default SearchSales;
