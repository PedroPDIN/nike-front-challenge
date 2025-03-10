import { ColumnsEnum } from "../enums/Column.enum"

const handleNumberColumns = (indexColumn: number) => {
  switch (indexColumn) {
    case 0:
      return ColumnsEnum.Two;
    case 1:
      return ColumnsEnum.Three;
    case 2:
      return ColumnsEnum.Four;
    default:
      return ColumnsEnum.Three;
  }
}

export default handleNumberColumns;
