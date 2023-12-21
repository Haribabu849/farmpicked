var fruitsAndVegetables = [
  {
    itemName: "Spinach",
    category: "Fruits and Vegetables",
    subcategory: "Vegetables",
    priceInDollars: 2.99,
    count: 25,
    discount: 0.1, // Discount of 10%
    details: {
      origin: "Local",
      variety: "Baby Spinach",
      description:
        "Fresh and tender baby spinach. Packed with nutrients, this leafy green is perfect for salads, smoothies, and sautéed dishes.",
    },
  },
  {
    itemName: "Carrots",
    category: "Fruits and Vegetables",
    subcategory: "Vegetables",
    priceInDollars: 1.49,
    count: 40,
    discount: 0.1, // Discount of 10%
    details: {
      origin: "Local",
      variety: "Nantes",
      description:
        "Fresh and sweet Nantes carrots. Ideal for salads, snacks, and cooking, these carrots add a vibrant touch to your meals.",
    },
  },
  {
    itemName: "Broccoli",
    category: "Fruits and Vegetables",
    subcategory: "Vegetables",
    priceInDollars: 2.49,
    count: 20,
    discount: 0.15, // Discount of 15%
    details: {
      origin: "Local",
      variety: "Green Magic",
      description:
        "Tender and nutrient-rich Green Magic broccoli. Steam, sauté, or add to your favorite dishes for a healthy and delicious addition.",
    },
  },
  {
    itemName: "Apples",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 2.99,
    count: 50,
    discount: 0.1, // Discount of 10%
    details: {
      color: "Red",
      origin: "United States",
      nutritionalFacts: {
        calories: 95,
        fiber: "4 grams",
        vitamins: ["Vitamin C", "Vitamin A"],
      },
      description:
        "Apples are a delicious and healthy fruit. They are rich in fiber and various vitamins, making them a nutritious snack.",
    },
  },
  {
    itemName: "Blueberries",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 4.99,
    count: 30,
    discount: null, // No discount
    details: {
      color: "Blue",
      origin: "Canada",
      nutritionalFacts: {
        calories: 42,
        fiber: "3.6 grams",
        vitamins: ["Vitamin C", "Vitamin K"],
      },
      description:
        "Blueberries are small, round, and packed with antioxidants. They are known for their sweet taste and vibrant blue color.",
    },
  },
  {
    itemName: "Mangoes",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 3.49,
    count: 20,
    discount: 0.05, // Discount of 5%
    details: {
      color: "Yellow",
      origin: "India",
      nutritionalFacts: {
        calories: 60,
        fiber: "2.6 grams",
        vitamins: ["Vitamin C", "Vitamin A"],
      },
      description:
        "Mangoes are a tropical fruit known for their sweet and juicy flavor. They are rich in vitamins and make a delightful addition to various dishes.",
    },
  },
  {
    itemName: "Cherries",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 5.99,
    count: 40,
    discount: 0.15, // Discount of 15%
    details: {
      color: "Red",
      origin: "United States",
      nutritionalFacts: {
        calories: 50,
        fiber: "2 grams",
        vitamins: ["Vitamin C", "Vitamin K"],
      },
      description:
        "Cherries are small, round fruits with a sweet and tart flavor. They are rich in antioxidants and have various health benefits.",
    },
  },
  {
    itemName: "Oranges",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 1.99,
    count: 35,
    discount: null, // No discount
    details: {
      color: "Orange",
      origin: "Spain",
      nutritionalFacts: {
        calories: 62,
        fiber: "3.1 grams",
        vitamins: ["Vitamin C", "Folate"],
      },
      description:
        "Oranges are citrus fruits with a refreshing taste. They are a good source of vitamin C and are known for their juicy and sweet flavor.",
    },
  },
  {
    itemName: "Bananas",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 0.99,
    count: 60,
    discount: 0.08, // Discount of 8%
    details: {
      color: "Yellow",
      origin: "Ecuador",
      nutritionalFacts: {
        calories: 105,
        fiber: "3.1 grams",
        vitamins: ["Vitamin C", "Vitamin B6"],
      },
      description:
        "Bananas are a popular tropical fruit with a creamy texture and a slightly sweet taste. They are a good source of potassium and energy.",
    },
  },
  {
    itemName: "Grapes",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 6.49,
    count: 25,
    discount: null, // No discount
    details: {
      color: "Purple",
      origin: "Italy",
      nutritionalFacts: {
        calories: 69,
        fiber: "0.9 grams",
        vitamins: ["Vitamin C", "Vitamin K"],
      },
      description:
        "Grapes are small, sweet, and juicy fruits. They come in various colors, including red, green, and purple. Grapes are a good source of antioxidants.",
    },
  },
  {
    itemName: "Pineapples",
    category: "Fruits and Vegetables",
    subcategory: "Fruits",
    priceInDollars: 3.99,
    count: 15,
    discount: 0.12, // Discount of 12%
    details: {
      color: "Yellow",
      origin: "Costa Rica",
      nutritionalFacts: {
        calories: 50,
        fiber: "2.3 grams",
        vitamins: ["Vitamin C", "Manganese"],
      },
      description:
        "Pineapples are tropical fruits with a sweet and tangy flavor. They are rich in vitamin C and manganese, and they make a delicious addition to fruit salads and desserts.",
    },
  },
];

