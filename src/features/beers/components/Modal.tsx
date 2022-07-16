import { IBeer } from "@/features/beers";

interface ModalProps {
  beer: IBeer;
}

export function Modal({ beer }: ModalProps) {
  return (
    <div className="flex flex-col bg-blue-50 rounded-lg border-4 border-blue-400 shadow-xl outline-none focus:outline-none">
      <div className="flex justify-between items-start p-5 rounded-t border-b border-solid border-slate-200">
        <h3 className="mx-auto text-3xl font-semibold">{beer.name}</h3>
      </div>
      <div className="relative flex-auto py-2 px-6 text-slate-700">
        <p className="py-1 text-xl font-semibold">
          First Brewed: {beer.first_brewed}
        </p>
        <div className="py-2">
          <p className="text-xl font-semibold">Fermentation Temperature:</p>
          <p className="overflow-hidden mb-4 text-lg">
            {beer.method.fermentation.temp.value}
            {" degrees "}
            {beer.method.fermentation.temp.unit}
          </p>
        </div>
        <p className="text-xl font-semibold">Food Pairings:</p>
        <p className="text-lg">{beer.food_pairing.join(", ")}</p>
      </div>
    </div>
  );
}
