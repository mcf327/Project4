require('dotenv').config();
require('./config/database');

const Vendor = require('./models/vendor');
const Item = require('./models/item');

(async function() {
    await Vendor.deleteMany({});
    const vendors = await Vendor.create([
      {
        name: 'Riviera Produce',
        description: 'Produce wholesaler offering early morning delivery.',
        address: '205 Jackson St, Englewood, NJ 07631',
        phone: '(201) 227-7105',
        sortOrder: 10,
      },
      {
        name: 'Baldor Specialty Foods',
        description: 'Food distributor offering meat, dairy, and specialty items for delivery in NYC.',
        address: '155 Food Center Dr, Bronx, NY 10474',
        phone: '(718) 860-9100',
        sortOrder: 20,
      },
      {
        name: 'Jetro Cash & Carry',
        description: 'Large restaurant supplier offering a range of foods, paper goods, and various other kitchen supplies.',
        address: '566 Hamilton Ave, Brooklyn, NY 11232',
        phone: '(718) 768-0555',
        sortOrder: 30,
      },
    ]);
  
    await Item.deleteMany({});
    const items = await Item.create([
      {name: 'Bananas 30lb case', category: 'produce', price: 19.90, vendor: vendors[0], custom: false},
      {name: 'Apples 40lb case', category: 'produce', price: 21.50, vendor: vendors[0], custom: false},
      {name: 'Juice Oranges 220ct', category: 'produce', price: 32.00, vendor: vendors[0], custom: false},
      {name: 'Cucumbers 50ct', category: 'produce', price: 17.10, vendor: vendors[0], custom: false},
      {name: 'Spring Mix 2lb bag', category: 'produce', price: 9.50, vendor: vendors[0], custom: false},
      {name: 'Baby Spinach 8lb case', category: 'produce', price: 14.50, vendor: vendors[0], custom: false},
      {name: 'Carrots 50lb bag', category: 'produce', price: 22.90, vendor: vendors[0], custom: false},
      {name: 'Red Onions 25lb bag', category: 'produce', price: 12.50, vendor: vendors[0], custom: false},
      {name: 'Beets 25lb bag', category: 'produce', price: 12.50, vendor: vendors[0], custom: false},
      {name: 'Whole Milk 4 gallons case', category: 'dairy', price: 14.00, vendor: vendors[0], custom: false},
      {name: 'Frozen Mango 30lb', category: 'frozen', price: 33.00, vendor: vendors[0], custom: false},
      {name: 'Frozen Blueberries 30lb', category: 'frozen', price: 53.60, vendor: vendors[0], custom: false},
      {name: 'Frozen Strawberries 30lb', category: 'frozen', price: 40.50, vendor: vendors[0], custom: false},
      {name: 'Garlic 1lb Jar', category: 'produce', price: 6.50, vendor: vendors[1], custom: false},
      {name: 'Mint leaves 2lb', category: 'produce', price: 9.50, vendor: vendors[1], custom: false},
      {name: 'Whole Milk gallon', category: 'dairy', price: 3.50, vendor: vendors[1], custom: false},
      {name: 'Eggs 150ct case', category: 'dairy', price: 39.90, vendor: vendors[1], custom: false},
      {name: 'Chicken breast 10lb bag', category: 'meat', price: 19.90, vendor: vendors[1], custom: false},
      {name: 'Swiss Cheese 5lb block', category: 'dairy', price: 11.00, vendor: vendors[1], custom: false},
      {name: 'Goat Cheese 2lb', category: 'dairy', price: 23.10, vendor: vendors[1], custom: false},
      {name: 'Red Bell Peppers 25lb', category: 'produce', price: 39.00, vendor: vendors[1], custom: false},
      {name: 'Mushrooms 10lb', category: 'produce', price: 17.00, vendor: vendors[1], custom: false},
      {name: 'Smoked Salmon', category: 'meat', price: 31.00, vendor: vendors[1], custom: false},
      {name: 'Sliced Prosciutto', category: 'meat', price: 9.00, vendor: vendors[1], custom: false},
      {name: 'White Flour 50lb', category: 'other', price: 12.00, vendor: vendors[1], custom: false},
      {name: 'Chicken Breast 40lb case', category: 'meat', price: 60.00, vendor: vendors[2], custom: false},
      {name: 'Almond Milk 6 gallon case', category: 'dairy', price: 35.00, vendor: vendors[2], custom: false},
      {name: 'Oat Milk 6 gallon case', category: 'dairy', price: 35.00, vendor: vendors[2], custom: false},
      {name: 'Paper To-Go Boxes', category: 'other', price: 11.00, vendor: vendors[2], custom: false},
      {name: 'Paper Plates', category: 'other', price: 18.50, vendor: vendors[2], custom: false},
      {name: 'Plastic Forks', category: 'other', price: 8.50, vendor: vendors[2], custom: false},
      {name: 'Plastic Knives', category: 'other', price: 8.50, vendor: vendors[2], custom: false},
      {name: 'Plastic To-Go Bags', category: 'other', price: 6.50, vendor: vendors[2], custom: false},
      {name: 'Olive Oil 6L case', category: 'other', price: 49.50, vendor: vendors[2], custom: false},
      {name: 'White Vinegar gallon', category: 'other', price: 3.00, vendor: vendors[2], custom: false},



      
    ]);
  
    console.log(items)
  
    process.exit();
  })();