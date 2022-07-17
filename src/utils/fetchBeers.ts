import { BASE_URL, PER_PAGE } from "@/config/pagination";

export const fetchBeers = (fetchPage = 1, search = "") => {
  const paginatedUrl = `${BASE_URL}?page=${fetchPage}&per_page=${PER_PAGE}`;
  let reqUrl = paginatedUrl;
  if (search) {
    reqUrl = `${reqUrl}&food=${search.replace(" ", "_")}`;
  }
  return fetch(reqUrl).then((res) => res.json());
};
