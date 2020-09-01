// drinkMenu = [Cocktails, ShotCombos, Beer, Wine  ]
const Cocktails =
[
                {
                  id: 1,
                  name: "Greenhook Gimlet",
                  price: 9.00,
                  ingredients: ["greenhook gin lime juice", "simple syrup"],
                  imageUrl: "https://www.skurnik.com/wp-content/uploads/2015/08/SKURNIK_Greenhook_Gimlet_COCKTAIL.jpg"
                },
                {
                  id: 2,
                  name: "JJ Ginger Julep",
                  price:8.00,
                  ingredients: ["knob creek", "ginger syrup", "lemon", "soda water"],
                  imageUrl: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/23/640x640/square-1496846752-sparkling-ginger-mint-julep-3.jpg?resize=480:*"
                },
                {
                  id: 3,
                  name: "Absolut Mule",
                  price: 8.00,
                  ingredients: ["absolut vodka", "ginger beer", "lime juice"],
                  imageUrl:"https://www.pernodricardconnect.com/sites/default/files/styles/large_canvas/public/recipe/field_image/Absolut%20Mule%20Drink%20Image_large%20%282%29.png?itok=QxEDbEvZ"
                },
                {
                  id: 4,
                  name:"Hot Toddy",
                  price: 8.00,
                  ingredients: ["JP Wiser rye or Sailor Jerry rum", "honey", "lemon", "hot water"],
                  imageUrl:"https://www.spendwithpennies.com/wp-content/uploads/2019/12/Hot-Toddy-1-SpendWithPennies.jpg"},
                {
                  id: 5,
                  name: "Ginger Toddy",
                  price: 8.00,
                  ingredients: ["JP Wiser rye or Sailor Jerry rum", "ginger syrup", "lemon", "hot water"],
                  imageUrl:"https://rebelyellbourbon.com/wp-content/uploads/2019/05/Ginger-Toddy.jpg"},
]
const ShotCombos =
[
        {
          id: 6,
          name: "Fernet Branca & Anchor Steam",
          price: 11.00,
          imageUrl: "https://imbibemagazine.com/wp-content/uploads/2017/11/la-sirena-clandestina-house-shot-master-horizontal-crdt-emma-janzen-copy.jpg"
        },
        {       
          id: 7,
          name: "Jameson & Budweiser Can",
          price: 8.00,
          imageUrl:"https://upload.wikimedia.org/wikipedia/commons/5/57/Boilermaker.jpg"},
        {
          id: 8,
          name: "Herradura Tequila & Tecate Can",
          price: 8.00,
          imageUrl:"https://www.oakandbarrelnyc.com/wp-content/uploads/2015/02/HERRADURA-BLANCO-750ML.jpg"}
]
// Beer = [Draft, Bottle, Canned ]
const Draft= [
    {id: 9,
      name: "Sixpoint Apostle IPA",
    price:7.00,
    style: "IPA",
    imageUrl: "https://www.bkmag.com/wp-content/uploads/2014/11/Screen-Shot-2014-11-21-at-2.01.50-PM.png"
    },
    {id: 10,
      name:"Sixpoint Sweet Action Cream Ale",
    price: 7.00,
    style: "Ale",
    imageUrl:"https://cdn.shopify.com/s/files/1/1656/0263/products/brewhouse_pint_clean_pour_800-1000x1000_290de0d4-cac4-4203-ac7f-6055218a60ea_1024x1024.jpg?v=1484163283"
    },
    {id: 11,
      name: "Brooklyn Brewery Pilsner",
    price: 7.00,
    style: "Pilsner",
    imageUrl:"https://brooklynbrewery.com/wp-content/uploads/2019/08/img3-copy-7@1x.jpg"
    },
    {id: 12,
      name: "Yuengling Lager",
    price: 5.00,
    style: "Lager",
    imageUrl: "https://www.gannett-cdn.com/-mm-/98376c9c91eff8cf9bae0588bf8e1696045803f1/c=0-312-2800-1894/local/-/media/2017/02/28/INGroup/Indianapolis/636239075221810956-yuengling-RS-04.jpg"
    }
]
const Bottle = [
        {id: 13,
          name: "Budweiser",
        price: 4.00,
        imageUrl:"https://cdn.minibardelivery.com/products/332077/detail/00018200001680_CF_747425_GS1_JPEG_(3).jpg"},
        {id: 14,
          name: "Shiner Bock",
        price: 6.00,
        imageUrl:"https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/259/images/286/shiner_bock12oz__30721.1351018453.1280.1280.jpg?c=2"},
        {id: 15,
          name: "Sol",
        price: 6.00,
        imageUrl:"https://digitalcontent.api.tesco.com/v2/media/ghs/612a406b-89cd-44dc-a1cb-ad22149f080c/snapshotimagehandler_1352085848.jpeg?h=540&w=540" },
        {id: 16,
          name: "Red Stripe",
        price: 6.00,
        imageUrl: "https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/211/images/236/redstripe11p2oz__66892.1350415743.1280.1280.jpg?c=2"},
        {id: 17,
          name:"Anchor Steam",
        price: 6.00,
        imageUrl:"https://cdn.minibardelivery.com/products/351849/product/ASB_12ozBtl-Updated-RF-HR.052716.jpg"},
        {id: 18,
          name: "Leffe",
        price: 7.00,
        imageUrl: "https://cdn.webshopapp.com/shops/65337/files/89670620/mag-leffe-blond.jpg"},
        {id: 19,
          name: "Magners",
        price: 7.00,
        imageUrl:"https://dydza6t6xitx6.cloudfront.net/ci-magners-original-irish-cider-f072737a89b9dda4.png"},
        {id: 20,
          name: "Coopers",
        price: 8.00,
        imageUrl:"https://cdn.diffords.com/contrib/bws/2017/10/59db81dbcdd1c.jpg"},
        {id: 21,
          name: "pale aleDuvel",
        price:12.00,
        imageUrl: "https://images.squarespace-cdn.com/content/v1/51a7cbc9e4b0eb83140fc3ac/1585272973438-DGFPTLFTYJCYCJ9ZOIDD/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/duvel.jpg"},
        {id: 22,
          name:"Bud Light",
        price: 4.00,
        imageUrl: "https://cdn.minibardelivery.com/products/322504/product/Bud_Light_Cold.jpg"},
        {id: 23,
          name: "Brooklyn Lager",
        price: 6.00,
        imageUrl:"https://i1.wp.com/drinkhacker.com/wp-content/uploads/2019/05/lager-525x465.png?resize=525%2C465&ssl=1"},
        {id: 24,
          name:"Negra Modelo",
        price: 6.00,
        imageUrl:"https://www.handfamilycompanies.com/filebin/images/product_images/NULL-Negra_Modelo.jpg"},
        {id: 25,
          name: "Presidente",
        price: 6.00,
        imageUrl:"https://dydza6t6xitx6.cloudfront.net/ci-presidente-light-34dfa8342d71d19b.jpeg"},
        {id: 26,
          name:"Guinness",
        price: 6.00,
        imageUrl:"https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/256/images/283/guinessdraught11p2oz__98782.1351005565.1280.1280.jpg?c=2"},
        {id: 27,
          name:"Estrella Damm",
        price: 7.00,
        imageUrl: "https://tiendadelosvinos.com/wp-content/uploads/2018/07/vinos-colombia-2-07.jpg"},
        {id: 28,
          name: "Crisppin",
        price: 7.00,
        imageUrl:"https://mullerbev.com/wp-content/uploads/2018/12/original.jpg"},
        {id: 29,
          name: "Extra Dry Clausthaler",
        price: 5.00,
        imageUrl: "https://www.germanfoods.shop/media/image/product/1532/lg/clausthaler-non-alcoholic.jpg"}
    ]
const Canned = [
        {id: 30,
          name: "Budweiser",
        price: 3.00,
        imageUrl:"https://sc02.alicdn.com/kf/Ubc4c00800e274c1ab4a8f55df5e84784c.jpg"},
        {id: 31,
          name: "Tecate",
        price: 4.00,
        imageUrl:"https://beerstore.com.au/wp-content/uploads/2015/10/tecate-beer-online-1368424854.jpg"}
]
const Wine = [
        {id: 32,
          name: "Eckeraustrian, gruner veltliner",
        type: "white",
        price: 7.00,
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/ci-ecker-gruner-veltliner-a9b822d438d5141f.jpeg"},
        {id: 33,
          name: "Bercunlander Rot Austrian zweicelt",
        type: "red",
        price: 7.00,
        imageUrl: "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h92/h14/12468344782878.png"}
]

export { Cocktails, ShotCombos, Draft, Bottle, Canned, Wine  }