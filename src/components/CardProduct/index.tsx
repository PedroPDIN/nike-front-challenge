import { ColumnsEnum } from "../../enums/Column.enum";
import { IProduct } from "../../interfaces/IProduct.interface";

interface Props {
  products: IProduct;
  numberColumns: ColumnsEnum;
}

function CardProduct({ products, numberColumns }: Props) {
  const { image_url, name, price, sport } = products;

  const getImageSize = () => {
    if (numberColumns === ColumnsEnum.Four) {
      return "w-[320px] h-[320px]"
    }

    return 'w-[442px] h-[442px]'
  }

  return (
    <div className="flex flex-col">
      <div className={ getImageSize() }>
        <img src={image_url} alt={name} />
      </div>

      <div className="flex flex-col pt-[16px]">
        <span className="text-xl font-medium leading-5 w-[232px] break-words mb-2">{name}</span>
        <span className="text-[16px] font-normal text-secondary">{ sport }</span>
        <span className="my-[16px] text-[16px] font-medium">R$ {price}</span>
      </div>
    </div>
  )

}

export default CardProduct;