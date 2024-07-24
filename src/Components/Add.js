import React, { useState } from 'react';

function Add() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    image: '',
    price: '',
    description: '',
  });

  const formContainer = {
    backgroundColor: '#ffeecc',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '-15px',
  };

  const mainTextCenter = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333',
  };

  const inputStyle = {
    height: '30px',
    width: '100%',
    marginBottom: '10px',
    padding: '5px',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    height: '100px',
    width: '100%',
    marginBottom: '10px',
    padding: '5px',
    resize: 'none',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#FFA500',
    color: 'white',
    borderRadius: '20px',
    fontSize: '18px',
    padding: '8px 30px',
    border: 'none',
    cursor: 'pointer',
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add any additional form submission logic here if needed
  };

  return (
    <div style={formContainer}>
      <h2 style={mainTextCenter}>Entry Details</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            Phone Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            style={inputStyle}
            value={formData.name}
            required
          />
        </div>
        <div>
          <label htmlFor="id" style={labelStyle}>
            Phone ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            onChange={onChange}
            style={inputStyle}
            value={formData.id}
            required
          />
        </div>
        <div>
          <label htmlFor="image" style={labelStyle}>
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={onChange}
            style={inputStyle}
            value={formData.image}
            required
          />
        </div>
        <div>
          <label htmlFor="price" style={labelStyle}>
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={onChange}
            style={inputStyle}
            value={formData.price}
            required
          />
        </div>
        <div>
          <label htmlFor="description" style={labelStyle}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            onChange={onChange}
            style={textareaStyle}
            value={formData.description}
            required
          />
        </div>

        <div className="text-center">
          <button style={buttonStyle}>
            Confirm Entry
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
