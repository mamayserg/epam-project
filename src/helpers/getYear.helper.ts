export const  getYearFromDate = (date: string) => {
  const year = new Date(date).getFullYear()
  return year
}