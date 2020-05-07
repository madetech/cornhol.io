export function getCrossings(corn, geese, foxes) {
  if (foxes === 2 && geese === 1 && !corn) {
    return ['goose', '', 'fox', 'goose', 'fox', '', 'goose'];
  }

  if (geese === 2 && foxes === 1) {
    return ['fox', '', 'goose', 'fox', 'goose', '', 'fox'];
  }
  
  if (geese === 1 && foxes === 1 && corn === 1) {
    return ['goose', '', 'corn', 'goose', 'fox', '', 'goose'];
  }

  if (foxes && corn && geese && (foxes+corn+geese) > 3) {
    return [];
  }

  if (geese === 1 && foxes === 1 && !corn) {
    return ['fox', '', 'goose'];
  }

  if (foxes && corn && !geese) {
    const result = Array(foxes - 1).fill(['fox', '']).flat().concat('fox');
    return result.concat(Array(corn).fill(['', 'corn']).flat());
  }
  
  if (foxes && !corn && !geese) {
    return Array(foxes - 1).fill(['fox', '']).flat().concat('fox');
  }
  
  if (geese && !corn) {
    return Array(geese - 1).fill(['goose', '']).flat().concat('goose');
  }

  if (corn && !geese) {
    return Array(corn - 1).fill(['corn', '']).flat().concat('corn');
  }

  if (corn > 1 && geese > 1)
    return [];

  if (corn === 1 && geese === 2) {
    return ['corn', '', 'goose', 'corn', 'goose', '', 'corn'];
  }

  if (corn === 2 && geese === 1) {
    return ['goose', '', 'corn', 'goose', 'corn', '', 'goose'];
  }

  if (corn === 1 && geese === 1 && !foxes)
    return ['corn', '', 'goose'];

  return [''];
}

export function getCrossingsPossible(corn, geese, foxes) {  
  const crossings = getCrossings(corn, geese, foxes);

  return {
    possible: crossings.length > 0,
    crossings
  };
}