export const usePagination = (setCurrentPage: any) => {
    const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
      };

      return { setCurrentPage, handlePagination };
}