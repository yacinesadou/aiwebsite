export default function NavBar() {
    const links = ["All", "Same-Day Delivery", "Medical Care", "Prime Video", "Customer Service", "Household, Health & Baby Care", "Livestreams", "Amazon Basics", "Buy Again", "Pharmacy", "Subscribe & Save", "Shop By Interest", "Books"]
    
    return (
      <nav className="bg-[#232f3e] text-white p-2 overflow-x-auto whitespace-nowrap">
        {links.map((link, index) => (
          <a key={index} href="#" className="mr-4 text-sm hover:underline">{link}</a>
        ))}
      </nav>
    )
  }