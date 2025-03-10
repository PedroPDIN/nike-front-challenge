// import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import { ColumnsEnum } from "./enums/Column.enum";
import FilterIcon from "./assets/filter-icon.svg";
import CardProduct from "./components/CardProduct";
import FilterSidebar from "./components/FilterSidebar";
import { ProductsList } from "./types/ProductsList.type";
import { getAllProducts } from "./services/api/Product.api";
import handleNumberColumns from "./utils/handleNumberColumns";
import getGridColumnsClass from "./utils/getGridColumnsClass";

function App() {
  const [productsList, setProductList] = useState<ProductsList>([]);
  const [filteredProductsList, setFilteredProductsList] = useState<ProductsList>([]);
  const [productId, setProductId] = useState<number>(0);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const [listColumns, setListColumns] = useState<boolean[]>([false, true, false]);
  const [numberColumns, setNumberColumns] = useState<ColumnsEnum>(ColumnsEnum.Three);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dataProductsService = async () => {
      const products = await getAllProducts();
      setProductList(products);
      setFilteredProductsList(products);
    }

    dataProductsService();
  }, [])

  useEffect(() => {
    setFilteredProductsList(productsList);
  }, [productsList, isOpenFilter]);

  const handleButtonClick = (index: number): void => {
    const newListColumns = listColumns.map((_, i) => (i === index ? !listColumns[i] : false));

    setListColumns(newListColumns);
    setNumberColumns(handleNumberColumns(index));
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <>
      <Header />
      <section className="mb-60">
        <NavBar />

        <aside className="flex justify-end gap-[24px] items-center p-11">
          <div className="flex gap-9">
            <button onClick={() => handleButtonClick(0)} className="flex gap-[2px]">
              <div className={`${listColumns[0] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
              <div className={`${listColumns[0] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
            </button>

            <button onClick={() => handleButtonClick(1)} className="flex gap-[2px]">
              <div className={`${listColumns[1] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
              <div className={`${listColumns[1] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
              <div className={`${listColumns[1] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
            </button>

            <button onClick={() => handleButtonClick(2)} className="flex gap-[2px]">
              <div className={`${listColumns[2] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
              <div className={`${listColumns[2] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
              <div className={`${listColumns[2] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
              <div className={`${listColumns[2] ? "border-black border" : "border-secondary border"} rounded-[4px] p-3`}></div>
            </button>
          </div>

          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => handleOpenFilter()}>
            <span className="leading-5 font-normal text-xl cursor-pointer outline-none text-secondary">Filtros</span>
            <img src={FilterIcon} alt="filter-icon" className="text-primary w-4 h-4 ml-2  " />
          </button>

          <div className="relative flex">
            <select
              name="order"
              value="order"
              id="order"
              className='flex items-center cursor-pointer p-3 rounded-full appearance-none w-40 text-left border-none'>
              <option value="" disabled selected className="hidden">Ordenar por</option>
              <option value="sm-price" className="options-order">Menos Preço</option>
              <option value="big-price" className="cursor-pointer">Maior Preço</option>
              <option value="number-sizes" className="cursor-pointer">Quantidade de Tamanhos</option>
            </select>
          </div>
        </aside>

        <main className="flex justify-center">
          {isOpenFilter && (
            <FilterSidebar
              productsList={productsList}
              setFilteredProductsList={setFilteredProductsList} />
          )}

          <aside className="flex flex-row justify-center ">
            <div className={`grid gap-[16px] ${getGridColumnsClass(numberColumns)}`}>
              {filteredProductsList.map((product) => (
                <CardProduct
                  key={product.id}
                  products={product}
                  numberColumns={numberColumns}
                  setIsModalOpen={setIsModalOpen}
                  setProductId={setProductId}
                  isOpenFilter={isOpenFilter} />
              ))}
            </div>
          </aside>
        </main>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Product productId={ productId }/>
      </Modal>
    </>
  );
}

export default App;
