import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [newCat, setNewCat] = useState({
    catName: '',
    latinName: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const catPropertyName = name;
    const CatPropertyNewValue = value;
    setNewCat((prevCat) => ({
        ...prevCat,
        [catPropertyName]: CatPropertyNewValue
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic if needed
    onAddCat(newCat);
    // setNewCat({
    //   name: '',
    //   latinName: '',
    //   image: '',
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="catName" value={newCat.name} onChange={handleChange} />
      </label>
      <label>
        Latin Name:
        <input type="text" name="latinName" value={newCat.latinName} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={newCat.image} onChange={handleChange} />
      </label>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
