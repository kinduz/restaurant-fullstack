type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Сицилийская пицца",
    desc: "Ммм, пицца прямиком из родины Вито Скалетто. Сицилийская пицца (сфинчионе) – это сытное блюдо на воздушном тесте с большим количеством сыра и томатного соуса. Пицца обрела большую популярность не только на родине в Палермо, но и во всем мире. Сицилийская пицца получается неимоверно сочной и аппетитной.",
    img: "/temporary/p1.png",
    price: 2490,
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 2,
    title: "Бургер 'Бекон Бати'",
    desc: "Жирно, сочно, калорийно, что еще надо для вечера пятницы? (Пива в наличии пока нет, работаем над этим)",
    img: "/temporary/p2.png",
    price: 799,
    options: [
      {
        title: "Маленький",
        additionalPrice: 0,
      },
      {
        title: "Средний",
        additionalPrice: 200,
      },
      {
        title: "Большой",
        additionalPrice: 400,
      },
    ],
  },
  {
    id: 3,
    title: "Белла Наполи",
    desc: "Классическое итальянское удовольствие: тонкое хрустящее тесто, пикантный томатный соус, свежая моцарелла, ароматные травы, дополненные салатом, помидорами и ложечкой пикантного майонеза.",
    img: "/temporary/p3.png",
    price: 2490,
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 4,
    title: "Острая Аррабиата",
    desc: "Разожгите свои вкусовые рецепторы с этой острой пастой: пенне в остром томатном соусе с чесноком, хлопьями красного перца и свежим базиликом для идеального ужина.",
    img: "/temporary/p4.png",
    price: 2690,
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 5,
    title: "Джалапеньо Фиеста",
    desc: "Добавьте огня своим вкусовым рецепторам! Этот бургер включает сочную котлету из говядины, острый джалапеньо, сыр пеппер-джек, пикантный соус чипотле майо и классические свежие овощи на поджаренной булочке.",
    img: "/temporary/p5.png",
    price: 2990,
    options: [
      {
        title: "Маленький",
        additionalPrice: 0,
      },
      {
        title: "Средний",
        additionalPrice: 400,
      },
      {
        title: "Большой",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 6,
    title: "Магия Маргариты",
    desc: "Классика с изюминкой: тонкое тесто с сочными помидорами, свежим базиликом, нежной моцареллой, каплей оливкового масла, свежей рукколой и бальзамической глазурью.",
    img: "/temporary/p6.png",
    price: 2490,
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 7,
    title: "Лингвини с чесноком и пармезаном",
    desc: "Для любителей чеснока: лингвини в нежном сливочном соусе с пармезаном, дополненные чесноком, свежей петрушкой, болгарским перцем и черри-помидорами.",
    img: "/temporary/p7.png",
    price: 2890,
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 8,
    title: "Средиземноморское удовольствие",
    desc: "Отправьтесь в кулинарное путешествие с этим блюдом, включающим пикантную фету, оливки Каламата, вяленые помидоры и щепотку орегано.",
    img: "/temporary/p8.png",
    price: 3290,
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 9,
    title: "Гавайский Терияки",
    desc: "Погрузитесь в атмосферу тропиков: сочная котлета из говядины с глазурью из соуса терияки, поджаренный ананас, хрустящий бекон, свежий салат и классические добавки на поджаренной булочке.",
    img: "/temporary/p9.png",
    price: 2990,
    options: [
      {
        title: "Маленький",
        additionalPrice: 0,
      },
      {
        title: "Средний",
        additionalPrice: 400,
      },
      {
        title: "Большой",
        additionalPrice: 600,
      },
    ],
  },
];




export const pizzas: Products = [
  {
    id: 1,
    title: "Сицилийская",
    desc: "Подарите своим вкусовым рецепторам огненную комбинацию острого пепперони, халапеньо, измельчённых хлопьев красного перца и расплавленного сыра моцарелла, добавляющего пикантность каждому кусочку.",
    img: "/temporary/p1.png",
    price: 2490, // 24.9 долларов * 100
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400, // 4 долларов * 100
      },
      {
        title: "Большая",
        additionalPrice: 600, // 6 долларов * 100
      },
    ],
  },
  {
    id: 2,
    title: "Средиземноморское наслаждение",
    desc: "Отправьтесь в кулинарное путешествие с этим средиземноморским шедевром, который включает в себя пикантный фета, оливки каламата, вяленые помидоры и посыпку из орегано.",
    img: "/temporary/p8.png",
    price: 3290, // 32.9 долларов * 100
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 3,
    title: "Белла Наполи",
    desc: "Классический итальянский рецепт с тонкой хрустящей корочкой, насыщенным томатным соусом, свежей моцареллой и смесью ароматных трав, дополненных листьями салата, помидорами и обликом пикантного майонеза.",
    img: "/temporary/p3.png",
    price: 2690, // 26.9 долларов * 100
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 4,
    title: "Песто Примавера",
    desc: "Классический итальянский рецепт с тонкой хрустящей корочкой, насыщенным томатным соусом, свежей моцареллой и смесью ароматных трав, дополненных листьями салата, помидорами и обликом пикантного майонеза.",
    img: "/temporary/p10.png",
    price: 2890, // 28.9 долларов * 100
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 5,
    title: "Вегетарианская Суприм",
    desc: "Классический итальянский рецепт с тонкой хрустящей корочкой, насыщенным томатным соусом, свежей моцареллой и смесью ароматных трав, дополненных листьями салата, помидорами и обликом пикантного майонеза.",
    img: "/temporary/p11.png",
    price: 2490, // 24.9 долларов * 100
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 6,
    title: "Четыре сыра",
    desc: "Погрузитесь в сырное удовольствие с расплавленным сочетанием моцареллы, чеддера, проволоне и пармезана, создающим насыщенный и изысканный вкус.",
    img: "/temporary/p12.png",
    price: 2290, // 22.9 долларов * 100
    options: [
      {
        title: "Маленькая",
        additionalPrice: 0,
      },
      {
        title: "Средняя",
        additionalPrice: 400,
      },
      {
        title: "Большая",
        additionalPrice: 600,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Сицилийская",
  desc: "Подарите своим вкусовым рецепторам огненную комбинацию острого пепперони, халапеньо, измельчённых хлопьев красного перца и расплавленного сыра моцарелла, добавляющего пикантность каждому кусочку.",
  img: "/temporary/p1.png",
  price: 2490, // 24.9 долларов * 100
  options: [
    {
      title: "Маленькая",
      additionalPrice: 0,
    },
    {
      title: "Средняя",
      additionalPrice: 400,
    },
    {
      title: "Большая",
      additionalPrice: 600,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
  bgColor: string,
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Итальянская паста",
    desc: "Насладитесь вкусом совершенства с нашим изысканным меню итальянской пасты ручной работы.",
    img: "/temporary/m1.png",
    color: "white",
    bgColor: "black",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Сочные бургеры",
    desc: "Бургер-мания: сочные котлеты, насыщенные вкусы и изысканные начинки.",
    img: "/temporary/m2.png",
    color: "black",
    bgColor: "red-500",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Сырные пиццы",
    desc: "Пицца-парадиз: неотразимые кусочки, аппетитные начинки и сырное совершенство.",
    img: "/temporary/m3.png",
    color: "white",
    bgColor: "black",
  },
];
