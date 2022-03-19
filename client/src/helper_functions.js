const updateLatestMessage = (contacts, chatId, data) => {
  let items = [...contacts];

  let item = items.find((c) => c._id === chatId);

  const itemIndex = items.indexOf(item);
  item.latestMessage = data;

  items[itemIndex] = item;
  return items;
};

export { updateLatestMessage };
