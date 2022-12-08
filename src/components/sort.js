export const sorting = (array, way) => {
  if (way === 'asc') return array.sort()
  if (way === 'desc') return array.reverse()
  return 'Error'
}