var meatAndFishArray = [
  {
    itemName: "Salmon",
    category: "Meat and Fish",
    subcategory: "Fish",
    priceInDollars: 9.99,
    count: 15,
    discount: 0.2, // Discount of 20%
    details: {
      type: "Atlantic Salmon",
      origin: "Norway",
      nutritionalFacts: {
        calories: 206,
        protein: "22 grams",
        omega3FattyAcids: "2.3 grams",
      },
      description:
        "Salmon is a delicious and nutritious fish known for its rich flavor and high omega-3 fatty acids content. It is often grilled, baked, or pan-seared for a healthy and tasty meal.",
    },
  },
  {
    itemName: "Tuna",
    category: "Meat and Fish",
    subcategory: "Fish",
    priceInDollars: 7.49,
    count: 20,
    discount: 0.15, // Discount of 15%
    details: {
      type: "Yellowfin Tuna",
      origin: "Pacific Ocean",
      nutritionalFacts: {
        calories: 184,
        protein: "40 grams",
        omega3FattyAcids: "0.9 grams",
      },
      description:
        "Tuna is a popular fish with a meaty texture. It is rich in protein and is commonly used in salads, sandwiches, and sushi. Yellowfin tuna has a mild and slightly sweet flavor.",
    },
  },
  {
    itemName: "Cod",
    category: "Meat and Fish",
    subcategory: "Fish",
    priceInDollars: 6.99,
    count: 18,
    discount: null, // No discount
    details: {
      type: "Atlantic Cod",
      origin: "North Atlantic",
      nutritionalFacts: {
        calories: 105,
        protein: "23 grams",
        omega3FattyAcids: "0.2 grams",
      },
      description:
        "Cod is a mild-flavored white fish with a flaky texture. It is versatile and can be baked, grilled, or fried. Cod is a good source of high-quality protein.",
    },
  },
  {
    itemName: "Trout",
    category: "Meat and Fish",
    subcategory: "Fish",
    priceInDollars: 8.99,
    count: 15,
    discount: 0.1, // Discount of 10%
    details: {
      type: "Rainbow Trout",
      origin: "United States",
      nutritionalFacts: {
        calories: 148,
        protein: "20 grams",
        omega3FattyAcids: "1.5 grams",
      },
      description:
        "Trout is a freshwater fish with a delicate flavor. Rainbow trout is known for its pink flesh and is often grilled or pan-fried. It is a good source of omega-3 fatty acids.",
    },
  },
  {
    itemName: "Tilapia",
    category: "Meat and Fish",
    subcategory: "Fish",
    priceInDollars: 5.49,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      type: "Nile Tilapia",
      origin: "Various",
      nutritionalFacts: {
        calories: 128,
        protein: "26 grams",
        omega3FattyAcids: "0.3 grams",
      },
      description:
        "Tilapia is a mild and versatile fish with a firm texture. It is often used in various culinary preparations, including baking, grilling, and frying. Tilapia is a good source of lean protein.",
    },
  },
  {
    itemName: "Beef Steak",
    category: "Meat and Fish",
    subcategory: "Meat",
    priceInDollars: 12.99,
    count: 10,
    discount: 0.18, // Discount of 18%
    details: {
      type: "Ribeye",
      origin: "United States",
      nutritionalFacts: {
        calories: 250,
        protein: "26 grams",
        fat: "16 grams",
      },
      description:
        "Beef steak, particularly ribeye, is a flavorful and tender cut. It is often grilled or pan-seared to perfection. Ribeye steak is known for its marbling, enhancing both taste and juiciness.",
    },
  },
  {
    itemName: "Chicken Breast",
    category: "Meat and Fish",
    subcategory: "Meat",
    priceInDollars: 6.49,
    count: 15,
    discount: 0.12, // Discount of 12%
    details: {
      type: "Boneless, Skinless",
      origin: "United States",
      nutritionalFacts: {
        calories: 165,
        protein: "31 grams",
        fat: "3.6 grams",
      },
      description:
        "Chicken breast is a lean and versatile meat option. It can be grilled, baked, or sautéed for a healthy and protein-rich meal. Boneless, skinless chicken breasts are a popular choice for various recipes.",
    },
  },
  {
    itemName: "Pork Chops",
    category: "Meat and Fish",
    subcategory: "Meat",
    priceInDollars: 8.99,
    count: 12,
    discount: null, // No discount
    details: {
      type: "Center-Cut",
      origin: "United States",
      nutritionalFacts: {
        calories: 212,
        protein: "26 grams",
        fat: "12 grams",
      },
      description:
        "Pork chops, particularly center-cut, are a delicious and versatile pork option. They can be grilled, pan-fried, or baked for a hearty and flavorful meal. Pork chops are known for their juicy texture.",
    },
  },
  {
    itemName: "Lamb Leg",
    category: "Meat and Fish",
    subcategory: "Meat",
    priceInDollars: 15.99,
    count: 8,
    discount: 0.15, // Discount of 15%
    details: {
      type: "Bone-In",
      origin: "New Zealand",
      nutritionalFacts: {
        calories: 219,
        protein: "26 grams",
        fat: "12 grams",
      },
      description:
        "Lamb leg, particularly bone-in, is a flavorful and tender cut of lamb. It is often roasted to perfection, resulting in a succulent and aromatic dish. Lamb leg is a classic choice for special occasions.",
    },
  },
  {
    itemName: "Ground Turkey",
    category: "Meat and Fish",
    subcategory: "Meat",
    priceInDollars: 5.99,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      type: "Lean",
      origin: "United States",
      nutritionalFacts: {
        calories: 170,
        protein: "20 grams",
        fat: "9 grams",
      },
      description:
        "Ground turkey is a lean and versatile meat option. It can be used in various recipes, including burgers, tacos, and meatballs. Lean ground turkey is a healthier alternative to higher-fat meats.",
    },
  },
];

