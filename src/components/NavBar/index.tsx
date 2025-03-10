import LogoNike from "../../assets/nike.svg";
import BagIcon from "../../assets/bag-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";

function NavBar() {
  return (
    <aside className="flex h-24 items-center justify-between p-[40px]">
      <div>
        <img src={LogoNike} alt="nike-logo" className="w-[64px] h-[23px]" />
      </div>

      <nav className="flex justify-between items-center">
        <ul className="flex">
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">Seleção Brasileira</a>
          </li>
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">Editorial De Moda</a>
          </li>
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">Lançamentos</a>
          </li>
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">feminino</a>
          </li>
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">Masculino</a>
          </li>
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">Infantil</a>
          </li>
          <li className="box-border px-7 py-5 justify-center items-center">
            <a href="*" className="font-medium text-[16px] text-black leading-6 cursor-pointer capitalize">SNKRS</a>
          </li>
        </ul>

        <div className="flex gap-7 items-center">
          <div>
            <button type="button" className="flex items-center rounded-full p-1 bg-primary">
              <div className="p-2 rounded-full hover:bg-white">
                <img src={SearchIcon} alt="search-icon" className="w-4 h-4" />
              </div>
              <input type="text" placeholder="Buscar" className="w-36 h-9 p-2 rounded-full focus:outline-none focus:ring-0 bg-primary" />
            </button>
          </div>

          <button type="button">
            <img src={BagIcon} alt="bag-icon" className="w-7 h-7" />
          </button>
        </div>
      </nav>
    </aside>
  )
}

export default NavBar;
