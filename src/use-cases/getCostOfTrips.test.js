import { getCostOfTrips } from './getCostOfTrips';

describe('getCostOfTrips', () => {
  it('costs .25 to transport 1 bag', () => {
    const cost = getCostOfTrips(1);
    expect(cost).toBe(.25);
  });

  it('costs .75 to transport 2 bags', () => {
    const cost = getCostOfTrips(2);
    expect(cost).toBe(.75);
  });

  it('costs 1.25 to transport 3 bags', () => {
    const cost = getCostOfTrips(3);
    expect(cost).toBe(1.25);
  });

  it('costs 0 to transport 0 bags', () => {
    const cost = getCostOfTrips(0);
    expect(cost).toBe(0);
  });
});