export default function Banner() {
    return (
      <div className="bg-[#37475A] text-white p-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-2">Unlimited grocery delivery for $9.99/mo with Prime</h2>
          <p className="mb-4">Free 30-day trial</p>
          <button className="bg-[#febd69] text-black py-2 px-4 rounded">Start your free trial</button>
        </div>
        <div className="absolute inset-0 flex items-center justify-around opacity-20">
          {/* Add grocery item images here */}
        </div>
      </div>
    )
  }