import type { DataTestId } from '../../types';

export type PaginationPropsType = DataTestId & {
  count?: number;
  page?: number;
  rowsPerPage?: number;
  onPageChange: (event: React.SyntheticEvent, numberParam: number) => void
};
