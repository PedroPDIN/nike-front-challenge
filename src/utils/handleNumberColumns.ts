import { ColumnsEnum } from "../enums/Column.enum"

const handleNumberColumns = (indexColumn: number) => {
  if (indexColumn === 0) {
    return ColumnsEnum.Two
  }

  if (indexColumn === 1) {
    return ColumnsEnum.Three;
  }

  return ColumnsEnum.Four;
}

export default handleNumberColumns;
