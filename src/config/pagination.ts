export const BASE_URL = "https://api.punkapi.com/v2/beers";
export const PER_PAGE = 6;
export const MAX_BEERS = 100;
export const MAX_PAGE = Math.ceil(MAX_BEERS / PER_PAGE);
export const isValidPage = (pageNum: number) =>
  pageNum >= 1 && pageNum < MAX_PAGE + 1;
