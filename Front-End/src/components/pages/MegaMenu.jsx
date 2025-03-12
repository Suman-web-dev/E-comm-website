import { useState } from "react";

const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      title: "Electronics",
      subMenu: [],
    },
    {
      title: "TVs & Appliances",
      subMenu: [],
    },
    {
      title: "Men",
      subMenu: [],
    },
    {
      title: "Women",
      subMenu: [
        {
          title: "Clothing",
          items: ["Women Western & Maternity Wear", "Topwear", "Dresses"],
        },
        {
          title: "Ethnic Wear",
          items: ["Sarees", "Kurtas & Kurtis", "Dress Material", "Lehenga Choli"],
        },
        {
          title: "Footwear",
          items: ["Sandals", "Flats", "Heels", "Wedges"],
        },
        {
          title: "Beauty & Grooming",
          items: ["Make Up", "Skin Care", "Hair Care", "Bath & Spa"],
        },
        {
          title: "Featured",
          items: ["Forever 21", "Accessorize", "W", "Pantaloons"],
        },
      ],
    },
    {
      title: "Baby & Kids",
      subMenu: [],
    },
    {
      title: "Home & Furniture",
      subMenu: [],
    },
    {
      title: "Sports, Books & More",
      subMenu: [],
    },
    {
      title: "Flights",
      subMenu: [],
    },
    {
      title: "Offer Zone",
      subMenu: [],
    },
  ];

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto">
        <ul className="flex space-x-6 py-4 px-6 text-gray-700">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenMenu(menu.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="px-4 py-2 hover:text-blue-500">{menu.title}</button>
              {menu.subMenu.length > 0 && openMenu === menu.title && (
                <div className="absolute left-0 top-full bg-white shadow-lg w-64 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menu.subMenu.map((sub, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-gray-800 mb-2">{sub.title}</h3>
                      <ul className="space-y-1 text-gray-600">
                        {sub.items.map((item, i) => (
                          <li key={i} className="hover:text-blue-500 cursor-pointer">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
