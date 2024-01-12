export interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}