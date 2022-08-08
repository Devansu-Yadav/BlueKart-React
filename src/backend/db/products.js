
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1",
    productName: "Surface Pro 8",
    brand: "Microsoft",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648711870/laptop.webp",
    price: 100000,
    discountPercent: 10,
    categoryName: "Electronics",
    rating: "4.8",
    isOutOfStock: false,
    features: { Battery: "16 hours", SSD: "128GB or 256GB or 512GB or 1TB SSD", RAM: "8GB, 16GB, 32GB" },
    description: "Surface Pro 8 is the first consumer laptop-to-tablet PC based on the Intel® Evo™ platform"
  },
  {
    _id: "2",
    productName: "Samsung Galaxy M32",
    brand: "Samsung",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648712083/smartphone.webp",
    price: 30999,
    discountPercent: 5,
    categoryName: "Electronics",
    rating: "4.5",
    isOutOfStock: false,
    features: { BatteryCapacity: "6000mAh Long-lasting Battery", RAM: "6 GB", Storage: "128 GB"},
    description: "Faster, Long battery life smartphone"
  },
  {
    _id: "3",
    productName: "Samsung Tablet",
    brand: "Samsung",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648712176/tablet.jpg",
    price: 6999,
    discountPercent: 8,
    categoryName: "Electronics",
    rating: "3.8",
    isOutOfStock: true,
    features: { BatteryCapacity: "7040 mAh", RAM: "4 GB", Storage: "64 GB" },
    description: "A Mini yet powerful computer in the palm of your hand"
  },
  {
    _id: "4",
    productName: "Mens Sherwani",
    brand: "Manyavar",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648712213/fashion-men.jpg",
    price: 9999,
    discountPercent: 15,
    categoryName: "Fashion",
    rating: "2.8",
    isOutOfStock: true,
    features: { Fabric: "Polyester", size: "The model (height 6) is wearing size M" },
    description: "Printed Blue Men's Sherwani, full button placket, long sleeves, a chest pocket, multiple slits"
  },
  {
    _id: "5",
    productName: "Women's T-Shirt",
    brand: "Nike",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648712255/fashion-women.jpg",
    price: 1599,
    discountPercent: 12,
    categoryName: "Fashion",
    rating: "1.8",
    features: { Fabric: "Pure Cotton", WashCare: "Machine washable" },
    description: "T-shirt in cotton jersey with a slightly wider neckline with a narrow trim."
  },
  {
    _id: "6",
    productName: "Boat Wireless Headphones",
    brand: "Boat",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648712762/accessories-1.webp",
    price: 3299,
    discountPercent: 20,
    categoryName: "Accessories",
    rating: "3.5",
    isOutOfStock: false,
    features: { Playback: "Up to 8 Hours", range: "10 m" },
    description: "Stylish wireless headphones for the new generation"
  },
  {
    _id: "7",
    productName: "Phillips Men's Trimmer",
    brand: "Phillips",
    image: "https://res.cloudinary.com/bluekart/image/upload/v1648712801/accessories-3.webp",
    price: 2599,
    discountPercent: 5,
    categoryName: "Accessories",
    rating: "2.3",
    isOutOfStock: true,
    features: { trimmingRange: "0.5 - 10 mm", battery: "60 mn" },
    description: "Phillips Men's Trimmer for Mens grooming kit"
  },
  {
    _id: "8",
    productName: "HRX Men's Sports Wear",
    brand: "HRX",
    image: "https://res.cloudinary.com/bluekart/image/upload/e_bgremoval/v1648712834/Sports-2.webp",
    price: 2199,
    discountPercent: 5,
    categoryName: "Sports",
    rating: "4.5",
    isOutOfStock: false,
    features: { use: "T-shirt for your daily workouts", WashCare: "Machine washable", sleeve: "Short Sleeves" },
    description: "Take the sporty look to the streets with the HRX Men's Active Sports Wear"
  },
  {
    _id: "9",
    productName: "Nike Sports Shoes",
    brand: "Nike",
    image: "https://res.cloudinary.com/bluekart/image/upload/e_bgremoval/v1648712870/Sports-1.webp",
    price: 5099,
    discountPercent: 5,
    categoryName: "Sports",
    rating: "2.0",
    isOutOfStock: false,
    features: { weight: "Light Weight", color: "Black" },
    description: "The Nike City Rep TR is a versatile shoe that brings durability and flexibility to your active urban lifestyle."
  },
  {
    _id: "10",
    productName: "Women Training Shoes",
    brand: "Nike",
    image: "https://res.cloudinary.com/bluekart/image/upload/e_bgremoval/v1648712906/women-training-shoes.jpg",
    price: 4245,
    discountPercent: 3,
    categoryName: "Sports",
    rating: "4.5",
    isOutOfStock: false,
    features: { weight: "Light Weight", color: "Black" },
    description: "A versatile shoe that brings durability and flexibility to your active urban lifestyle."
  },
  {
    _id: "11",
    productName: "Handheld Bag for Women",
    brand: "Lavie",
    image: "https://res.cloudinary.com/bluekart/image/upload/e_bgremoval/v1648712973/women-handheld-bag.jpg",
    price: 1799,
    discountPercent: 4,
    categoryName: "Fashion",
    rating: "1.5",
    isOutOfStock: false,
    features: { weight: "Lightweight", quality: "Durable and Good quality"},
    description: "Handheld Bag for Women"
  },
  {
    _id: "12",
    productName: "Rose Gold Plated necklace",
    brand: "Kalyan Jewellers",
    image: "https://res.cloudinary.com/bluekart/image/upload/c_scale,h_420,w_420/v1648713026/Rose-Gold-necklace.jpg",
    price: 3475,
    discountPercent: 10,
    categoryName: "Accessories",
    rating: "3.2",
    isOutOfStock: true,
    features: { quality: "Delicate but durable", price: "Reasonable Price" },
    description: "Fine Gold plated Necklace to up your fashion game!"
  }
];
