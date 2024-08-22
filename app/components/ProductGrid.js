export default function ProductGrid() {
    const products = [
      { title: "Pick up where you left off", image: "/iphones.jpg" },
      { title: 'Watch the new season of "The Boys"', image: "/the-boys.jpg" },
      { title: "Free grocery pickup", image: "/grocery.jpg" },
      { title: "Deals on dorm essentials", image: "/dorm.jpg" },
    ]
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold">{product.title}</h3>
          </div>
        ))}
      </div>
    )
  }