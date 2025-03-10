import { ColumnsEnum } from "../enums/Column.enum";

const getGridColumnsClass = (numColumns: ColumnsEnum): string => {
  const columnsMap = {
    [ColumnsEnum.Two]: "grid-cols-2",
    [ColumnsEnum.Three]: "grid-cols-3",
    [ColumnsEnum.Four]: "grid-cols-4",
  };

  return columnsMap[numColumns] || "grid-cols-3";
}

export default getGridColumnsClass;