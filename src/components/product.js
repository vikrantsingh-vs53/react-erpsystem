// src/components/Products.js

import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import './product.css'; // You can create a separate CSS file for styling

const Products = () => {
  // Mock data for products
  const initialProductsData = [
    { productId: 1, name: 'Product A', category: 'Category A', price: 50, stockQuantity: 100 },
    { productId: 2, name: 'Product B', category: 'Category B', price: 75, stockQuantity: 50 },
    { productId: 3, name: 'Product C', category: 'Category C', price: 30, stockQuantity: 200 },
    // Add more mock data as needed
  ];

  const [productsData, setProductsData] = useState(initialProductsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsEditMode(false);
    setShowProductModal(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditMode(true);
    setShowProductModal(true);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = productsData.filter((product) => product.productId !== productId);
    setProductsData(updatedProducts);
  };

  const handleSaveProduct = (product) => {
    if (isEditMode) {
      // Update existing product
      const updatedProducts = productsData.map((p) =>
        p.productId === product.productId ? product : p
      );
      setProductsData(updatedProducts);
    } else {
      // Add new product
      const newProductId = productsData.length + 1;
      const newProduct = { ...product, productId: newProductId };
      setProductsData([...productsData, newProduct]);
    }

     setShowProductModal(false);
  };

  return (
    <div className="tile products-tile">
       <h2>Products</h2>
       <button id='add-product' onClick={handleAddProduct}>Add Product</button>
       <div className='table'>
        <table className="products-table">
          <thead>
            <tr>
             <th>Product ID</th>
             <th>Name</th>
             <th>Category</th>
             <th>Price</th>
             <th>Stock Quantity</th>
             <th>Actions</th>
            </tr>
         </thead>
         <tbody>
          {productsData.map((product) => (
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button id='edit-product' onClick={() => handleEditProduct(product)}>Edit</button>
                <button id='delete-product' onClick={() => handleDeleteProduct(product.productId)}>Delete</button>
              </td>
            </tr>
          ))}
         </tbody>
       </table>
      </div> 

      {/* Reusable Modal for adding/editing products */}
      <Modal
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
        title={isEditMode ? 'Edit Product' : 'Add Product'}
      >
        {/* Add form or input fields to enter product details */}
        <label>Name:</label>
         <input
            type="text"
            value={selectedProduct?.name || ''}
            onChange={(e) =>
            setSelectedProduct((prevProduct) => ({
              ...prevProduct,
              name: e.target.value,
            }))
          }
        />

        <label>Category:</label>
        <input
          type="text"
          value={selectedProduct?.category || ''}
          onChange={(e) =>
            setSelectedProduct((prevProduct) => ({
              ...prevProduct,
              category: e.target.value,
            }))
          }
        />

        <label>Price:</label>
        <input
          type="number"
          value={selectedProduct?.price || ''}
          onChange={(e) =>
            setSelectedProduct((prevProduct) => ({
              ...prevProduct,
              price: Number(e.target.value),
            }))
          }
        />

        <label>Stock Quantity:</label>
        <input
          type="number"
          value={selectedProduct?.stockQuantity || ''}
          onChange={(e) =>
            setSelectedProduct((prevProduct) => ({
              ...prevProduct,
              stockQuantity: Number(e.target.value),
            }))
          }
        />

        <button onClick={() => handleSaveProduct(selectedProduct)}>
          {isEditMode ? 'Save Changes' : 'Add Product'}
        </button>
      </Modal>
    </div>
  );
};

export default Products;