var snacksArray = [
  // Existing data...

  // New category: Snacks
  {
    itemName: "Dark Chocolate",
    category: "Snacks",
    subcategory: "Chocolates",
    priceInDollars: 3.99,
    count: 25,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Lindt",
      cocoaPercentage: "70%",
      weight: "100g",
      description:
        "Dark chocolate with a 70% cocoa percentage. Known for its rich and intense flavor, it's a delightful treat for chocolate enthusiasts.",
    },
  },
  {
    itemName: "Milk Chocolate Bar",
    category: "Snacks",
    subcategory: "Chocolates",
    priceInDollars: 2.49,
    count: 30,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Hershey's",
      weight: "150g",
      description:
        "Classic milk chocolate bar from Hershey's. Creamy and smooth, it's a timeless favorite for chocolate lovers of all ages.",
    },
  },
  {
    itemName: "White Chocolate Truffles",
    category: "Snacks",
    subcategory: "Chocolates",
    priceInDollars: 5.99,
    count: 20,
    discount: null, // No discount
    details: {
      brand: "Godiva",
      weight: "120g",
      description:
        "Indulgent white chocolate truffles from Godiva. Each piece is a heavenly blend of creamy white chocolate for a luxurious snacking experience.",
    },
  },
  {
    itemName: "Hazelnut Chocolate Bar",
    category: "Snacks",
    subcategory: "Chocolates",
    priceInDollars: 4.49,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Ferrero Rocher",
      weight: "200g",
      description:
        "Hazelnut chocolate bar by Ferrero Rocher. A delectable combination of smooth milk chocolate and crunchy hazelnuts, providing a delightful texture and flavor.",
    },
  },
  {
    itemName: "Caramel-filled Chocolates",
    category: "Snacks",
    subcategory: "Chocolates",
    priceInDollars: 6.99,
    count: 15,
    discount: 0.2, // Discount of 20%
    details: {
      brand: "Ghirardelli",
      weight: "180g",
      description:
        "Ghirardelli's caramel-filled chocolates. Each piece combines luscious caramel with premium chocolate, creating a perfect balance of sweetness.",
    },
  },
  // Add more chocolate items as needed...
  {
    itemName: "Chocolate Chip Cookies",
    category: "Snacks",
    subcategory: "Biscuits",
    priceInDollars: 3.49,
    count: 40,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Nestle Toll House",
      weight: "200g",
      description:
        "Classic chocolate chip cookies from Nestle Toll House. Each cookie is loaded with rich chocolate chips, providing a perfect balance of sweetness and crunch.",
    },
  },
  {
    itemName: "Butter Shortbread",
    category: "Snacks",
    subcategory: "Biscuits",
    priceInDollars: 4.99,
    count: 30,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Walkers",
      weight: "250g",
      description:
        "Walkers' buttery shortbread biscuits. These traditional Scottish shortbread cookies are made with the finest ingredients, creating a melt-in-your-mouth experience.",
    },
  },
  {
    itemName: "Oatmeal Raisin Cookies",
    category: "Snacks",
    subcategory: "Biscuits",
    priceInDollars: 3.99,
    count: 35,
    discount: null, // No discount
    details: {
      brand: "Quaker",
      weight: "180g",
      description:
        "Quaker's oatmeal raisin cookies. Packed with hearty oats and plump raisins, these cookies offer a wholesome and satisfying treat.",
    },
  },
  {
    itemName: "Vanilla Cream Sandwich Biscuits",
    category: "Snacks",
    subcategory: "Biscuits",
    priceInDollars: 5.49,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Oreo",
      weight: "300g",
      description:
        "Oreo's vanilla cream sandwich biscuits. A timeless favorite, these biscuits feature a delicious vanilla cream filling sandwiched between two chocolate-flavored cookies.",
    },
  },
  {
    itemName: "Almond Biscotti",
    category: "Snacks",
    subcategory: "Biscuits",
    priceInDollars: 6.99,
    count: 20,
    discount: 0.18, // Discount of 18%
    details: {
      brand: "Nonni's",
      weight: "180g",
      description:
        "Nonni's almond biscotti. Twice-baked to perfection, these Italian-inspired almond biscuits are crunchy and full of almond flavor, making them an ideal companion for coffee or tea.",
    },
  },
  {
    itemName: "Peanut Butter Sandwich Cookies",
    category: "Snacks",
    subcategory: "Biscuits",
    priceInDollars: 4.79,
    count: 30,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Nutter Butter",
      weight: "220g",
      description:
        "Nutter Butter's peanut butter sandwich cookies. These iconic cookies feature a peanut-shaped design with a creamy peanut butter filling between two crisp cookies.",
    },
  },
  {
    itemName: "Almonds",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 7.99,
    count: 30,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Blue Diamond",
      weight: "250g",
      description:
        "Blue Diamond's whole almonds. These crunchy and nutritious almonds are a great snack on their own or as an addition to salads, yogurt, or trail mix.",
    },
  },
  {
    itemName: "Cashews",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 8.99,
    count: 25,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Planters",
      weight: "200g",
      description:
        "Planters' roasted and salted cashews. Enjoy the rich and buttery flavor of cashews that are roasted to perfection and lightly salted for a satisfying snack.",
    },
  },
  {
    itemName: "Pistachios",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 9.49,
    count: 20,
    discount: null, // No discount
    details: {
      brand: "Wonderful",
      weight: "300g",
      description:
        "Wonderful Pistachios. These roasted and salted pistachios are a good source of protein and fiber, offering a delicious and nutritious snacking experience.",
    },
  },
  {
    itemName: "Walnuts",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 6.79,
    count: 30,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Kirkland Signature",
      weight: "200g",
      description:
        "Kirkland Signature's shelled walnuts. Packed with omega-3 fatty acids and antioxidants, walnuts are a heart-healthy and flavorful nut option.",
    },
  },
  {
    itemName: "Pecans",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 10.99,
    count: 18,
    discount: 0.18, // Discount of 18%
    details: {
      brand: "Fisher",
      weight: "180g",
      description:
        "Fisher's pecan halves. These buttery and rich pecans are perfect for snacking or adding to desserts, salads, and other culinary creations.",
    },
  },
  {
    itemName: "Mixed Nuts",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 11.49,
    count: 15,
    discount: 0.2, // Discount of 20%
    details: {
      brand: "Emerald",
      variety: "Assorted",
      weight: "250g",
      description:
        "Emerald's mixed nuts blend. This assortment includes almonds, cashews, walnuts, and pecans for a diverse and satisfying mix of flavors and textures.",
    },
  },
  {
    itemName: "Brazil Nuts",
    category: "Snacks",
    subcategory: "Nuts",
    priceInDollars: 12.99,
    count: 12,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Terrasoul Superfoods",
      weight: "180g",
      description:
        "Terrasoul Superfoods' raw Brazil nuts. These nutrient-dense nuts are a good source of selenium and healthy fats, making them a wholesome snack.",
    },
  },
  {
    itemName: "Chicken Noodle Soup",
    category: "Snacks",
    subcategory: "Soups",
    priceInDollars: 2.99,
    count: 25,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Campbell's",
      size: "15 oz",
      serving: "2",
      description:
        "Classic chicken noodle soup from Campbell's. A comforting blend of chicken, vegetables, and noodles, perfect for a quick and satisfying meal.",
    },
  },
  {
    itemName: "Tomato Basil Soup",
    category: "Snacks",
    subcategory: "Soups",
    priceInDollars: 3.49,
    count: 20,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Progresso",
      size: "18.5 oz",
      serving: "2",
      description:
        "Progresso's tomato basil soup. A flavorful combination of ripe tomatoes and aromatic basil, creating a delicious and hearty soup experience.",
    },
  },
  {
    itemName: "Lentil Soup",
    category: "Snacks",
    subcategory: "Soups",
    priceInDollars: 2.79,
    count: 30,
    discount: null, // No discount
    details: {
      brand: "Amy's",
      size: "14.5 oz",
      serving: "2",
      description:
        "Amy's organic lentil soup. Made with wholesome ingredients, this lentil soup is a nutritious and convenient option for a quick and hearty meal.",
    },
  },
  // Add more soup items as needed...
];

