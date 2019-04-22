export const sortBy = (_array, _item) =>
  _array.sort((a, b) => {
    if (a[_item] > b[_item]) return 1;
    else if (a[_item] < b[_item]) return -1;
    else return 0;
  });
