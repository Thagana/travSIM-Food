import { action } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

export default {
  /** Application State  */
  isDark: false,
  isLoggedin: false,
  User: {
    firstNmae: "",
    lastName: "",
    email: "",
    password: "",
  },
  menu: [
    {
      source: require("../assets/cuz_1.jpg"),
      dimensions: { width: 1080, height: 1820 },
      id: 1,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4,
      price: 30,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
      image: "https://picsum.photos/400",
    },
    {
      source: require("../assets/cuz_2.jpg"),
      dimensions: { width: 1080, height: 1970 },
      id: 2,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 3.5,
      price: 10,
      image: "https://picsum.photos/400",
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      source: require("../assets/cuz_3.jpg"),
      dimensions: { width: 1080, height: 1620 },
      id: 3,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4.5,
      price: 40,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      source: require("../assets/cuz_4.jpg"),
      dimensions: { width: 1080, height: 1820 },
      id: 4,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 5,
      price: 100,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      url: "https://picsum.photos/900",
      id: 5,
      dimensions: { width: 1080, height: 1820 },
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4.5,
      price: 30,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      URL: "https://picsum.photos/800",
      dimensions: { width: 1080, height: 1820 },
      id: 6,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4.5,
      price: 30,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      URL: "https://picsum.photos/700",
      dimensions: { width: 1080, height: 1820 },
      id: 7,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4.5,
      price: 30,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      uri: "https://picsum.photos/400",
      dimensions: { width: 1080, height: 1820 },
      id: 8,
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4.5,
      price: 30,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
    {
      uri: "https://picsum.photos/400",
      id: 9,
      dimensions: { width: 1080, height: 1820 },
      product_id: uuidv4(),
      name: "The Fruit Cocktail Dustra",
      description:
        "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
      rating: 4.5,
      price: 30,
      ingredients: ["Banna", "Apple", "Grapes", "Maize"],
    },
  ],
  toggle: action((state) => {
    state.isDark = !state.isDark;
  }),
  login: action((state) => {
    state.isLoggedin = true;
  }),
  setUser: action((state, payload) => {
    state.User = payload;
  }),
};
