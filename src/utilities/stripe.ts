const isProduction = import.meta.env.MODE === "production";

export const CARD_FEE = {
  name: "donation",
  product_id: isProduction ? "prod_RxhBmh5ToEcATc" : "prod_Rxh6mJsbs3uAKc",
  price_id: isProduction
    ? "price_1R3lmfHxPgMNNpLsAidGtoZH"
    : "price_1R3liEHxPgMNNpLsSadvFfBj",
};

export const DONATION = {
  name: "donation",
  product_id: isProduction ? "prod_Rk8X35IP6pduSH" : "prod_Rk89K2hgnLT7Dp",
  price_id: isProduction
    ? "price_1QqeGfHxPgMNNpLsiEYDcv9f"
    : "price_1Qqdt7HxPgMNNpLsPebfGNsF",
};

export const PRODUCTS: Record<
  string,
  {
    name: string;
    product_id: string;
    price_id: string;
    count: number;
    price: number;
    image: string;
    title: string;
    description1: string;
    description2: string;
  }
> = {
  etosha: {
    name: "etosha",
    product_id: isProduction ? "prod_Rk8XxYZ11cnEya" : "prod_Rk871ZAypFFQ4t",
    price_id: isProduction
      ? "price_1QqeGKHxPgMNNpLssO7RcAPt"
      : "price_1QqdqxHxPgMNNpLssUYUUgHJ",
    count: 10,
    price: 100,
    title: "1 day safari in etosha national park",
    description1:
      "An unforgettable safari experience in Namibia’s most famous national park.",
    description2:
      "This gift offers the chance to spot incredible wildlife, from elephants and lions to rhinos and giraffes, while exploring Etosha’s vast landscapes.",
    image: "etosha_sb6xdv",
  },
  drinks: {
    name: "drinks",
    product_id: isProduction ? "prod_Rk8wT4Bzq5fLg8" : "prod_Rk8wkIoH7PXYiv",
    price_id: isProduction
      ? "price_1R3cbqHxPgMNNpLs25rXq7CL"
      : "price_1R3cQbHxPgMNNpLs3LBCl3hd",
    count: 4,
    price: 25,
    title: "honeymoon departure drinks",
    description1: "A perfect way to celebrate the start of a honeymoon.",
    description2:
      "Whether enjoyed at the airport lounge or at the first destination, this gift provides a toast to new adventures together.",
    image: "champagne_snftuo",
  },
  photoAlbum: {
    name: "photoAlbum",
    product_id: isProduction ? "prod_Rk95Q5XhJ71oHs" : "prod_Rk95ETb8jxQMJP",
    price_id: isProduction
      ? "price_1Qqen5HxPgMNNpLsoAiouotJ"
      : "price_1QqemyHxPgMNNpLsty6m4H4k",
    count: 1,
    price: 250,
    title: "custom embroidered wedding photo album",
    description1:
      "A beautiful hand-crafted personal photo album designed to preserve wedding memories for years to come.",
    description2:
      "Featuring custom embroidery, this keepsake is perfect for holding treasured photographs from the big day.",
    image: "wedding_photo_album_hehtpa",
  },
  bingo: {
    name: "bingo",
    product_id: isProduction ? "prod_Rk9BVQRyYn3MpV" : "prod_Rk9BKYTItOg0tG",
    price_id: isProduction
      ? "price_1QqetGHxPgMNNpLsCq1KHCnn"
      : "price_1Qqet1HxPgMNNpLs4Lh71Uv5",
    count: 1,
    price: 90,
    title: "mr bingo don’t forget to have fun art",
    description1:
      "Mr Bingo is a London-based artist known for his irreverent & dark humour.",
    description2:
      "We are big fans of his work & have some pieces already - this one feels like a fitting advice-inspired piece to add to the collection.",
    image: "have_fun_plf5lc",
  },
  wineTasting: {
    name: "wineTasting",
    product_id: isProduction ? "prod_Rk9HJ2F6RgzguC" : "prod_Rk9H0AdNKUIvFn",
    price_id: isProduction
      ? "price_1Qqez5HxPgMNNpLsXfV4JTo5"
      : "price_1QqeyzHxPgMNNpLs2p1Ew682",
    count: 5,
    price: 75,
    title: "wine tasting tour in the omaruru region",
    description1: "An opportunity to discover Namibia’s growing wine scene.",
    description2:
      "This experience includes tastings of locally produced wines, paired with stunning vineyard views and warm hospitality.",
    image: "wine_tasting_zbb7ok",
  },
  fourXFour: {
    name: "fourXFour",
    product_id: isProduction ? "prod_Rk9OfHgYfOdRz2" : "prod_Rk9O2475H7EsOb",
    price_id: isProduction
      ? "price_1Qqf5OHxPgMNNpLsU0ZzvqJg"
      : "price_1Qqf5HHxPgMNNpLsS5pEoGE1",
    count: 2,
    price: 100,
    title: "sandwich harbour 4x4 tour",
    description1:
      "A thrilling off-road adventure through Namibia’s iconic coastal dunes.",
    description2:
      "This experience includes breathtaking scenery where the desert meets the ocean, with opportunities to spot wildlife along the way.",
    image: "145_fmcd5b",
  },
  sossusvlei: {
    name: "sossusvlei",
    product_id: isProduction ? "prod_Rk9QAFtSCYHRvE" : "prod_Rk9Qozde12nyFW",
    price_id: isProduction
      ? "price_1Qqf7JHxPgMNNpLsyFGKk8bD"
      : "price_1Qqf7DHxPgMNNpLsPy8hS25M",
    count: 6,
    price: 25,
    title: "sossusvlei sundowners",
    description1:
      "A breathtaking end to the day in one of Namibia’s most iconic landscapes.",
    description2:
      "This experience includes a scenic drive to the towering Sossusvlei dunes, where drinks are enjoyed as the sun sets, painting the desert in stunning shades of red and gold.",
    image: "sundowners_u8yiin",
  },
  kebi: {
    name: "kebi",
    product_id: isProduction ? "prod_Rk9SjgMODsL93m" : "prod_Rk9Sf7iR8dt3o6",
    price_id: isProduction
      ? "price_1Qqf9XHxPgMNNpLshZvI1vZt"
      : "price_1Qqf9JHxPgMNNpLsHMQISVYf",
    count: 4,
    price: 100,
    title: "1 night stay desert lodge",
    description1: "A peaceful retreat in the heart of Namibia’s wilderness.",
    description2:
      "This overnight stay at a Desert Lodge offers a blend of comfort and nature, with cozy chalets, stunning desert views, and warm hospitality—perfect for a relaxing escape under the stars.",
    image: "kebi_lodge_tkwhm0",
  },
  weinburg: {
    name: "weinburg",
    product_id: isProduction ? "prod_RwkroNQexue9MR" : "prod_RwkqAtZyzlsi1F",
    price_id: isProduction
      ? "price_1R2rLdHxPgMNNpLsAlDUAg98"
      : "price_1R2rLBHxPgMNNpLsGY1c9zH6",
    count: 4,
    price: 75,
    title: "fine dining at am weinburg restaurant",
    description1:
      "A sophisticated dining experience at one of Namibia’s most elegant restaurants.",
    description2:
      "Set within a beautifully restored wine estate, Am Weinberg offers expertly crafted dishes, fine wines, and a refined atmosphere for an indulgent culinary treat.",
    image: "weinburg_penged",
  },
  habitas: {
    name: "habitas",
    product_id: isProduction ? "prod_RxBbED9jnWNbu0" : "prod_RxBZpT6p0h5lxZ",
    price_id: isProduction
      ? "price_1R3HEUHxPgMNNpLsOtpHD5jI"
      : "price_1R3HCDHxPgMNNpLs7cx9WHRH",
    count: 4,
    price: 150,
    title: "wellness escape at our habitas namibia",
    description1:
      "A rejuvenating spa experience set against the stunning Namibian wilderness.",
    description2:
      "This gift offers the chance to unwind with a soothing treatment, combining natural ingredients and expert care for the ultimate relaxation.",
    image: "habitas_xjauun",
  },
  sandboarding: {
    name: "sandboarding",
    product_id: isProduction ? "prod_RxV5rM8QC20qVE" : "prod_RxV5vNOnLwFDMS",
    price_id: isProduction
      ? "price_1R3a5IHxPgMNNpLsu2gW9zUT"
      : "price_1R3a5CHxPgMNNpLsY8MoHQi1",
    count: 4,
    price: 50,
    title: "sandboarding in swakopmund",
    description1:
      "An adrenaline-filled adventure down Namibia’s iconic desert dunes.",
    description2:
      "Whether standing up like a snowboarder or lying down for maximum speed, this thrilling experience in Swakopmund promises excitement, stunning views, and plenty of fun in the sand.",
    image: "sandboarding_upc2fr",
  },
  stargazing: {
    name: "stargazing",
    product_id: isProduction ? "prod_RxV7Fh5Ar9IdGm" : "prod_RxV6KGEnXM1O47",
    price_id: isProduction
      ? "price_1R3a6uHxPgMNNpLsMXeusSGl"
      : "price_1R3a6dHxPgMNNpLsl19EBc1A",
    count: 4,
    price: 50,
    title: "stargazing in spitzkoppe",
    description1: "A magical night under Namibia’s clearest skies.",
    description2:
      "This experience offers breathtaking views of the Milky Way above the dramatic rock formations of Spitzkoppe, creating the perfect setting for an unforgettable evening of stargazing.",
    image: "stargazing_kqkumo",
  },
};
