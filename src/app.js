function genDomName() {
  var pronoun = ["el", "nuestro"];
  var adj = ["buen", "gran"];
  var noun = ["Claudio", "racoon", "bread", "food"];
  var domain = ["com", "es", "cl", "net", "org", "io"];

  let gopronoun = Math.floor(Math.random() * pronoun.length);
  let goadj = Math.floor(Math.random() * adj.length);
  let gonoun = Math.floor(Math.random() * noun.length);
  let godomain = Math.floor(Math.random() * domain.length);

  return (
    pronoun[gopronoun] + adj[goadj] + noun[gonoun] + "." + domain[godomain]
  );
}
console.log(genDomName());
