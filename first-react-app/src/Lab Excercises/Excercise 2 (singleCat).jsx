import React, { useState } from 'react';
import AddCatForm from './AddCatForm';
import catsData from './catData';

// State hooks
const IndividualCats = () => {
  const [reversed, setReversed] = useState(false); //state variable to track if list is reversed.
  const [filteredFamily, setFilteredFamily] = useState(null); // A state variable to store the currently filtered family.
  const [displayedCats, setDisplayedCats] = useState([...catsData]); //  A state variable to store the cats that will be displayed based on sorting, reversing, and filtering.

  const filterByFamily = (family) => {
    setFilteredFamily(family);
    setReversed(false);
    sortCats([...catsData]); // Reset the sorting when filtering
  };

  const resetFilter = () => {
    setFilteredFamily(null); // resets the filtered family
    setReversed(false); // reset the reversed state
    sortCats([...catsData]); // Reset the sorting when resetting filter
  };

  const sortCats = (catsToSort) => {
    const sortedCats = catsToSort.sort((a, b) => a.catName.localeCompare(b.catName, undefined, { numeric: true, sensitivity: 'base' }));
    setDisplayedCats([...sortedCats]);
  };

  const handleSort = () => {
    const sortedCats = [...displayedCats].sort((a, b) => a.catName.localeCompare(b.catName, undefined, { numeric: true, sensitivity: 'base' }));
    setDisplayedCats(sortedCats);
    setReversed(false);
  };

  const handleReverse = () => {
    setDisplayedCats([...displayedCats].reverse());
    setReversed((prev) => !prev);
  };

  const handleAddCat = (newCat) => {
    // Add the new cat to the displayedCats array
    setDisplayedCats([...displayedCats, { ...newCat, id: displayedCats.length + 1 }]);
    setReversed(false);
    sortCats([...displayedCats, { ...newCat, id: displayedCats.length + 1 }]);
  };

  const handleDeleteCat = (catId) => {
    // Filter out the cat with the specified id
    const updatedCats = displayedCats.filter((cat) => cat.id !== catId);
    setDisplayedCats(updatedCats);
  };

  return ( // rendering UI
    <div>
      <AddCatForm onAddCat={handleAddCat} />
      <button onClick={handleSort}>Sort Alphabetically</button>
      <button onClick={handleReverse}>Reverse List</button>
      <button onClick={() => filterByFamily('Panthera')}>Filter Panthera Family</button>
      <button onClick={resetFilter}>Reset Filter</button>
      <ul>
        {displayedCats.map((cat) => (
          <li key={cat.id}>
            {cat.catName} - {cat.latinName}, {cat.image}
            <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualCats;