var petCareArray = [
  // Existing data...

  // New category: Pet Care
  {
    itemName: "Premium Cat Food",
    category: "Pet Care",
    subcategory: "Cat Food",
    priceInDollars: 8.99,
    count: 15,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Royal Canin",
      flavor: "Chicken & Rice",
      weight: "5 lbs",
      description:
        "Royal Canin's premium cat food with a chicken and rice formula. Specially crafted to meet the nutritional needs of adult cats, promoting a healthy and balanced diet.",
    },
  },
  {
    itemName: "Grain-Free Salmon Cat Food",
    category: "Pet Care",
    subcategory: "Cat Food",
    priceInDollars: 10.49,
    count: 12,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Blue Buffalo",
      flavor: "Salmon",
      weight: "4 lbs",
      description:
        "Blue Buffalo's grain-free salmon cat food. A high-protein, grain-free formula with real salmon as the first ingredient, promoting optimal feline health.",
    },
  },
  {
    itemName: "Senior Cat Wellness Formula",
    category: "Pet Care",
    subcategory: "Cat Food",
    priceInDollars: 12.99,
    count: 10,
    discount: null, // No discount
    details: {
      brand: "Hill's Science Diet",
      formula: "Senior Wellness",
      weight: "6 lbs",
      description:
        "Hill's Science Diet senior cat wellness formula. Tailored to meet the specific needs of senior cats, providing essential nutrients for overall well-being and vitality.",
    },
  },
  {
    itemName: "Indoor Cat Weight Control",
    category: "Pet Care",
    subcategory: "Cat Food",
    priceInDollars: 9.79,
    count: 18,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Purina ONE",
      formula: "Indoor Advantage",
      weight: "7 lbs",
      description:
        "Purina ONE's indoor cat weight control formula. Designed to support indoor cats' health, with a focus on weight control and digestive health.",
    },
  },
  // Add more cat food items as needed...
  {
    itemName: "High-Protein Adult Dog Food",
    category: "Pet Care",
    subcategory: "Dog Food",
    priceInDollars: 14.99,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Iams",
      flavor: "Beef & Chicken",
      weight: "15 lbs",
      description:
        "Iams' high-protein adult dog food with a beef and chicken formula. Provides essential nutrients for adult dogs, supporting muscle health and overall vitality.",
    },
  },
  {
    itemName: "Grain-Free Lamb Dog Food",
    category: "Pet Care",
    subcategory: "Dog Food",
    priceInDollars: 18.49,
    count: 15,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Wellness CORE",
      flavor: "Lamb & Sweet Potato",
      weight: "12 lbs",
      description:
        "Wellness CORE's grain-free lamb dog food. Crafted with high-quality lamb and sweet potato, this formula supports optimal digestion and is suitable for dogs with grain sensitivities.",
    },
  },
  {
    itemName: "Puppy Growth Formula",
    category: "Pet Care",
    subcategory: "Dog Food",
    priceInDollars: 16.99,
    count: 18,
    discount: null, // No discount
    details: {
      brand: "Blue Buffalo",
      formula: "Puppy Growth",
      weight: "10 lbs",
      description:
        "Blue Buffalo's puppy growth formula. Specially designed to support the growth and development of puppies, providing a balanced mix of nutrients for their unique needs.",
    },
  },
  {
    itemName: "Senior Dog Wellness Blend",
    category: "Pet Care",
    subcategory: "Dog Food",
    priceInDollars: 22.79,
    count: 12,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Hill's Science Diet",
      formula: "Senior Wellness",
      weight: "18 lbs",
      description:
        "Hill's Science Diet senior dog wellness blend. Tailored to meet the nutritional needs of senior dogs, promoting joint health, and supporting a healthy weight.",
    },
  },
  {
    itemName: "Weight Management Dog Food",
    category: "Pet Care",
    subcategory: "Dog Food",
    priceInDollars: 20.99,
    count: 15,
    discount: 0.18, // Discount of 18%
    details: {
      brand: "Purina Pro Plan",
      formula: "Weight Management",
      weight: "14 lbs",
      description:
        "Purina Pro Plan's weight management dog food. Ideal for dogs with weight management needs, providing a balanced blend of nutrients to support a healthy weight.",
    },
  },
  // Add more dog food items as needed...
  {
    itemName: "Collapsible Travel Pet Bowl",
    category: "Pet Care",
    subcategory: "Accessories",
    priceInDollars: 9.99,
    count: 30,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Outward Hound",
      material: "Silicone",
      color: "Blue",
      description:
        "Outward Hound's collapsible travel pet bowl. Made of durable silicone, this bowl is perfect for on-the-go pet hydration during walks, hikes, or travel.",
    },
  },
  {
    itemName: "Interactive Cat Toy Set",
    category: "Pet Care",
    subcategory: "Accessories",
    priceInDollars: 14.49,
    count: 20,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "SmartyKat",
      setIncludes: ["Feather Wand", "Crinkle Balls", "Catnip Mice"],
      description:
        "SmartyKat's interactive cat toy set. Keep your cat entertained with a variety of toys, including a feather wand, crinkle balls, and catnip mice for interactive play.",
    },
  },
  {
    itemName: "Adjustable Dog Harness",
    category: "Pet Care",
    subcategory: "Accessories",
    priceInDollars: 18.99,
    count: 15,
    discount: null, // No discount
    details: {
      brand: "Kurgo",
      size: "Medium",
      color: "Red",
      description:
        "Kurgo's adjustable dog harness. Designed for comfort and safety during walks, the harness features adjustable straps and a sturdy D-ring for leash attachment.",
    },
  },
  {
    itemName: "Soft Pet Bed with Removable Cover",
    category: "Pet Care",
    subcategory: "Accessories",
    priceInDollars: 24.79,
    count: 12,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "PetFusion",
      size: "Large",
      material: "Memory Foam",
      description:
        "PetFusion's soft pet bed with a removable cover. The bed features a comfortable memory foam mattress and a removable cover for easy cleaning and maintenance.",
    },
  },
  // Add more pet care accessories as needed...
];

