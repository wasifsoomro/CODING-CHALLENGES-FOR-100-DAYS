//create object with multiple lists
let skills = {
    languages: ["Typesscript", "Python", "Javascript"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["git", "docker","webpack"]
}
//logging console by accessing one element from every key's value
console.log(`language: ${skills["languages"][0]}
 Framework: ${skills["frameworks"][0]}
 Tools: ${skills["tools"][0]}`)