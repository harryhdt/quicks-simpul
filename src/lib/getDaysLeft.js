// @ts-nocheck
export default function timeUnitsBetween(startDate, endDate) {
  let delta = Math.abs(endDate - startDate) / 1000;
  const isNegative = startDate > endDate ? -1 : 1;
  let result = [
    ["days", 24 * 60 * 60],
    ["hours", 60 * 60],
    ["minutes", 60],
    ["seconds", 1],
  ].reduce(
    (acc, [key, value]) => (
      (acc[key] = Math.floor(delta / value) * isNegative),
      (delta -= acc[key] * isNegative * value),
      acc
    ),
    {}
  );
  if (result.days) {
    return result.days;
  } else {
    return 0;
  }
}