var dairyArray = [
  // Existing data...

  // New category: Dairy
  {
    itemName: "Organic Whole Milk",
    category: "Dairy",
    subcategory: "Milk",
    priceInDollars: 3.49,
    count: 25,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Organic Valley",
      type: "Whole Milk",
      size: "1 gallon",
      description:
        "Organic Valley's organic whole milk. Produced from grass-fed cows, this whole milk is rich and creamy, providing a wholesome source of dairy goodness.",
    },
  },
  {
    itemName: "Reduced Fat Milk",
    category: "Dairy",
    subcategory: "Milk",
    priceInDollars: 2.99,
    count: 30,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Hiland",
      type: "Reduced Fat Milk",
      size: "64 oz",
      description:
        "Hiland's 2% reduced fat milk. A balanced choice for those seeking a lower-fat option without compromising on the creamy taste of quality dairy.",
    },
  },
  {
    itemName: "Lactose-Free Milk",
    category: "Dairy",
    subcategory: "Milk",
    priceInDollars: 4.49,
    count: 20,
    discount: null, // No discount
    details: {
      brand: "Lactaid",
      type: "Lactose-Free Milk",
      size: "Half Gallon",
      description:
        "Lactaid's lactose-free milk. Perfect for individuals with lactose intolerance, this milk offers the same great taste as regular milk without the discomfort.",
    },
  },
  {
    itemName: "Almond Milk",
    category: "Dairy",
    subcategory: "Milk",
    priceInDollars: 3.79,
    count: 18,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Silk",
      type: "Almond Milk",
      flavor: "Original",
      size: "48 oz",
      description:
        "Silk's almond milk. A dairy-free alternative with a smooth and nutty flavor, perfect for those seeking a plant-based milk option.",
    },
  },
  // Add more milk products as needed...
  // Subcategory: Butter
  {
    itemName: "Salted Butter",
    category: "Dairy",
    subcategory: "Butter",
    priceInDollars: 2.99,
    count: 40,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Land O'Lakes",
      type: "Salted Butter",
      weight: "1 lb",
      description:
        "Land O'Lakes salted butter. A kitchen staple known for its rich and creamy taste, perfect for cooking, baking, or spreading on bread.",
    },
  },
  {
    itemName: "Unsalted European-Style Butter",
    category: "Dairy",
    subcategory: "Butter",
    priceInDollars: 4.49,
    count: 30,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Kerrygold",
      type: "Unsalted European-Style Butter",
      weight: "8 oz",
      description:
        "Kerrygold's unsalted European-style butter. Made from grass-fed cows, this butter has a higher fat content, providing a luxurious and silky texture.",
    },
  },
  {
    itemName: "Whipped Salted Butter",
    category: "Dairy",
    subcategory: "Butter",
    priceInDollars: 3.79,
    count: 35,
    discount: null, // No discount
    details: {
      brand: "Challenge",
      type: "Whipped Salted Butter",
      weight: "12 oz",
      description:
        "Challenge's whipped salted butter. Light and fluffy, this whipped butter is easy to spread, making it a convenient choice for various culinary applications.",
    },
  },
  {
    itemName: "Garlic and Herb Butter Spread",
    category: "Dairy",
    subcategory: "Butter",
    priceInDollars: 5.99,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "President",
      type: "Garlic and Herb Butter Spread",
      weight: "7 oz",
      description:
        "President's garlic and herb butter spread. Elevate your dishes with this flavorful spread, perfect for adding a burst of taste to bread, pasta, or grilled vegetables.",
    },
  },

  // Subcategory: Egg
  {
    itemName: "Large Brown Eggs",
    category: "Dairy",
    subcategory: "Egg",
    priceInDollars: 2.49,
    count: 36,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Happy Egg Co.",
      type: "Large Brown Eggs",
      description:
        "Happy Egg Co.'s large brown eggs. Sourced from free-range hens, these eggs are a natural and wholesome choice for breakfast or cooking.",
    },
  },
  {
    itemName: "Organic Cage-Free Eggs",
    category: "Dairy",
    subcategory: "Egg",
    priceInDollars: 3.99,
    count: 24,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Nature's Best",
      type: "Organic Cage-Free Eggs",
      description:
        "Nature's Best organic cage-free eggs. Produced by hens with access to the outdoors, these eggs meet high organic standards for quality and sustainability.",
    },
  },
  {
    itemName: "Omega-3 Enriched Eggs",
    category: "Dairy",
    subcategory: "Egg",
    priceInDollars: 4.29,
    count: 20,
    discount: null, // No discount
    details: {
      brand: "Eggland's Best",
      type: "Omega-3 Enriched Eggs",
      description:
        "Eggland's Best omega-3 enriched eggs. Packed with essential fatty acids, these eggs offer an additional nutritional boost for a healthy diet.",
    },
  },
  {
    itemName: "Quail Eggs",
    category: "Dairy",
    subcategory: "Egg",
    priceInDollars: 6.99,
    count: 15,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Gourmet Farms",
      type: "Quail Eggs",
      description:
        "Gourmet Farms' quail eggs. Delicate and small, these quail eggs are a gourmet choice for unique culinary creations or elegant appetizers.",
    },
  },

  // Subcategory: Yogurt
  {
    itemName: "Greek Yogurt, Plain",
    category: "Dairy",
    subcategory: "Yogurt",
    priceInDollars: 3.29,
    count: 28,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Chobani",
      type: "Greek Yogurt, Plain",
      size: "32 oz",
      description:
        "Chobani's plain Greek yogurt. Thick and creamy, this yogurt is a versatile ingredient for both sweet and savory dishes or a delicious snack on its own.",
    },
  },
  {
    itemName: "Strawberry Yogurt",
    category: "Dairy",
    subcategory: "Yogurt",
    priceInDollars: 2.99,
    count: 30,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Yoplait",
      type: "Strawberry Yogurt",
      size: "6 oz",
      description:
        "Yoplait's strawberry yogurt. Bursting with real strawberry flavor, this yogurt is a delightful treat for a quick and fruity snack.",
    },
  },
];

