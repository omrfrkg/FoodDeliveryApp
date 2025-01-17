export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../../assets/images/pizzaIcon.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../../assets/images/pizzaIcon.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../../assets/images/pizzaIcon.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../../assets/images/pizzaIcon.png"),
  },
  {
    id: 5,
    name: "Noodles",
    image: require("../../assets/images/pizzaIcon.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../../assets/images/pizzaIcon.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: require("../../assets/images/pizza.jpg"),
      description: "Hot and spicy pizzas",
      lat: 41.326708,
      lng: 36.30764,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizzaDish.jpeg"),
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizzaDish.jpeg"),
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizzaDish.jpeg"),
        },
      ],
    },
    {
      id: 2,
      name: "Papa Johns",
      image: require("../../assets/images/pizza.jpg"),
      description: "Hot and spicy pizzas",
      lat: 41.326708,
      lng: 36.30764,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizza.jpg"),
        },
        {
          id: 2,
          name: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizza.jpg"),
        },
        {
          id: 3,
          name: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizza.jpg"),
        },
      ],
    },
    {
      id: 3,
      name: "Papa Johns",
      image: require("../../assets/images/pizza.jpg"),
      description: "Hot and spicy pizzas",
      lat: 41.326708,
      lng: 36.30764,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizza.jpg"),
        },
        {
          id: 2,
          name: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizza.jpg"),
        },
        {
          id: 3,
          name: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizza.jpg"),
        },
      ],
    },
  ],
};
