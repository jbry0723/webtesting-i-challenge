module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement<=19)
  {item.enhancement+=1}
  else {null}
  return item
}

function fail(item) {
 if (item.enhancement<=14)
 {item.durability-=5}
if(item.enhancement>=15)
{item.durability-=10}
if(item.enhancement>=16)
{item.enhancement-=1}
 return item
}

function repair(item) {
  item.durability=100
  return item;
}

function get(item) {
  return { ...item };
}
