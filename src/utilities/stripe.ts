const isProduction = import.meta.env.MODE === "production";

export const PRICES: Record<string, string> = {
  donation: isProduction
    ? "price_1QqeGfHxPgMNNpLsiEYDcv9f"
    : "price_1Qqdt7HxPgMNNpLsPebfGNsF",
  etosha: isProduction
    ? "price_1QqeGKHxPgMNNpLssO7RcAPt"
    : "price_1QqdqxHxPgMNNpLssUYUUgHJ",
  drinks: isProduction
    ? "price_1QqeejHxPgMNNpLsXiQe0n54"
    : "price_1QqeeRHxPgMNNpLsTvIOLT3t",
  photoAlbum: isProduction
    ? "price_1Qqen5HxPgMNNpLsoAiouotJ"
    : "price_1QqemyHxPgMNNpLsty6m4H4k",
  bingo: isProduction
    ? "price_1QqetGHxPgMNNpLsCq1KHCnn"
    : "price_1Qqet1HxPgMNNpLs4Lh71Uv5",
  wineTasting: isProduction
    ? "price_1Qqez5HxPgMNNpLsXfV4JTo5"
    : "price_1QqeyzHxPgMNNpLs2p1Ew682",
  fourXFour: isProduction
    ? "price_1Qqf5OHxPgMNNpLsU0ZzvqJg"
    : "price_1Qqf5HHxPgMNNpLsS5pEoGE1",
  sossusvlei: isProduction
    ? "price_1Qqf7JHxPgMNNpLsyFGKk8bD"
    : "price_1Qqf7DHxPgMNNpLsPy8hS25M",
  kebi: isProduction
    ? "price_1Qqf9XHxPgMNNpLshZvI1vZt"
    : "price_1Qqf9JHxPgMNNpLsHMQISVYf",
  weinburg: isProduction
    ? "price_1R2rLdHxPgMNNpLsAlDUAg98"
    : "price_1R2rLBHxPgMNNpLsGY1c9zH6",
};

export const PRODUCTS: Record<string, string> = {
  donation: isProduction ? "prod_Rk8X35IP6pduSH" : "prod_Rk89K2hgnLT7Dp",
  etosha: isProduction ? "prod_Rk8XxYZ11cnEya" : "prod_Rk871ZAypFFQ4t",
  drinks: isProduction ? "prod_Rk8wT4Bzq5fLg8" : "prod_Rk8wkIoH7PXYiv",
  photoAlbum: isProduction ? "prod_Rk95Q5XhJ71oHs" : "prod_Rk95ETb8jxQMJP",
  bingo: isProduction ? "prod_Rk9BVQRyYn3MpV" : "prod_Rk9BKYTItOg0tG",
  wineTasting: isProduction ? "prod_Rk9HJ2F6RgzguC" : "prod_Rk9H0AdNKUIvFn",
  fourXFour: isProduction ? "prod_Rk9OfHgYfOdRz2" : "prod_Rk9O2475H7EsOb",
  sossusvlei: isProduction ? "prod_Rk9QAFtSCYHRvE" : "prod_Rk9Qozde12nyFW",
  kebi: isProduction ? "prod_Rk9SjgMODsL93m" : "prod_Rk9Sf7iR8dt3o6",
  weinburg: isProduction ? "prod_RwkroNQexue9MR" : "prod_RwkqAtZyzlsi1F",
};
