export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <img
        className="object-cover w-screen h-screen"
        src="https://images.pexels.com/photos/5531894/pexels-photo-5531894.jpeg?cs=srgb&dl=pexels-cottonbro-5531894.jpg&fm=jpg&w=1920&h=1280"
        alt="People having a beer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 mix-blend-multiply" />
    </div>
  );
}
