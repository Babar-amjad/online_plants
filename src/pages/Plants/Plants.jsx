import React, { useState } from "react";

const Plants = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
   
    setCart([...cart, item]);
    console.log("Item added to cart:", item);
  };


  const plantData = [
    {
      id: 1,
      category: "Indoor_plant",
      name: "Urban jungle",
      price: "RS:1600",
      image: "https://media.istockphoto.com/id/1403237341/photo/urban-jungle.jpg?s=612x612&w=0&k=20&c=RYR0-slhJi6AW2DeC8SHTVvpNZxbS13fSxyUr3uo7Aw="
    },
    {
      id: 2,
      category: "Outdoor_plant",
      name: "Erica heather in flower",
      price: "RS:1150",
      image: "https://media.istockphoto.com/id/183265205/photo/erica-heather-in-flower-pot.jpg?s=2048x2048&w=is&k=20&c=5hpSgZP_WcD5XBcrsgk-GeML7gUHBJq38IChe2f-T1o="
    },
    {
      id: 3,
      category: "Outdoor_plants",
      name: "Umbrella tree",
      price: "RS:950",
      image: "https://media.istockphoto.com/id/453932743/photo/umbrella-tree-on-white-background.jpg?s=2048x2048&w=is&k=20&c=xjhmTrbLSPw8H3LZPxcsccQLYX-9pV5hJjNTwEvnAwE="
    },
    {
      id: 4,
      category: "Indoor_plant",
      name: "Alocasia Dragon Scale",
      price: "RS:1840",
      image: "https://media.istockphoto.com/id/1396436076/photo/holding-a-yellow-leaf-of-alocasia-dragon-scale.jpg?s=2048x2048&w=is&k=20&c=YlW5Xjlw3HMJH5Mjs3LOEQgYxrRUL1-9R_zcKGPSA80="
    },
    {
      id: 5,
      category: "Indoor_plants",
      name: "Monstera obliqua leaves",
      price: "RS:1600",
      image: "https://media.istockphoto.com/id/1419600133/photo/monstera-obliqua-leaves-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=DhmVaPJd_eScwJkVVyiJh4cX7EsOuKCUy6C5w9dUFks="
    },
    {
      id: 6,
      category: "Outdoor_plants",
      name: "small tree",
      price: "RS:800",
      image: "https://media.istockphoto.com/id/489908247/photo/young-man-planting-in-the-garden.jpg?s=2048x2048&w=is&k=20&c=Nw9_SkTuDCkiKCBVRFelpYAddVu7kgEGEl3K3qGj5GU="
    },
    {
      id: 7,
      category: "Outdoor_plant",
      name: "Green zamia",
      price: "RS:1200",
      image: "https://media.istockphoto.com/id/1313458593/photo/green-zamia-plant.jpg?s=2048x2048&w=is&k=20&c=TXJnF5YXVAugMrfZRXe7BSqnOWQQx-1WoFOBdizV1N4="
    },
    {
      id: 8,
      category: "Indoor_plant",
      name: "Feminine happiness",
      price: "RS:1540",
      image: "https://media.istockphoto.com/id/1250309842/photo/beautiful-green-plant-spathiphyllum-in-a-white-flower-pot-against-the-background-of-the.jpg?s=2048x2048&w=is&k=20&c=tClkkdb_HIQB8kUK8d7JveALIS_eJNzm3mt78F4C_bw="
    },
    {
      id: 9,
      category: "Outdoor_plant",
      name: "Sun flower",
      price: "RS:1200",
      image: "https://images.unsplash.com/photo-1699721903651-2403bc969a10?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
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
      },
        
      {
        id: 17,
        name: "Ficus elastica",
        category: "Indoor_plant",
        price: "RS:1500",
        image: "https://media.istockphoto.com/id/1275848754/photo/home-flowers-and-plants-in-white-pots-on-the-windowsill-sansevieria-ficus-elastica.jpg?s=2048x2048&w=is&k=20&c=_pCjOGjwRBDssCdlgXjlKOkU0mv816H-AaVJVUxBQwA="
      },
      {
        id: 18,
        name: "potted houseplants",
        category: "Indoor_plant",
        price: "RS:1100",
        image: "https://media.istockphoto.com/id/1369398483/photo/high-angle-view-of-houseplants-with-no-people.jpg?s=2048x2048&w=is&k=20&c=a888pzQU2j_3DmUR0_T1E-VYHAiwklgPlE8o46Nry5A="
      },
      {
        id: 19,
        name: "lush spathiphyllum plant",
        category: "Indoor_plant",
        price: "RS:800",
        image: "https://media.istockphoto.com/id/1502534335/photo/a-beautiful-green-and-lush-spathiphyllum-plant-on-a-white-windowsill-home-decor.jpg?s=2048x2048&w=is&k=20&c=c5eWe76x0_JAusDcndunD9SrMmUyiPzrG9FbIg5p9ZA="
      },
      {
        id: 20,
        name: "Philodendron Xanadu plant",
        category: "Indoor_plant",
        price: "RS:1540",
        image: "https://media.istockphoto.com/id/1552650234/photo/philodendron-xanadu-plant-in-a-ceramic-pot-closeup-view.jpg?s=2048x2048&w=is&k=20&c=Mhj2zpTmGNgFN6ou3a1xYVCN7ABjMP1AKCNRWY8JbNk="
      },
      {
        id: 21,
        name: "Tradescantia zebrina",
        category: "Indoor_plant",
        price: "RS:1240",
        image: "https://media.istockphoto.com/id/1497563706/photo/tradescantia-zebrina-or-zebrina-pendula-also-known-as-wandering-jew-plant-in-a-hanging-basket.jpg?s=2048x2048&w=is&k=20&c=KOgioEg8BvLJ_gioPTto5m82hSjPA2i_45ZX3rgERGs="
      },
      {
        id: 22,
        name: "Ficus elastica variegated propagating",
        category: "Indoor_plant",
        price: "RS:700",
        image: "https://media.istockphoto.com/id/1317064438/photo/ficus-elastica-variegated-propagating-in-a-water-from-single-leaf.jpg?s=2048x2048&w=is&k=20&c=74YFf9nSIWxDpLilJAwmYd1l8WkwmjjjyUQF7Yeak2g="
      },
      {
        id: 23,
        name: "Beaucarnea recurvata",
        category: "Indoor_plant",
        price: "RS:1600",
        image: "https://media.istockphoto.com/id/1317564362/photo/beaucarnea-recurvata-the-elephants-foot-or-ponytail-palm-planted-in-a-beautiful-design-pot.jpg?s=2048x2048&w=is&k=20&c=zC0kelPzLdx3Ab1Pn2m-17j_gnFTofGSLDNiLBS3Ovw="
      },
      {
        id: 24,
        name: "A decoration pot stock",
        category: "Indoor_plant",
        price: "RS:1540",
        image: "https://media.istockphoto.com/id/1320487513/photo/a-decoration-pot.jpg?s=2048x2048&w=is&k=20&c=0kiNrb5rX8mcEYzgyUA9iej3kjLEBx48JJhz81piKVY="
      },
     
    ];
    
  
  

  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-8 items-center pb-6 ">
        All_plants
      </h1>
      <section className="text-gray-600 body-font bg-pink-100 shadow-2xl">
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

export default Plants;
