export type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPaginate: (page: number) => void;
};
