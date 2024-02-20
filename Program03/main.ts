console.clear();
let username : string="amir khan";
console.log(username.toUpperCase());
console.log(username.toLowerCase());


let words: string[] = username.split(" ");
let TitleCase: string = "";

for (let i = 0; i < words.length; i++) {
    TitleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}

console.log(TitleCase);

// took help from this for titlecase https://github.com/typescriptkamran/exercise3