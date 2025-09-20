import React, { createContext } from "react";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}
export interface SearchContextType {
  members: MemberEntity[];
  search: string;
  handlerSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchOrg: React.Dispatch<React.SetStateAction<boolean>>;
  nextPage: () => void;
  prevPage: () => void;
}

export const SearchContext = createContext<SearchContextType>({
  members: [],
  search: "",
  handlerSearch: () => {},
  setSearchOrg: () => {},
  nextPage: () => {},
  prevPage: () => {},
});

export const SearchProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [search, setSearch] = React.useState<string>("lemoncode");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [searchOrg, setSearchOrg] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${search}/members?per_page=5&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [searchOrg, page]);

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(1, prev - 1));

  return (
    <SearchContext.Provider
      value={{
        members,
        search,
        handlerSearch,
        setSearchOrg,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};