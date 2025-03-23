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
      let className = `diet-icon ${diet}`;
      let label = '';
      
      switch(diet) {
        case 'vegetarian':
          label = 'V';
          break;
        case 'vegan':
          label = 'VG';
          break;
        case 'gluten-free':
          label = 'GF';
          break;
        case 'spicy':
          label = 'S';
          break;
        default:
          label = '';
      }
      
      return (
        <span key={index} className={className} title={diet.charAt(0).toUpperCase() + diet.slice(1)}>
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
    <div className="menu-page">
      <section className="menu-hero">
        <h1>Our Delicious Menu</h1>
        <p>Experience a culinary journey with our carefully crafted dishes made from the finest ingredients</p>
      </section>

      <div className="menu-container">
        <div className="menu-navigation">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`menu-nav-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === 'All' ? (
          // Display all categories with their own sections
          Object.keys(groupedItems).map((category, index) => (
            <div className="menu-section" key={index}>
              <h2 className="menu-section-title">{category}</h2>
              <div className="menu-grid">
                {groupedItems[category].map(item => (
                  <div className="menu-item" key={item.id}>
                    <div className="menu-item-image">
                      <img src={item.image} alt={item.name} />
                      {(item.popular || item.special) && (
                        <div className="special-badge">
                          {item.special || 'Popular'}
                        </div>
                      )}
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-header">
                        <h3 className="menu-item-title">{item.name}</h3>
                        <span className="menu-item-price">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="menu-item-description">{item.description}</p>
                      <div className="menu-item-tags">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="menu-item-tag">{tag}</span>
                        ))}
                      </div>
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="special-diet">
                          {renderDietaryIcons(item.dietary)}
                        </div>
                      )}
                      <div className="menu-item-actions">
                        <button className="add-to-cart">Add to Cart</button>
                        <button className="favorite-btn">❤</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Display only the selected category
          <div className="menu-section">
            <h2 className="menu-section-title">{activeCategory}</h2>
            <div className="menu-grid">
              {filteredItems.map(item => (
                <div className="menu-item" key={item.id}>
                  <div className="menu-item-image">
                    <img src={item.image} alt={item.name} />
                    {(item.popular || item.special) && (
                      <div className="special-badge">
                        {item.special || 'Popular'}
                      </div>
                    )}
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3 className="menu-item-title">{item.name}</h3>
                      <span className="menu-item-price">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-item-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="menu-item-tag">{tag}</span>
                      ))}
                    </div>
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="special-diet">
                        {renderDietaryIcons(item.dietary)}
                      </div>
                    )}
                    <div className="menu-item-actions">
                      <button className="add-to-cart">Add to Cart</button>
                      <button className="favorite-btn">❤</button>
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