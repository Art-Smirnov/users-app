import { useState } from 'react';

const useSortedItems = (items, initialSortOrder) => {
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedItems = [...items].sort((a, b) => {
    const nameA = a.username.toLowerCase();
    const nameB = b.username.toLowerCase();

    if (sortOrder === 'asc') {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  return {
    sortedItems,
    toggleSortOrder,
    currentSortOrder: sortOrder,
  };
};

export default useSortedItems;
