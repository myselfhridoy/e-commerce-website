import React from 'react';
const products = [
  {
    id: 1,
    name: 'Sofa',
    price: 299.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7oT17GxUf6BUeVkXNDqt7MgrfX25px-LYA&s',
  },
  {
    id: 2,
    name: 'Dining Table',
    price: 499.99,
    image:
      'https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/Comet-192and_Hibiscus-199%20-wood%20.png',
  },
  {
    id: 3,
    name: 'Chair',
    price: 79.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4vXzskB9WtsoGWiSvXGeAmJGnyGS_aP7ag&s://cdn.bdstall.com/product-image/giant_162419.jpg',
  },
  {
    id: 4,
    name: 'Bed',
    price: 399.99,
    image:
      'https://www.squaro.in/cdn/shop/products/IMG_20230301_145216.jpg?v=1678284114',
  },
  {
    id: 5,
    name: 'Coffee Table',
    price: 129.99,
    image:
      'https://m.media-amazon.com/images/I/81B6SCkXamL._AC_UF894,1000_QL80_.jpg://cdn.bdstall.com/product-image/giant_162419.jpg',
  },
  {
    id: 6,
    name: 'Wardrobe',
    price: 599.99,
    image:
      'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-07/wdh-358.jpg',
  },
  {
    id: 7,
    name: 'Bookshelf',
    price: 199.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnSKKpeJq65B_A79SuH9pStoqzzTbwsDDNA&s.jpg',
  },
  {
    id: 8,
    name: 'Recliner',
    price: 249.99,
    image:
      'https://thesleepcompany.in/cdn/shop/files/1_9bfe87ca-ec1b-4773-8133-fed2ccf00c6f.jpg?v=1715751285&width=1445.jpg',
  },
  {
    id: 9,
    name: 'TV Stand',
    price: 99.99,
    image:
      'https://ttap.co.uk/wp-content/uploads/2023/02/fs1-oak-lifestyle-1.jpg',
  },
  {
    id: 10,
    name: 'Nightstand',
    price: 49.99,
    image:
      'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202423/0015/sausalito-3-drawer-nightstand-o.jpg',
  },
  {
    id: 11,
    name: 'Desk',
    price: 159.99,
    image:
      'https://www.fortytwo.sg/media/catalog/product/cache/1/image/2514x/9df78eab33525d08d6e5fb8d27136e95/e/n/endre_1.2m_study_desk_with_shelf_storage_white_5_1b.jpg',
  },
  {
    id: 12,
    name: 'Dresser',
    price: 349.99,
    image:
      'https://walkeredison.com/cdn/shop/files/7b611d1a64ddf32571fb6a5cb250230020e0645f_800x.jpg?v=1708016186',
  },
];
const ShopPage = ({ image, title }) => {
  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className=" addtocartButton"> Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
