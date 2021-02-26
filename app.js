
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ["com", "io", "on", "er"];

//REPLACE AT THE END

for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {
            for (let i = 0; i < ext.length; i++) {

                let res = noun[z].substring(noun[z].length - ext[i].length);
                let nounModified = noun[z].substring(0, noun[z].length - ext[i].length);
                let domainName = `${pronoun[x]}${adj[y]}${noun[z]}.${ext[i]}`; //using JavaScript Template String
                if (res == ext[i]) {
                    console.log(pronoun[x] + adj[y] + nounModified + "." + ext[i]); //using "normal" concatenation
                } else {
                    console.log(domainName);
                }

            }
        }

    }
}

/* TO FIND AND REPLACE ANYWHERE IN THE URL

  let pronounLen= pronoun.length;
  let adjLen = adj.length;
  let nounLen = noun.length;
  let extLen = ext.length;

  for (let i=0; i<pronounLen; i++){
      for (let j=0; j<adjLen; j++){
          for (let k=0; k<nounLen; k++){
              for (let l=0; l<extLen; l++){
                let url = `${pronoun[i]}${adj[j]}${noun[k]}`;
                if (url.includes(ext[l])){
                    url = url.replace(ext[l], '');
                    
                }
                console.log(`${url}.${ext[l]}`);
              }
          }
      }
  }

  */






