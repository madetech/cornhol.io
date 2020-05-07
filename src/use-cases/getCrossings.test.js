import { getCrossings, getCrossingsPossible } from './getCrossings';

describe('getCrossings', () => {
  it('will take 1 crossing when you have 1 goose', () => {
    const crossings = getCrossings(0,1);
    expect(crossings).toStrictEqual(['goose']);
  });

  it('will take 1 crossing when you have 1 bag of corn', () => {
    const crossings = getCrossings(1,0);
    expect(crossings).toStrictEqual(['corn']);
  });

  it('will take 3 crossings when you have 2 geese', () => {
    const crossings = getCrossings(0,2);
    expect(crossings).toStrictEqual(['goose', '', 'goose']);
  });

  it('will take 3 crossings when you have 2 bags of corn', () => {
    const crossings = getCrossings(2,0);
    expect(crossings).toStrictEqual(['corn', '', 'corn']);
  });

  it('will take 3 crossings when you have 1 bag of corn and 1 goose', () => {
    const crossings = getCrossings(1,1);
    expect(crossings).toStrictEqual(['corn', '', 'goose']);
  });

  it('is not possible to cross with 2 bag of corn and 3 geese', () => {
    const crossings = getCrossings(2,3);
    expect(crossings).toStrictEqual([]);
  });

  it('is not possible to cross with 2 bag of corn and 2 geese', () => {
    const crossings = getCrossings(2,2);
    expect(crossings).toStrictEqual([]);
  });

  it('will take 7 crossings when you have 1 bag of corn and 2 geese', () => {
    const crossings = getCrossings(1,2);
    expect(crossings).toStrictEqual(['corn', '', 'goose', 'corn', 'goose', '', 'corn']);
  });

  it('will take 7 crossings when you have 2 bag of corn and 1 goose', () => {
    const crossings = getCrossings(2,1);
    expect(crossings).toStrictEqual(['goose', '', 'corn', 'goose', 'corn', '', 'goose']);
  });

  it('will take 0 crossings when you have 0 bags of corn and 0 geese', () => {
    const crossings = getCrossings(0,0);
    expect(crossings).toStrictEqual([]);
  });

  it('will take 0 crossings and be possible when you have 0 bags of corn and 0 geese', () => {
    const crossings = getCrossingsPossible(0,0);
    expect(crossings).toStrictEqual({
      crossings: [],
      possible: true
    });
  });

  it('will take 3 crossings and be possible when you have 1 bags of corn and 1 geese', () => {
    const crossings = getCrossingsPossible(1,1);
    expect(crossings).toStrictEqual({
      crossings: ['corn', '', 'goose'],
      possible: true
    });
  });

  it('will not be possible when you have 10 bags of corn and 10 geese', () => {
    const crossings = getCrossingsPossible(10,10);
    expect(crossings).toStrictEqual({
      crossings: [],
      possible: false
    });
  });
});