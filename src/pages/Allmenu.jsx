import React, { useState } from 'react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Appetizers', 'Main Course', 'Pasta & Risotto', 'Seafood', 'Desserts', 'Beverages'];
  
  const menuItems = [
    {
      id: 1,
      name: 'Bruschetta',
      price: 8.95,
      description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomatoes, and basil.',
      image: '/bruschetta.jpg',
      category: 'Appetizers',
      tags: ['Italian', 'Starter'],
      dietary: ['vegetarian'],
      popular: false
    },
    {
      id: 2,
      name: 'Calamari Fritti',
      price: 12.95,
      description: 'Tender squid lightly coated and fried to perfection, served with marinara sauce.',
      image: '/calamari.jpg',
      category: 'Appetizers',
      tags: ['Seafood', 'Fried'],
      dietary: [],
      popular: true
    },
    {
      id: 3,
      name: 'Butternut Squash Soup',
      price: 7.50,
      description: 'Creamy soup made with roasted butternut squash, garnished with crème fraîche and pumpkin seeds.',
      image: '/butternut.jpg',
      category: 'Appetizers',
      tags: ['Soup', 'Seasonal'],
      dietary: ['vegetarian', 'gluten-free'],
      popular: false
    },
    {
      id: 4,
      name: 'Grilled Ribeye Steak',
      price: 32.95,
      description: '12oz prime ribeye steak grilled to perfection, served with garlic mashed potatoes and seasonal vegetables.',
      image: '/steak.jpg',
      category: 'Main Course',
      tags: ['Beef', 'Grilled'],
      dietary: [],
      popular: true,
      special: "Chef's Choice"
    },
    {
      id: 5,
      name: 'Lemon Herb Roasted Chicken',
      price: 24.50,
      description: 'Half chicken marinated with lemon and herbs, slow roasted to juicy perfection, served with roasted potatoes.',
      image: '/chicken.jpg',
      category: 'Main Course',
      tags: ['Poultry', 'Roasted'],
      dietary: ['gluten-free'],
      popular: false
    },
    {
      id: 6,
      name: 'Eggplant Parmesan',
      price: 18.95,
      description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.',
      image: '/eggplant.jpg',
      category: 'Main Course',
      tags: ['Vegetarian', 'Italian'],
      dietary: ['vegetarian'],
      popular: false
    },
    {
      id: 7,
      name: 'Linguine Alle Vongole',
      price: 21.95,
      description: 'Linguine pasta with fresh clams, garlic, white wine, and cherry tomatoes, finished with parsley.',
      image: '/pasta.jpg',
      category: 'Pasta & Risotto',
      tags: ['Pasta', 'Seafood'],
      dietary: [],
      popular: false
    },
    {
      id: 8,
      name: 'Wild Mushroom Risotto',
      price: 19.95,
      description: 'Creamy Arborio rice cooked with a medley of wild mushrooms, white wine, and parmesan cheese.',
      image: '/risotto.jpg',
      category: 'Pasta & Risotto',
      tags: ['Risotto', 'Vegetarian'],
      dietary: ['vegetarian', 'gluten-free'],
      popular: true
    },
    {
      id: 9,
      name: 'Grilled Salmon',
      price: 26.95,
      description: 'Fresh Atlantic salmon fillet grilled and glazed with honey and soy, served with quinoa and roasted vegetables.',
      image: '/salmon.jpg',
      category: 'Seafood',
      tags: ['Fish', 'Healthy'],
      dietary: ['gluten-free'],
      popular: false
    },
    {
      id: 10,
      name: 'Seafood Paella',
      price: 29.95,
      description: 'Traditional Spanish rice dish with saffron, shrimp, mussels, clams, and calamari.',
      image: '/paella.jpg',
      category: 'Seafood',
      tags: ['Spanish', 'Rice'],
      dietary: [],
      popular: true,
      special: 'Signature Dish'
    },
    {
      id: 11,
      name: 'Classic Tiramisu',
      price: 8.95,
      description: 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
      image: '/tiramisu.jpg',
      category: 'Desserts',
      tags: ['Italian', 'Coffee'],
      dietary: ['vegetarian'],
      popular: true,
      special: 'Favorite'
    },
    {
      id: 12,
      name: 'Strawberry milkshake',
      price: 7.50,
      description: 'A delightful beverage made from fruits and milk.',
      image: '/milkshake.jpg',
      category: 'Beverages',
      tags: ['fruit', 'Local'],
      dietary: [],
      popular: false
    }
  ];
  
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  const filterByCategory = (category) => {
    setActiveCategory(category);
  };
  
  const renderDietaryIcons = (dietary) => {
    return dietary.map((diet, index) => {
      let dietClass = '';
      let label = '';
      
      switch(diet) {
        case 'vegetarian':
          dietClass = 'bg-green-500';
          label = 'V';
          break;
        case 'vegan':
          dietClass = 'bg-green-600';
          label = 'VG';
          break;
        case 'gluten-free':
          dietClass = 'bg-blue-500';
          label = 'GF';
          break;
        case 'spicy':
          dietClass = 'bg-red-500';
          label = 'S';
          break;
        default:
          label = '';
      }
      
      return (
        <span 
          key={index} 
          className={`${dietClass} text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-2`} 
          title={diet.charAt(0).toUpperCase() + diet.slice(1)}
        >
          {label}
        </span>
      );
    });
  };
  
  // Group items by category for display
  const groupedItems = {};
  filteredItems.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-yellow-500 text-gray-700 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Delicious Menu</h1>
        <p className="text-xl max-w-2xl mx-auto">Experience a culinary journey with our carefully crafted dishes made from the finest ingredients</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category 
                  ? 'bg-yellow-500 text-gray-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-yellow-300'
              }`}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === 'All' ? (
          // Display all categories with their own sections
          Object.keys(groupedItems).map((category, index) => (
            <div className="mb-16" key={index}>
              <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b-2 border-yellow-500 pb-2">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedItems[category].map(item => (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" key={item.id}>
                    <div className="relative h-48">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      {(item.popular || item.special) && (
                        <div className="absolute top-4 right-4 bg-yellow-500 text-gray-700 px-3 py-1 rounded-full font-bold text-sm">
                          {item.special || 'Popular'}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-700">{item.name}</h3>
                        <span className="text-xl font-bold text-yellow-500">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{tag}</span>
                        ))}
                      </div>
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex mb-4">
                          {renderDietaryIcons(item.dietary)}
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 font-bold py-2 px-4 rounded transition-colors duration-200">
                          Add to Cart
                        </button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-2xl">
                          ❤
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Display only the selected category
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b-2 border-yellow-500 pb-2">{activeCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" key={item.id}>
                  <div className="relative h-48">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    {(item.popular || item.special) && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-gray-700 px-3 py-1 rounded-full font-bold text-sm">
                        {item.special || 'Popular'}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-700">{item.name}</h3>
                      <span className="text-xl font-bold text-yellow-500">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{tag}</span>
                      ))}
                    </div>
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex mb-4">
                        {renderDietaryIcons(item.dietary)}
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 font-bold py-2 px-4 rounded transition-colors duration-200">
                        Add to Cart
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-2xl">
                        ❤
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;