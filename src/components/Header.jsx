import Image from "next/image";

function Header() {
  return (
    <header className="w-full flex justify-center bg-white rounded-b-3xl shadow">
      <nav className="w-full max-w-notebook p-4 md:px-10% md:py-11 flex items-center flex-col md:flex-row">
        <div className="mr-auto flex w-full md:w-fit items-center">
          <h1 className="text-prime font-extrabold text-2xl mr-auto">
            FazzPay
          </h1>
          <button className="btn btn-square btn-sm btn-outline md:hidden">
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
        <span className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-7 md:w-14 mask mask-squircle">
              <Image
                src="/images/users.webp"
                alt="display-phone"
                width="50"
                height="50"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold md:text-lg">Muchamad Afif Buchori</h2>
            <p className="text-sm hidden md:block">+62 822 1133 8805</p>
          </div>
          <i className="bi bi-bell md:text-3xl"></i>
        </span>
      </nav>
    </header>
  );
}

export default Header;
