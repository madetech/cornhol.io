export function getCrossings(corn, geese) {
  if (geese && !corn) {
    return Array(geese).fill('goose');
  }

  if (corn && !geese) {
    return Array(corn).fill('corn');
  }

  if (corn > 1 && geese > 1)
    return [];

  if (corn == 1 && geese == 2) {
    return ['corn', '', 'goose', 'corn', 'goose', '', 'corn'];
  }

  if (corn == 2 && geese == 1) {
    return ['goose', '', 'corn', 'goose', 'corn', '', 'goose'];
  }

  if (corn == 1 && geese == 1)
    return ['corn', '', 'goose'];

  return [];
}

export function getCrossingsPossible(corn, geese) {
  if(!corn && !geese) {
    return {
      possible: true,
      crossings: []
    }
  }
  
  const crossings = getCrossings(corn, geese);
  return {
    possible: crossings.length > 0,
    crossings
  }
}