var breakfastArray = [
  // Subcategory: Bread
  {
    itemName: "Whole Wheat Bread",
    category: "Breakfast",
    subcategory: "Bread",
    priceInDollars: 3.49,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Nature's Own",
      type: "Whole Wheat Bread",
      size: "20 oz",
      description:
        "Nature's Own whole wheat bread. A nutritious choice for sandwiches and toasts, this bread is made with whole grains for added fiber and flavor.",
    },
  },
  {
    itemName: "Cinnamon Raisin Bread",
    category: "Breakfast",
    subcategory: "Bread",
    priceInDollars: 3.79,
    count: 18,
    discount: null, // No discount
    details: {
      brand: "Pepperidge Farm",
      type: "Cinnamon Raisin Bread",
      size: "16 oz",
      description:
        "Pepperidge Farm cinnamon raisin bread. A sweet and aromatic choice, this bread is loaded with plump raisins and swirls of cinnamon goodness.",
    },
  },
  {
    itemName: "Gluten-Free Multigrain Bread",
    category: "Breakfast",
    subcategory: "Bread",
    priceInDollars: 5.49,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Canyon Bakehouse",
      type: "Gluten-Free Multigrain Bread",
      size: "18 oz",
      description:
        "Canyon Bakehouse's gluten-free multigrain bread. A tasty and gluten-free option, perfect for those with dietary restrictions or preferences.",
    },
  },
  // Add more bread products as needed...

  // Subcategory: Cereal
  {
    itemName: "Honey Nut Cheerios",
    category: "Breakfast",
    subcategory: "Cereal",
    priceInDollars: 3.99,
    count: 30,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "General Mills",
      type: "Honey Nut Cheerios",
      size: "19.5 oz",
      description:
        "General Mills' Honey Nut Cheerios. A classic favorite, this cereal combines the goodness of whole grains with the sweetness of honey and nutty goodness.",
    },
  },
  {
    itemName: "Granola with Mixed Berries",
    category: "Breakfast",
    subcategory: "Cereal",
    priceInDollars: 4.49,
    count: 25,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Bear Naked",
      type: "Granola with Mixed Berries",
      size: "12 oz",
      description:
        "Bear Naked granola with mixed berries. Packed with oats, nuts, and dried berries, this granola adds a delightful crunch to your morning routine.",
    },
  },
  {
    itemName: "Multigrain Oat Bran Flakes",
    category: "Breakfast",
    subcategory: "Cereal",
    priceInDollars: 3.79,
    count: 35,
    discount: null, // No discount
    details: {
      brand: "Kashi",
      type: "Multigrain Oat Bran Flakes",
      size: "16.3 oz",
      description:
        "Kashi's multigrain oat bran flakes. A hearty and nutritious option, this cereal is made with whole grains and provides a satisfying start to your day.",
    },
  },
  {
    itemName: "Chocolate Puffs Cereal",
    category: "Breakfast",
    subcategory: "Cereal",
    priceInDollars: 2.99,
    count: 40,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Cocoa Puffs",
      type: "Chocolate Puffs Cereal",
      size: "11.8 oz",
      description:
        "Cocoa Puffs chocolate puffs cereal. A chocolatey and crunchy delight, perfect for those who love a sweet start to their mornings.",
    },
  },
  // Add more cereal products as needed...
  // Subcategory: Jam
  {
    itemName: "Strawberry Preserves",
    category: "Breakfast",
    subcategory: "Jam",
    priceInDollars: 2.99,
    count: 25,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Smucker's",
      type: "Strawberry Preserves",
      size: "18 oz",
      description:
        "Smucker's strawberry preserves. Bursting with real strawberries, this sweet and fruity jam is perfect for spreading on toast or adding to yogurt.",
    },
  },
  {
    itemName: "Blueberry Jam",
    category: "Breakfast",
    subcategory: "Jam",
    priceInDollars: 3.49,
    count: 20,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Bonne Maman",
      type: "Blueberry Jam",
      size: "13 oz",
      description:
        "Bonne Maman blueberry jam. Made with simple and natural ingredients, this jam captures the essence of ripe blueberries for a delightful taste.",
    },
  },
  {
    itemName: "Orange Marmalade",
    category: "Breakfast",
    subcategory: "Jam",
    priceInDollars: 4.29,
    count: 18,
    discount: null, // No discount
    details: {
      brand: "St. Dalfour",
      type: "Orange Marmalade",
      size: "10 oz",
      description:
        "St. Dalfour orange marmalade. A zesty and tangy choice, this marmalade is made with premium citrus fruits for a bright and refreshing flavor.",
    },
  },
  {
    itemName: "Raspberry Jam",
    category: "Breakfast",
    subcategory: "Jam",
    priceInDollars: 3.79,
    count: 22,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Polaner",
      type: "Raspberry Jam",
      size: "16 oz",
      description:
        "Polaner raspberry jam. Packed with ripe raspberries, this jam offers a perfect balance of sweetness and tartness for a delicious breakfast spread.",
    },
  },
  // Add more jam products as needed...
];

