// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import NavBar from './components/NavBar';
import CardProduct from './components/CardProduct';
import handleNumberColumns from './utils/handleNumberColumns';
import getGridColumnsClass from './utils/getGridColumnsClass';
import { getAllProducts } from './services/api/Product.api';

import FilterIcon from './assets/filter-icon.svg';
import { ProductsList } from './types/ProductsList.type';
import { ColumnsEnum } from './enums/Column.enum';
// import ArrowButtonIcon from './assets/arrow-button-icon.svg';
// import ArrowTopIcon from './assets/arrow-top-icon.svg';

function App() {
  const [listColumns, setListColumns] = useState<boolean[]>([false, true, false]);
  const [numberColumns, setNumberColumns] = useState<ColumnsEnum>(ColumnsEnum.Three);
  const [productsList, setProductList] = useState<ProductsList>([]);
  // const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  useEffect(() => {
    const dataProductsService = async () => {
      const products = await getAllProducts();
      setProductList(products);
    }
    
    dataProductsService();
  }, [])

  const handleButtonClick = (index: number): void => {
    const newListColumns = listColumns.map((_, i) => (i === index ? !listColumns[i] : false));

    setListColumns(newListColumns);
    setNumberColumns(handleNumberColumns(index));
  };

  // const changeArrow = (value: boolean): void => {
  //   setIsOptionsOpen(value);
  // }
  return (
    <>
      <Header />
      <section>
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

          <button type="button" className="flex items-center justify-center">
            <span className="leading-5 font-normal text-xl cursor-pointer outline-none text-secondary">Filtros</span>
            <img src={FilterIcon} alt="filter-icon" className="text-primary w-4 h-4 ml-2  " />
          </button>

          <div className="relative flex">
            <select
              name="order"
              id=""
              className='flex items-center cursor-pointer p-3 rounded-full appearance-none w-40 text-left border-none'>
              <option value="" disabled selected className="hidden">Ordenar por</option>
              <option value="sm-price" className="options-order">Menos Preço</option>
              <option value="big-price" className="cursor-pointer">Maior Preço</option>
              <option value="number-sizes" className="cursor-pointer">Quantidade de Tamanhos</option>
            </select>

            {/* <div className="absolute right-0 top-3">
              <img src={isOptionsOpen ? ArrowTopIcon : ArrowButtonIcon} alt="arrow-icon" />
            </div> */}
          </div>
        </aside>

        <main className="bg-red-600">

          <div className="flex flex-row justify-center ">
            <div className={`grid gap-[16px] ${getGridColumnsClass(numberColumns)}`}>
              {productsList.map((product) => (
                <CardProduct
                  key={product.id}
                  products={product}
                  numberColumns={numberColumns} />
              ))}
            </div>
          </div>
        </main>

      </section>
    </>
  );
}

export default App;
