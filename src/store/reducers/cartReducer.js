const INITIAL_STATE = {
  products: [
    {
      id: 0,
      name: "나이키 에어포스",
      price: 129000,
      priceS: "129,000",
      url: "https://photo.akmall.com/image2/goods/95/99/81/67/95998167_M_1500.jpg",
    },
    {
      id: 1,
      name: "나이키 범고래",
      price: 159000,
      priceS: "159,000",

      url: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F03%2FNike-dunk-low-black-official-release-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
    },
    {
      id: 2,
      name: "나이키 킬샷",
      price: 109000,
      priceS: "109,000",

      url: "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DO2082-133/b8f6ecda-0439-4fde-bd4b-18846aa4d7ef_primary.jpg?gallery",
    },
    {
      id: 3,
      name: "나이키 시티코트",
      price: 99000,
      priceS: "99,000",

      url: "https://ae01.alicdn.com/kf/H9041677fea5d41bf94561e78f76912a6i/M2K-TEKNO-AV4789-100.jpg_Q90.jpg_.webp",
    },
  ],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = state.products.find((prod) => prod.id === action.payload);
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case "DELETE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "ADJUST_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
export default cartReducer;