export const beveragesArray = [
  // Subcategory: Coffee
  {
    itemName: "Medium Roast Coffee Beans",
    category: "Beverages",
    subcategory: "Coffee",
    priceInDollars: 12.99,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Starbucks",
      type: "Medium Roast Coffee Beans",
      size: "12 oz",
      description:
        "Starbucks medium roast coffee beans. A balanced and medium-bodied blend, perfect for brewing a rich and flavorful cup of coffee at home.",
    },
  },
  {
    itemName: "French Vanilla Ground Coffee",
    category: "Beverages",
    subcategory: "Coffee",
    priceInDollars: 9.49,
    count: 25,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Dunkin'",
      type: "French Vanilla Ground Coffee",
      size: "20 oz",
      description:
        "Dunkin' French vanilla ground coffee. Experience the sweet and creamy flavor of French vanilla in every sip, ideal for a comforting morning brew.",
    },
  },
  {
    itemName: "Espresso Pods Variety Pack",
    category: "Beverages",
    subcategory: "Coffee",
    priceInDollars: 14.99,
    count: 18,
    discount: null, // No discount
    details: {
      brand: "Nespresso",
      type: "Espresso Pods Variety Pack",
      size: "30 pods",
      description:
        "Nespresso espresso pods variety pack. Explore a range of espresso flavors with this convenient variety pack, compatible with Nespresso machines.",
    },
  },
  {
    itemName: "Decaf Instant Coffee",
    category: "Beverages",
    subcategory: "Coffee",
    priceInDollars: 7.79,
    count: 30,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Folgers",
      type: "Decaf Instant Coffee",
      size: "8 oz",
      description:
        "Folgers decaf instant coffee. Enjoy the rich and smooth taste of coffee without the caffeine, perfect for those who prefer a decaffeinated option.",
    },
  },
  // Add more coffee products as needed...

  // Subcategory: Energy Drinks
  {
    itemName: "Original Energy Drink",
    category: "Beverages",
    subcategory: "Energy Drinks",
    priceInDollars: 2.99,
    count: 35,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Red Bull",
      type: "Original Energy Drink",
      size: "12 oz",
      description:
        "Red Bull original energy drink. Get a boost of energy with the iconic Red Bull formula, featuring caffeine, taurine, and B-vitamins.",
    },
  },
  {
    itemName: "Sugar-Free Energy Drink",
    category: "Beverages",
    subcategory: "Energy Drinks",
    priceInDollars: 3.49,
    count: 30,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Monster",
      type: "Sugar-Free Energy Drink",
      size: "16 oz",
      description:
        "Monster sugar-free energy drink. Experience the same energy boost without the sugar, perfect for those looking for a low-calorie and sugar-free option.",
    },
  },
  {
    itemName: "Berry Blast Energy Shot",
    category: "Beverages",
    subcategory: "Energy Drinks",
    priceInDollars: 2.79,
    count: 25,
    discount: null, // No discount
    details: {
      brand: "5-hour Energy",
      type: "Berry Blast Energy Shot",
      size: "2 oz",
      description:
        "5-hour Energy berry blast energy shot. Convenient and compact, this energy shot provides a quick and focused burst of energy for busy days.",
    },
  },
  {
    itemName: "Orange Pineapple Energy Drink",
    category: "Beverages",
    subcategory: "Energy Drinks",
    priceInDollars: 4.99,
    count: 22,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "V8 +Energy",
      type: "Green Tea Infused Energy Drink",
      size: "12 oz",
      description:
        "V8 +Energy green tea infused energy drink. Combining the goodness of green tea with a natural energy boost, this drink is a refreshing choice.",
    },
  },
  // Add more energy drink products as needed...

  // Subcategory: Juice
  {
    itemName: "Orange Juice",
    category: "Beverages",
    subcategory: "Juice",
    priceInDollars: 3.49,
    count: 28,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Tropicana",
      type: "Orange Juice",
      size: "52 oz",
      description:
        "Tropicana orange juice. Made from fresh-picked oranges, this juice is packed with vitamin C and the natural sweetness of ripe oranges.",
    },
  },
  {
    itemName: "Cola",
    category: "Beverages",
    subcategory: "Fizzy Drinks",
    priceInDollars: 1.99,
    count: 40,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Coca-Cola",
      type: "Cola",
      size: "20 oz",
      description:
        "Coca-Cola classic cola. The timeless and refreshing taste of Coca-Cola, perfect for quenching your thirst and enjoying with meals or on its own.",
    },
  },
  {
    itemName: "Lemon-Lime Soda",
    category: "Beverages",
    subcategory: "Fizzy Drinks",
    priceInDollars: 1.79,
    count: 35,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Sprite",
      type: "Lemon-Lime Soda",
      size: "16 oz",
      description:
        "Sprite lemon-lime soda. A crisp and citrusy soda with the bright flavors of lemon and lime, providing a refreshing and bubbly experience.",
    },
  },
  {
    itemName: "Ginger Ale",
    category: "Beverages",
    subcategory: "Fizzy Drinks",
    priceInDollars: 2.49,
    count: 30,
    discount: null, // No discount
    details: {
      brand: "Canada Dry",
      type: "Ginger Ale",
      size: "12 oz",
      description:
        "Canada Dry ginger ale. Known for its soothing and effervescent qualities, this ginger ale is a classic choice for a non-alcoholic and fizzy beverage.",
    },
  },
  {
    itemName: "Orange Soda",
    category: "Beverages",
    subcategory: "Fizzy Drinks",
    priceInDollars: 1.99,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Fanta",
      type: "Orange Soda",
      size: "20 oz",
      description:
        "Fanta orange soda. Bursting with the sweet and tangy flavor of oranges, this soda is a vibrant and fun choice for a fizzy beverage.",
    },
  },
  // Add more fizzy drink products as needed...

  // Subcategory: Tea
  {
    itemName: "Black Tea Bags",
    category: "Beverages",
    subcategory: "Tea",
    priceInDollars: 3.99,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Lipton",
      type: "Black Tea Bags",
      size: "100 bags",
      description:
        "Lipton black tea bags. A classic and robust black tea blend, perfect for a comforting cup of hot tea or iced tea on a warm day.",
    },
  },
  {
    itemName: "Green Tea with Jasmine",
    category: "Beverages",
    subcategory: "Tea",
    priceInDollars: 4.49,
    count: 25,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Tazo",
      type: "Green Tea with Jasmine",
      size: "20 bags",
      description:
        "Tazo green tea with jasmine. A fragrant and floral green tea infused with jasmine blossoms, creating a soothing and aromatic tea experience.",
    },
  },
  {
    itemName: "Chamomile Herbal Tea",
    category: "Beverages",
    subcategory: "Tea",
    priceInDollars: 3.79,
    count: 18,
    discount: null, // No discount
    details: {
      brand: "Celestial Seasonings",
      type: "Chamomile Herbal Tea",
      size: "24 bags",
      description:
        "Celestial Seasonings chamomile herbal tea. A caffeine-free and calming herbal tea with the gentle flavor of chamomile, perfect for relaxation.",
    },
  },
  {
    itemName: "Earl Grey Loose Leaf Tea",
    category: "Beverages",
    subcategory: "Tea",
    priceInDollars: 5.99,
    count: 22,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Harney & Sons",
      type: "Earl Grey Loose Leaf Tea",
      size: "4 oz",
      description:
        "Harney & Sons Earl Grey loose leaf tea. A classic blend of black tea scented with bergamot, offering a fragrant and sophisticated tea experience.",
    },
  },
  // Add more tea products as needed...
];
// Cooking
export const cookingDetails = [
  // Subcategory: Oil
  {
    itemName: "Extra Virgin Olive Oil",
    category: "Cooking",
    subcategory: "Oil",
    priceInDollars: 9.99,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Colavita",
      type: "Extra Virgin Olive Oil",
      size: "500ml",
      description:
        "Colavita's extra virgin olive oil. Cold-pressed and full of rich flavor, this oil is perfect for salads, dipping, and drizzling over dishes.",
    },
  },
  {
    itemName: "Canola Oil",
    category: "Cooking",
    subcategory: "Oil",
    priceInDollars: 5.99,
    count: 25,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Wesson",
      type: "Canola Oil",
      size: "32 oz",
      description:
        "Wesson canola oil. A versatile and light cooking oil, ideal for frying, sautéing, and baking.",
    },
  },
  // Add more oil products as needed...
  {
    itemName: "Extra Light Olive Oil",
    category: "Cooking",
    subcategory: "Oil",
    priceInDollars: 7.99,
    count: 15,
    discount: 0.08, // Discount of 8%
    details: {
      brand: "Pompeian",
      type: "Extra Light Olive Oil",
      size: "32 oz",
      description:
        "Pompeian extra light olive oil. A versatile and mild-flavored oil suitable for sautéing, frying, and baking without overwhelming the taste of your dishes.",
    },
  },
  {
    itemName: "Vegetable Oil",
    category: "Cooking",
    subcategory: "Oil",
    priceInDollars: 4.49,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Wesson",
      type: "Vegetable Oil",
      size: "48 oz",
      description:
        "Wesson vegetable oil. A neutral-flavored oil ideal for frying, baking, and cooking a variety of dishes. Light on taste, heavy on performance.",
    },
  },
  {
    itemName: "Avocado Oil",
    category: "Cooking",
    subcategory: "Oil",
    priceInDollars: 11.99,
    count: 10,
    discount: null, // No discount
    details: {
      brand: "Chosen Foods",
      type: "Avocado Oil",
      size: "16.9 oz",
      description:
        "Chosen Foods avocado oil. A healthy and versatile oil with a mild, buttery taste. Great for high-heat cooking, salad dressings, and drizzling.",
    },
  },

  // Subcategory: Rice
  {
    itemName: "Basmati Rice",
    category: "Cooking",
    subcategory: "Rice",
    priceInDollars: 6.99,
    count: 20,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Royal",
      type: "Basmati Rice",
      size: "5 lbs",
      description:
        "Royal's basmati rice. Long-grain and aromatic, this rice is known for its fluffy texture and is perfect for a variety of savory dishes.",
    },
  },
  {
    itemName: "Jasmine Rice",
    category: "Cooking",
    subcategory: "Rice",
    priceInDollars: 5.49,
    count: 30,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Lundberg",
      type: "Jasmine Rice",
      size: "2 lbs",
      description:
        "Lundberg jasmine rice. Fragrant and slightly sticky, this rice is a great accompaniment to Asian-inspired dishes.",
    },
  },
  {
    itemName: "Brown Rice",
    category: "Cooking",
    subcategory: "Rice",
    priceInDollars: 4.99,
    count: 18,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Uncle Ben's",
      type: "Brown Rice",
      size: "2 lbs",
      description:
        "Uncle Ben's brown rice. Nutritious and whole-grain, this brown rice is a healthier alternative, perfect for various dishes and side servings.",
    },
  },
  {
    itemName: "Arborio Rice",
    category: "Cooking",
    subcategory: "Rice",
    priceInDollars: 8.49,
    count: 15,
    discount: 0.15, // Discount of 15%
    details: {
      brand: "Riso Scotti",
      type: "Arborio Rice",
      size: "2.2 lbs",
      description:
        "Riso Scotti Arborio rice. Known for its creamy texture, this Italian short-grain rice is essential for making risotto dishes with a velvety finish.",
    },
  },
  {
    itemName: "Wild Rice Blend",
    category: "Cooking",
    subcategory: "Rice",
    priceInDollars: 6.99,
    count: 20,
    discount: null, // No discount
    details: {
      brand: "Lundberg",
      type: "Wild Rice Blend",
      size: "16 oz",
      description:
        "Lundberg wild rice blend. A mix of wild and brown rice for a hearty and flavorful side dish. Versatile and easy to incorporate into various recipes.",
    },
  },
  // Add more rice products as needed...

  // Subcategory: Salt & Sugar
  {
    itemName: "Sea Salt",
    category: "Cooking",
    subcategory: "Salt & Sugar",
    priceInDollars: 2.49,
    count: 40,
    discount: null, // No discount
    details: {
      brand: "Morton",
      type: "Sea Salt",
      size: "26 oz",
      description:
        "Morton sea salt. A natural and coarse sea salt that enhances the flavor of your dishes and adds a finishing touch.",
    },
  },
  {
    itemName: "Granulated Sugar",
    category: "Cooking",
    subcategory: "Salt & Sugar",
    priceInDollars: 3.29,
    count: 35,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Domino",
      type: "Granulated Sugar",
      size: "4 lbs",
      description:
        "Domino granulated sugar. Fine and versatile, this sugar is perfect for baking, sweetening beverages, and general cooking.",
    },
  },
  // Add more salt and sugar products as needed...

  // Subcategory: Spices
  {
    itemName: "Ground Black Pepper",
    category: "Cooking",
    subcategory: "Spices",
    priceInDollars: 1.99,
    count: 50,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "McCormick",
      type: "Ground Black Pepper",
      size: "3 oz",
      description:
        "McCormick ground black pepper. A kitchen staple, this pepper adds bold and zesty flavor to a variety of dishes.",
    },
  },
  {
    itemName: "Ground Cumin",
    category: "Cooking",
    subcategory: "Spices",
    priceInDollars: 2.79,
    count: 30,
    discount: 0.12, // Discount of 12%
    details: {
      brand: "Spice Islands",
      type: "Ground Cumin",
      size: "2 oz",
      description:
        "Spice Islands ground cumin. A warm and aromatic spice, perfect for adding depth to curries, stews, and roasted vegetables.",
    },
  },
  // Add more spice products as needed...
  {
    itemName: "Ground Turmeric",
    category: "Cooking",
    subcategory: "Spices",
    priceInDollars: 3.29,
    count: 25,
    discount: 0.1, // Discount of 10%
    details: {
      brand: "Simply Organic",
      type: "Ground Turmeric",
      size: "2.38 oz",
      description:
        "Simply Organic ground turmeric. A vibrant and earthy spice, known for its anti-inflammatory properties. Perfect for curries, soups, and golden milk.",
    },
  },
  {
    itemName: "Crushed Red Pepper Flakes",
    category: "Cooking",
    subcategory: "Spices",
    priceInDollars: 2.99,
    count: 30,
    discount: 0.08, // Discount of 8%
    details: {
      brand: "McCormick",
      type: "Crushed Red Pepper Flakes",
      size: "1.5 oz",
      description:
        "McCormick crushed red pepper flakes. Add a kick to your dishes with these fiery and flavorful pepper flakes. Perfect for pizza, pasta, and more.",
    },
  },
];

export const AllProducts = [
  ...fruitsAndVegetables,
  ...beveragesArray,
  ...breakfastArray,
  ...cookingDetails,
  ...dairyArray,
  ...meatAndFishArray,
  ...petCareArray,
  ...snacksArray,
];
