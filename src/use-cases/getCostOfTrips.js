export function getCostOfTrips(trips) {
  return Math.max(.5 * (trips - 1) + .25, 0);
}