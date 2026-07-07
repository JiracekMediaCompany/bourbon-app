export function Bourbon() {
  const bourbonData = [
    {
      id: 1,
      name: 'Kentucky Crown',
      distiller: 'Maker\'s Mark',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'Tennessee Gold',
      distiller: 'Jack Daniel\'s',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      name: 'Rye Delight',
      distiller: 'Wild Turkey',
      price: 54.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Smooth Oak',
      distiller: 'Woodford Reserve',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 5,
      name: 'Premium Select',
      distiller: 'Buffalo Trace',
      price: 44.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      name: 'Estate Reserve',
      distiller: 'Four Roses',
      price: 64.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 7,
      name: 'Amber Aged',
      distiller: 'Elijah Craig',
      price: 51.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
    {
      id: 8,
      name: 'Classic Pour',
      distiller: 'Evan Williams',
      price: 36.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7c80fc2d865f?w=400&h=500&fit=crop',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Bourbon Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bourbonData.map((bourbon) => (
          <div
            key={bourbon.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Name */}
            <div className="px-4 pt-4">
              <h3 className="text-lg font-bold text-gray-800">{bourbon.name}</h3>
            </div>

            {/* Distiller */}
            <div className="px-4 text-sm text-gray-600">
              <p>{bourbon.distiller}</p>
            </div>

            {/* Image */}
            <div className="px-4 py-4">
              <img
                src={bourbon.image}
                alt={bourbon.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Price */}
            <div className="px-4 pb-4">
              <p className="text-2xl font-bold text-amber-600">${bourbon.price.toFixed(2)}</p>
              <button className="w-full mt-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
