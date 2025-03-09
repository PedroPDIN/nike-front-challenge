import LogoAirJordan from '../../assets/airjordan.svg';
import LogoSnkrs from '../../assets/snkrs.svg';

function Header() {
  return (
    <header className="flex bg-primary justify-between items-center h-[40px] px-12">
      <div className="flex w-[89px] h-[19px] justify-between">
        <img src={ LogoAirJordan } alt="airjordan-logo" className="w-[19px] h-[18px]" />
        <img src={LogoSnkrs} alt="snkrs-logo" className="w-[46px] h-[15px]" />
      </div>

      <nav className="flex items-center">
        <a href="*" className="text-[12px] font-normal leading-6">Ajuda</a>
        <hr className='mr-4 ml-4 border-l border-black h-4' />
        <a href="*" className="text-[12px] font-normal leading-6">Junta-se a nós</a>
        <hr className='mr-4 ml-4 border-l border-black h-4' />
        <a href="*" className="text-[12px] font-normal leading-6">Entrar</a>
      </nav>
    </header>
  ) 
}

export default Header;