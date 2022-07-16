import fs from "fs";
import { join } from "path";
import { Beer } from "@/features/beers";

export function getRandomBeer(): Beer {
  const beersJson = fs.readFileSync(join(__dirname, "/beers.json"), "utf-8");
  const beers = JSON.parse(beersJson) as Beer[];
  return beers[Math.floor(Math.random() * beers.length)];
}
