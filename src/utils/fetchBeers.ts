import { BASE_URL, PER_PAGE } from "@/config/api";

export const fetchBeers = (fetchPage = 1) =>
  fetch(`${BASE_URL}?page=${fetchPage}&per_page=${PER_PAGE}`).then((res) =>
    res.json()
  );
