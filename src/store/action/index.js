export const addCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteCart = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};

export const adjustQty = (itemss, value) => {
  return {
    type: "ADJUST_QTY",
    payload: {
      id: itemss,
      qty: value,
    },
  };
};

export const currentItem = (itemsss) => {
  return {
    type: "CURRENT_ITEM",
    payload: itemsss,
  };
};
