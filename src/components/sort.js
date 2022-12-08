export const simpleSorting = (array, way) => {
  if (way !== 'asc' && way !== 'desc') return 'Error'
  if (way === 'asc') array.sort()
  if (way === 'desc') array.reverse()
  return array
}

export const objectSorting = (array, way) => {
  if (way !== 'asc' && way !== 'desc') return 'Error'
  if (way === 'asc') {
    array.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    })
  }
  if (way === 'desc') {
    array.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  }
  return array
}