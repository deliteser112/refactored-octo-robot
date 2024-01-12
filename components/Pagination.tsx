// components/Pagination.tsx
import React from "react";
import { PaginationProps } from "../interfaces/Pagination";

type PageItem = number | "...";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  // Function to create page numbers
  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  // Function to determine page numbers to show
  const paginationItems = () => {
    const totalNumbers = 5; // Number of page numbers to show
    const totalBlocks = totalNumbers + 2; // Include ellipsis

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);
      let pages: PageItem[] = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [1, "...", ...extraPages, ...pages];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, "...", totalPages];
      } else {
        pages = [1, "...", ...pages, "...", totalPages];
      }

      return pages;
    }

    return range(1, totalPages);
  };

  return (
    <div className="flex justify-center items-center gap-2 my-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={page === 1}
        className="pagination-button"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="pagination-button"
      >
        Prev
      </button>
      {paginationItems().map((item, index) =>
        item === "..." ? (
          <span key={index} className="pagination-item">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(item)}
            className={`pagination-button ${page === item ? "active" : ""}`}
          >
            {item}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="pagination-button"
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={page === totalPages}
        className="pagination-button"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
