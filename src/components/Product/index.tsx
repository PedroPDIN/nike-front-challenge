import { useState, useEffect } from "react";
import { getByIdProduct } from "../../services/api/Product.api";
import { IProduct } from "../../interfaces/IProduct.interface";

interface Props {
  productId: number;
};

function Product({ productId }: Props) {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const dataProductService = async () => {
      const product = await getByIdProduct(productId);
      setProduct(product)
    }

    dataProductService()
  }, []);

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="flex justify-between p-4 gap-6">
      <div className="w-[50%]">
        <img src={ product.image_url } alt={ product.name } />
      </div>

      <div className="w-[50%]">
        <div className="flex flex-col gap-1">
          <h2 className="font-extrabold text-xl text-black">{product.name} { product.seller}</h2>
          <span className="font-semibold text-[14px] text-secondary">{ product.sport }</span>
        </div>

        <div className="py-4">
          <span className="font-semibold text-[16px] text-black">R$ {product.price}</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[16px] text-black">Tamanhos:</h3>

          <div className="flex gap-2">
            {product.available_sizes.map((size, index) => (
              <div key={index} className="bg-primary py-1 px-3 rounded-md cursor-pointer hover:bg-gray-200">
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="py-6">
          <p>{product.details}</p>
        </div>

        <div className="flex justify-center gap-8 pt-4">
          <button type="button" className="px-4 py-2 bg-primary hover:bg-gray-200 rounded-md">Adicionar Carrinho</button>
          <button type="button" className="px-4 py-2 bg-secondary hover:bg-gray-500 rounded-md">Comprar</button>
        </div>

      </div>
    </div>
  )
}

export default Product;
