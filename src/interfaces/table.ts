import { ReactNode } from "react";
import {
  HeaderGroup,
  HeaderProps,
  Renderer,
  Row,
  TableBodyPropGetter,
  TablePropGetter,
} from "react-table";

export interface TableInterface {
  data: object[];
  columns: {
    Header?: Renderer<HeaderProps<object>>;
    accessor: string;
    Cell?: ({ value, row }: TableCell) => ReactNode;
  }[];
  title?: string;
  isLoading?: boolean;
  setPage?: (cursor: string) => void;
  meta?: TableMeta;
}

export interface TableMeta {
  nextCursor?: string;
  previousCursor?: string;
}

export interface TableInstance {
  getTableProps?: TablePropGetter<object>;
  getTableBodyProps?: TableBodyPropGetter<object>;
  headerGroups?: HeaderGroup<object>[];
  prepareRow?: (row: Row<object>) => void;
  rows?: Row<object>[];

  selectedFlatRows?: any;
}

export interface TableCell {
  value: any;
  row: any;
}
