import React from 'react';
const products = [
  {
    id: 1,
    name: 'Sofa',
    image:
      'https://cdn.thewirecutter.com/wp-content/media/2023/05/sofabuyingguide-2048px-benchmademoderncream.jpg', // Change to a furniture image
    description: 'A comfortable and stylish sofa perfect for relaxing.',
    price: 500,
    category: 'Living Room', // Add category for filtering
    material: 'Fabric', // Add material details
    dimensions: 'L: 80in, W: 36in, H: 32in', // Add dimensions
    color: 'Gray', // Add color options
  },
  {
    id: 2,
    name: 'Dining Table',
    image: 'https://images.mansionglobal.com/im-88925788?width=1299&height=866', // Change to a furniture image
    description: 'A sturdy and elegant dining table for family gatherings.',
    price: 300,
    category: 'Dining Room',
    material: 'Wood',
    dimensions: 'L: 60in, W: 36in, H: 30in',
    seatingCapacity: 6, // Add seating capacity
  },
  {
    id: 3,
    name: 'Office Chair',
    image:
      'https://i5.walmartimages.com/seo/Lacoo-Faux-Leather-High-Back-Executive-Office-Chair-with-Lumbar-Support-Black_bf489981-70b3-42c2-972e-93ea9995756c.160b1f502b31db454018d773aed8b003.jpeg', // Change to a furniture image
    description:
      'A comfortable and ergonomic office chair for long work hours.',
    price: 150,
    category: 'Office',
    material: 'Mesh',
    adjustable: true, // Add adjustability details
  },
  {
    id: 4,
    name: 'Coffee Table',
    image:
      'https://i5.walmartimages.com/seo/Better-Homes-Gardens-Steele-Coffee-Table-with-Lower-Shelf-Espresso_ba91d128-eb1e-42a8-878c-6a79f75a1e6c_1.4d5cd4ce45ea17270d17e0e6142ad856.jpeg', // Change to a furniture image
    description:
      'A stylish and functional coffee table for your living room. Features a spacious top and a lower shelf for storage.',
    price: 100,
    category: 'Living Room',
    material: 'Wood',
    dimensions: 'L: 40in, W: 24in, H: 18in',
    shape: 'Rectangular', // Add shape option
  },
  {
    id: 5,
    name: 'Bookshelf',
    image:
      'https://grihoshaj.com/cdn/shop/products/Screenshot_69.png?v=1678824780', // Change to a furniture image
    description:
      'A sturdy and stylish bookshelf for displaying your favorite books and décor. Features multiple shelves for storage.',
    price: 200,
    category: 'Living Room',
    material: 'Wood',
    dimensions: 'L: 36in, W: 12in, H: 72in',
    numberOfShelves: 5, // Add number of shelves
  },
  {
    id: 6,
    name: 'Bed',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHQd_niVC4Lo94Wr-x1yETRdpY96cFnV_ZQ&s', // Change to a furniture image
    description:
      'A comfortable and stylish bed for a good night’s sleep. Features a supportive mattress and a sturdy frame.',
    price: 400,
    category: 'Bedroom',
    material: 'Wood',
    dimensions: 'L: 80in, W: 60in, H: 40in',
    size: 'Queen', // Add bed size option
  },
  // Add more products here...
];

const OurProduct = ({ image, title }) => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <ul className=" product-ul">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {product.discountedPrice ? (
              <span className="price">
                <strikethrough>{product.price}</strikethrough> $
                {product.discountedPrice}
              </span>
            ) : (
              <span className="price">${product.price}</span>
            )}
            {/* Add buttons for Add to Cart, etc. here */}
            <button className=" addtocartButton"> Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProduct;
