import fs from "fs";
import { join } from "path";
import { IBeer } from "@/features/beers";

export function getRandomBeer(): IBeer {
  const beersJson = fs.readFileSync(join(__dirname, "/beers.json"), "utf-8");
  const beers = JSON.parse(beersJson) as IBeer[];
  return beers[Math.floor(Math.random() * beers.length)];
}
