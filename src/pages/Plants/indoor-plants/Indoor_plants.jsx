import React,{useState} from "react";

const Indoor_plants = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // Update the state by adding the selected item to the cart array
    setCart([...cart, item]);
    console.log("Item added to cart:", item);
  };

  const plantData = [
    {
      id: 1,
      name: "Urban jungle",
      category: "Indoor_plant",
      price: "RS1600",
      image: "https://media.istockphoto.com/id/1403237341/photo/urban-jungle.jpg?s=612x612&w=0&k=20&c=RYR0-slhJi6AW2DeC8SHTVvpNZxbS13fSxyUr3uo7Aw="
    },
    {
      id: 2,
      name: "Alocasia Dragon Scale",
      category: "Indoor_plant",
      price: "RS:1840",
      image: "https://media.istockphoto.com/id/1396436076/photo/holding-a-yellow-leaf-of-alocasia-dragon-scale.jpg?s=2048x2048&w=is&k=20&c=YlW5Xjlw3HMJH5Mjs3LOEQgYxrRUL1-9R_zcKGPSA80="
    },
    {
      id: 3,
      name: "Monstera obliqua leaves",
      category: "Indoor_plants",
      price: "RS:1600",
      image: "https://media.istockphoto.com/id/1419600133/photo/monstera-obliqua-leaves-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=DhmVaPJd_eScwJkVVyiJh4cX7EsOuKCUy6C5w9dUFks="
    },
   
    {
      id: 4,
      name: "Feminine happiness",
      category: "Indoor_plant",
      price: "RS:1540",
      image: "https://media.istockphoto.com/id/1250309842/photo/beautiful-green-plant-spathiphyllum-in-a-white-flower-pot-against-the-background-of-the.jpg?s=2048x2048&w=is&k=20&c=tClkkdb_HIQB8kUK8d7JveALIS_eJNzm3mt78F4C_bw="
    },
    {
      id: 5,
      name: "Ficus elastica",
      category: "Indoor_plant",
      price: "RS:1500",
      image: "https://media.istockphoto.com/id/1275848754/photo/home-flowers-and-plants-in-white-pots-on-the-windowsill-sansevieria-ficus-elastica.jpg?s=2048x2048&w=is&k=20&c=_pCjOGjwRBDssCdlgXjlKOkU0mv816H-AaVJVUxBQwA="
    },
    {
      id: 6,
      name: "potted houseplants",
      category: "Indoor_plant",
      price: "RS:1100",
      image: "https://media.istockphoto.com/id/1369398483/photo/high-angle-view-of-houseplants-with-no-people.jpg?s=2048x2048&w=is&k=20&c=a888pzQU2j_3DmUR0_T1E-VYHAiwklgPlE8o46Nry5A="
    },
    {
      id: 7,
      name: "lush spathiphyllum plant",
      category: "Indoor_plant",
      price: "RS:800",
      image: "https://media.istockphoto.com/id/1502534335/photo/a-beautiful-green-and-lush-spathiphyllum-plant-on-a-white-windowsill-home-decor.jpg?s=2048x2048&w=is&k=20&c=c5eWe76x0_JAusDcndunD9SrMmUyiPzrG9FbIg5p9ZA="
    },
    {
      id: 8,
      name: "Philodendron Xanadu plant",
      category: "Indoor_plant",
      price: "RS:1540",
      image: "https://media.istockphoto.com/id/1552650234/photo/philodendron-xanadu-plant-in-a-ceramic-pot-closeup-view.jpg?s=2048x2048&w=is&k=20&c=Mhj2zpTmGNgFN6ou3a1xYVCN7ABjMP1AKCNRWY8JbNk="
    },
    {
      id: 9,
      name: "Tradescantia zebrina",
      category: "Indoor_plant",
      price: "RS:1240",
      image: "https://media.istockphoto.com/id/1497563706/photo/tradescantia-zebrina-or-zebrina-pendula-also-known-as-wandering-jew-plant-in-a-hanging-basket.jpg?s=2048x2048&w=is&k=20&c=KOgioEg8BvLJ_gioPTto5m82hSjPA2i_45ZX3rgERGs="
    },
    {
      id: 10,
      name: "Ficus elastica variegated propagating",
      category: "Indoor_plant",
      price: "RS:700",
      image: "https://media.istockphoto.com/id/1317064438/photo/ficus-elastica-variegated-propagating-in-a-water-from-single-leaf.jpg?s=2048x2048&w=is&k=20&c=74YFf9nSIWxDpLilJAwmYd1l8WkwmjjjyUQF7Yeak2g="
    },
    {
      id: 11,
      name: "Beaucarnea recurvata",
      category: "Indoor_plant",
      price: "RS:1600",
      image: "https://media.istockphoto.com/id/1317564362/photo/beaucarnea-recurvata-the-elephants-foot-or-ponytail-palm-planted-in-a-beautiful-design-pot.jpg?s=2048x2048&w=is&k=20&c=zC0kelPzLdx3Ab1Pn2m-17j_gnFTofGSLDNiLBS3Ovw="
    },
    {
      id: 12,
      name: "A decoration pot stock",
      category: "Indoor_plant",
      price: "RS:1540",
      image: "https://media.istockphoto.com/id/1320487513/photo/a-decoration-pot.jpg?s=2048x2048&w=is&k=20&c=0kiNrb5rX8mcEYzgyUA9iej3kjLEBx48JJhz81piKVY="
    },
   
  ];
  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-8 items-center pb-6 ">
        Indoor plants
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
};

export default Indoor_plants;
