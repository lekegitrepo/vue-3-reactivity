const depsMap = new Map();

function track(key) {
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(effect);
}
