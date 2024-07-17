import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct, deleteProduct } from "../features/AdminSlice";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.admin.products);

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    new_price: 0,
    description: "",
  });

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setNewProduct({ id: "", name: "", new_price: 0, description: "" });
  };

  const handleUpdateProduct = (product) => {
    dispatch(updateProduct(product));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className=" md:px-24">
      <h1 className="text-center bg-black text-white px-5 py-3 font-bold mb-4">Product Management</h1>
     <div className="flex flex-wrap gap-4 justify-between px-5">
     <input
        type="text"
        placeholder="ID"
        value={newProduct.id}
        onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, new_price: +e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>
     </div>
     <h3 className="font-bold pt-9 pb-4 px-4 text-xl">Our Products</h3>
      <ul className="px-4">
        {products.map((product) => (
          <li key={product.id} className="flex flex-wrap md:gap-8 py-1 border-b border-black">
            <p className="w-[60%]">            {product.name} - ${product.new_price}  
            </p>
            <button onClick={() => handleUpdateProduct(product)}>Update</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
