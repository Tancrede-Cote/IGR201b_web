class TrieNode {
    constructor() {
    
        // Initialize the child Node
        // array with 26 nulls
        this.children = Array(26).fill(null);
        
        // Initialize wordEnd to the false
        // indicating that no word ends here yet
        this.isEndOfWord = false;
    }
}

// Method to search a key in the Trie
function search(root, key) {

    // Initialize the curr pointer with the root node
    let curr = root;

    // Iterate across the length of the string
    for (let c of key) {

        // Check if the node exists for the 
        // current character in the Trie
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (curr.children[index] === null) 
            return false;

        // Move the curr pointer to the 
        // already existing node for the 
        // current character
        curr = curr.children[index];
    }

    // Return true if the word exists 
    // and is marked as ending
    return curr.isEndOfWord;
}

function isPrefix(root, key)
{
    let current = root;
    for (let c of key) {
        let index = c.charCodeAt(0) - "a".charCodeAt(0);

        // If character doesn't exist, return false
        if (current.children[index] === null) {
            return false;
        }
        current = current.children[index];
    }

    return true;
}

const student = document.getElementById("student");
const module = document.getElementById("module");
const students = document.getElementById("students");
const slist = students.getElementsByTagName("li");
const modules = document.getElementById("modules");
const mlist = modules.getElementsByTagName("li");
//const pre 
student.addEventListener("keyup", () => {
  for (let item of slist){
    console.log(student.value);
    if(!item.innerHTML.startsWith(student.value)){
      item.style.display="none";
    } else {
        item.style.display="";
    }
  }
});

module.addEventListener("keyup", () => {
  for (let item of mlist){
    console.log(module.value);
    if(!item.innerHTML.startsWith(module.value)){
      item.style.display="none";
    } else {
        item.style.display="";
    }
  }
});
