function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../../assets/svgs/', true, /\.svg$/));
