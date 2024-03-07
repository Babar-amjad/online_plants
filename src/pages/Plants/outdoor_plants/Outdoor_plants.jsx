import React,{useState} from 'react'

const Outdoor_plants = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // Update the state by adding the selected item to the cart array
    setCart([...cart, item]);
    console.log("Item added to cart:", item);
  };

  const plantData=[
    {
      id: 10,
      category: "Outdoor_plant",
      name: "Green zamia",
      price: "RS:500",
      image: "https://images.unsplash.com/photo-1676475649379-f06d28e14973?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 11,
      category: "Outdoor_plant",
      name: "Autumnal bouquet",
      price: "RS:1200",
      image: "https://media.istockphoto.com/id/1432559346/photo/beautiful-autumnal-bouquet-on-wooden-table-in-garden.jpg?s=2048x2048&w=is&k=20&c=Mfh2qfJvVq-j6UhiG00d6qn9k_nSYRA74_8xMwSd6rE="
    },
    {
      id: 12,
      category: "Outdoor_plant",
      name: "Red rose",
      price: "RS:200",
      image: "https://media.istockphoto.com/id/595517161/photo/close-up-of-rose-growing-on-plant-at-field.jpg?s=2048x2048&w=is&k=20&c=VbBTh8cPviE7j8zKxU3ye3yFiDZsR5AQmr3KJSE6PE4="
    },
    {
      id: 13,
      category: "Outdoor_plant",
      name: "Petunia flowers",
      price: "RS:100",
      image: "https://media.istockphoto.com/id/690357282/photo/woman-chooses-petunia-flowers-at-garden-plant-nursery-store.jpg?s=2048x2048&w=is&k=20&c=cNXSWC1eb2u__LBgGQaPQAaEbRpTluFBTDxjCcUo2ps="
    },
    {
      id: 14,
      category: "Outdoor_plant",
      name: "Portrait of an Arab gardener",
      price: "RS:1200",
      image: "https://media.istockphoto.com/id/1675122142/photo/arabic-gardener-in-the-garden.jpg?s=2048x2048&w=is&k=20&c=irkQrFABEMQcPzaDQsaFRFKc2ZrjB2Qyurw0rD1_OGM="
    },
    {
      id: 15,
      category: "Outdoor_plant",
      name: "Mistletoe bouquets",
      price: "RS:500",
      image: "https://media.istockphoto.com/id/1756103696/photo/mistletoe-bouquets-in-sale-on-christmas-market.jpg?s=2048x2048&w=is&k=20&c=Bj_Cc6BSdx_tkwGWY6ve3WDrWznRLR6YdMjTlsrSVno="
    },
    {
      id: 16,
      category: "Outdoor_plant",
      name: "Juniper shrubs plants in polythene bags",
      price: "RS:600",
      image: "https://media.istockphoto.com/id/1386999077/photo/juniper-shrubs-plants-in-polythene-bags-in-plant-nursery.jpg?s=2048x2048&w=is&k=20&c=hsyu7PYsSkCDQIcZdm_citgCfVaqZbQK5_xddwf4wLQ="
    }
  ];
  
  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-8 items-center pb-6 ">
        Outdoor plants
      </h1>
      <section className="text-gray-600 body-font bg-pink-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {plantData.map((plant) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={plant.id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block rounded-lg hover:scale-125 duration-1000"
                    src={plant.image}
                  />
                </a>
                <div className="mt-4 shadow-xl">
                  <h3 className="text-gray-500 text-xs tracking-widest name-font mb-1">
                    {plant.category}
                  </h3>
                  <h2 className="text-gray-900 name-font text-lg font-medium">
                    {plant.name}
                  </h2>
                  <p className="mt-1">{plant.price}</p>
                  <button
                    onClick={() => handleClick(plant)}
                    className="bg-green-700 rounded-xl text-white p-2 my-2 mx-2"
                    category="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Outdoor_plants



