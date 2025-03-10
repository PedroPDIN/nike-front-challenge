import { ProductsList } from "../../types/ProductsList.type";
import { IFilterProducts } from "../../interfaces/IFiltersProducts.interface";
import { useState, useEffect } from "react";
import { getClothingSize, getShoeSize } from "../../services/api/Product.api";

interface Props {
  productsList: ProductsList;
  setFilteredProductsList: React.Dispatch<React.SetStateAction<ProductsList>>;
};

function FilterSidebar({ productsList, setFilteredProductsList }: Props) {
  const [clothingSizes, setClothingSizes] = useState<string[]>([]);
  const [shoeSizes, setShoeSizes] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<'clothing' | 'shoe' | 'none'>('none');
  const [selectedFilters, setSelectedFilters] = useState<IFilterProducts>({
    clothingSize: "",
    shoeSize: "",
  });

  useEffect(() => {
    const dataSizesProducts = async () => {
      const [clothes, shoes] = await Promise.all([
        getClothingSize(),
        getShoeSize(),
      ]);

      setClothingSizes(clothes);
      setShoeSizes(shoes);
    }

    dataSizesProducts();
  }, [])

  const handleShoeSizeClick = (type: 'clothing' | 'shoe', size: string) => {
    if (type === 'clothing') {
      setSelectedFilters({
        ...selectedFilters,
        clothingSize: size,
        shoeSize: '',
      });

      setActiveFilter('clothing');
    } else {
      setSelectedFilters({
        ...selectedFilters,
        shoeSize: size,
        clothingSize: '',
      });

      setActiveFilter('shoe');
    }
  };

  const handleResetFilters = () => {
    setSelectedFilters({
      clothingSize: "",
      shoeSize: "",
    });

    setActiveFilter('none');
    setFilteredProductsList(productsList);
  };

  useEffect(() => {
    if (activeFilter === 'clothing') {
      setFilteredProductsList(
        productsList.filter((product) => product.available_sizes.includes(selectedFilters.clothingSize))
      );
    } else if (activeFilter === 'shoe') {
      setFilteredProductsList(
        productsList.filter((product) => product.available_sizes.includes(selectedFilters.shoeSize))
      );
    } else {
      setFilteredProductsList(productsList);
    }
  }, [selectedFilters, activeFilter, productsList, setFilteredProductsList]);
  
  return (
    <aside className="p-4 border-r border-gray-200 w-64 flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Tamanho da Roupa</h3>
        <div className="grid grid-cols-4 gap-2">
          {clothingSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleShoeSizeClick("clothing", size)}
              className={`px-3 py-1 border rounded text-sm ${selectedFilters.clothingSize === size ? 'border-black' : 'border-gray-300'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Tamanho do Calçado</h3>
        <div className="grid grid-cols-4 gap-2">
          {shoeSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleShoeSizeClick("shoe", size)}
              className={`px-3 py-1 border rounded text-sm ${selectedFilters.shoeSize === size ? 'border-black' : 'border-gray-300'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleResetFilters}
        className="mt-4 px-4 py-2 bg-gray-200 text-sm font-semibold rounded"
      >
        Limpar Filtro
      </button>
    </aside>
  )
}

export default FilterSidebar;
