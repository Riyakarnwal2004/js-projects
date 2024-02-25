let arr=[` What do you call a boomerang that won’t come back?
A stic`,` What does a cloud wear under his raincoat?
Thunderwea`,` Two pickles fell out of a jar onto the floo What did one say to the other?
Dill with i`,` What time is it when the clock strikes 13?
Time to get a new cloc`,` How does a cucumber become a pickle?
It goes through a jarring experienc`]

let randomindex=Math.floor(Math.random()*arr.length)


let a=document.querySelector("span")
a.innerHTML=arr[randomindex]