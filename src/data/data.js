const products = [
  {
    id: "Prod1",
    name: "2k24",
    description: "WWE 2K24 cuenta con leyendas de la WWE como Stone Cold Steve Austin, Undertaker y André el Gigante, con Superstars actuales de la WWE como The American Nightmare Cody Rhodes, John Cena, Rhea Ripley y Roman Reigns, con entradas y movimientos realzados por gráficos ultrarrealistas.",
    price: 450,
    stock: 5,
    category: "PS5",
    image: "/image/2k24.jpg"
  },
  {
    id: "Prod2",
    name: "Dragon Dogma II",
    description: "Embárcate en tu grandiosa aventura, Ascendido. Escoge la vocación de tu Ascendido y crea tu peón principal de confianza antes de partir hacia dos reinos distintos llenos de misterios, monstruos y magia. Derrota enemigos gigantescos usando la astucia y una buena estrategia - la misma tierra que te rodea podría ser un arma a la espera.",
    price: 210,
    stock: 3,
    category: "PS5",
    image: "/image/dragondogma.jpg"
  },
  {
    id: "Prod3",
    name: "Final Fantasy VII Rebirth",
    description: "Los icónicos héroes Cloud, Barret, Tifa, Aerith y Red XIII han escapado de la distópica ciudad de Midgar y ahora están persiguiendo a Sefirot, el vengativo espadachín del pasado de Cloud que se creía muerto.",
    price: 250,
    stock: 10,
    category: "PS5",
    image: "/image/finalfantasy.jpg"
  },
  {
    id: "Prod4",
    name: "God Of War",
    description: "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora en los dominios de las deidades y los monstruos nórdicos.",
    price: 190,
    stock: 2,
    category:"PS4",
    image: "/image/godofwar.jpg"
  },
  {
    id: "Prod5",
    name: "Grand Theft Auto V",
    description: "Los Santos - una extensa soleada metrópolis llena de gurús de la autoayuda, estrellitas y celebridades de descoloramiento, una vez la envidia del mundo occidental, ahora luchan por mantenerse a flote en una época de incertidumbre económica y barata reality TV.",
    price: 250,
    stock: 10,
    category: "PS4",
    image: "/image/grandtheft.jpg"
  },
  {
    id: "Prod6",
    name: "Horizon: Zero Dawn Complete Edition",
    description: "Horizon: Zero Dawn Complete Edition.",
    price: 250,
    stock: 10,
    category: "PS4",
    image: "/image/horizon.jpg"
  },
  {
    id: "Prod7",
    name: "Mario vs. Donkey Kong",
    description: "os juguetes vuelven a la carga en Mario vs. Donkey Kong. Resuelve puzles y pon a prueba tu agilidad para las plataformas en tu afán por recuperar los Minimarios robados. Esta versión mejorada del juego original de Game Boy Advance cuenta con gráficos y niveles, y maneras inéditas de jugar.",
    price: 250,
    stock: 10,
    category: "SWITCH",
    image: "/image/mariovs.jpg"
  },
  {
    id: "Prod8",
    name: "Minecraft",
    description: "Minecraft es un juego de colocación de bloques y aventuras. Explora mundos generados aleatoriamente y construye cosas increíbles, desde el más humilde de los hogares hasta el más espléndido castillo.",
    price: 250,
    stock: 10,
    category: "SWITCH",
    image: "/image/minecraft.jpg"
  },
  {
    id: "Prod9",
    name: "Ascensión del Ronin, La",
    description: "Embárcate en un viaje épico por el Japón del siglo XIX, devastado por la guerra, en este RPG de acción y mundo abierto centrado en el combate de Team Ninja, el veterano estudio responsable de Nioh y Ninja Gaiden.",
    price: 250,
    stock: 10,
    category: "PS5",
    image: "/image/ronin.jpg"
  },
  {
    id: "Prod10",
    name: "spiderman",
    description: "Una experiencia de Spider-Man cortesía de Marvel e Insomniac Games.",
    price: 250,
    stock: 10,
    category: "PS4",
    image: "/image/spiderman.jpg"
  },
  {
    id: "Prod11",
    name: "Mario Kart 8 Deluxe",
    description: "Nintendo Switch te permite jugar a Mario Kart cuando, donde y como quieras, tanto con la familia en la pantalla de la tele, como en el parque o en casa de un amigo.",
    price: 250,
    stock: 10,
    category: "SWITCH",
    image: "/image/supermario.jpg"
  },
  {
    id: "Prod12",
    name: "Super Smash Bros. Ultimate",
    description: "Luchadores, como los inkling de la serie Splatoon, Ridley de la serie Metroid, Simon Belmont de Castlevania y Canela de Animal Crossing, hacen su debut en Super Smash Bros. junto a todos los personajes de las entregas anteriores. ¡Todos!",
    price: 250,
    stock: 10,
    category: "SWITCH",
    image: "/image/supersmash.jpg"
  }
]

//obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(() => {
      resolve(products)
    }, 2000);
  });
};

export default getProducts