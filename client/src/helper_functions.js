const updateLatestMessage = (contacts, chatId, data) => {
  let items = [...contacts];

  console.log(chatId);
  console.log(items);
  let item = items.find((c) => c._id === chatId);

  const itemIndex = items.indexOf(item);
  item.latestMessage = data;

  items[itemIndex] = item;
  return items;
};

export { updateLatestMessage };
