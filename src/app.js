var pronoun = ["el", "nuestro"];
var adj = ["buen", "gran"];
var noun = ["Claudio", "racoon", "bread", "food"];
var domain = ["com", "es", "cl", "net", "org", "io"];

for (let ix = 0; ix < pronoun.length; ix++) {
  for (let ic = 0; ic < adj.length; ic++) {
    for (let iv = 0; iv < noun.length; iv++) {
      for (let ib = 0; ib < domain.length; ib++) {
        console.log(pronoun[ix]+adj[ic]+noun[iv]+'.'+domain[ib]);
      }
    }
  }
}
