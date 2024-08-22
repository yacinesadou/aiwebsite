import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-[#131921] text-white p-2 flex items-center">
      <img src="/amazon-logo.png" alt="Amazon" className="h-8 mr-4" />
      <div className="flex-grow flex">
        <input type="text" className="flex-grow p-2 rounded-l" placeholder="Search Amazon" />
        <button className="bg-[#febd69] p-2 rounded-r">
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      <div className="mx-4">
        <div className="text-xs">Hello, Ysgamer</div>
        <div className="font-bold">Account & Lists</div>
      </div>
      <div className="mx-4">
        <div className="text-xs">Returns</div>
        <div className="font-bold">& Orders</div>
      </div>
      <div className="flex items-center">
        <ShoppingCartIcon className="h-8 w-8" />
        <span className="font-bold">Cart</span>
      </div>
    </header>
  )
}