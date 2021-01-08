import { useState } from "react";

export const useSearch = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (value.length > 2 || value === "") {
      setSearchField(value);
      setCurrentPage(1);
    }
  };

  const handleClear = () => {
    setSearchField("");
    setCurrentPage(1);
  };

  return { searchField, currentPage, setSearchField, setCurrentPage, handleChange, handleClear };
};
