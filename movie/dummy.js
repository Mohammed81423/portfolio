let inpt=document.querySelector('.inpt')
let btn=document.querySelector('.btn')
let main=document.querySelector('.main')
btn.addEventListener('click',function(){
console.log(inpt)
fetch(`https://api.themoviedb.org/3/search/movie?api_key=3567ccb5a73bf0b75e2128c34b931769&query=${inpt.value}`)
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data.results)
    data.results
    display(results)
    return data
})

})
function display(results){
    let movie=results.map((e)=>{
      elem=`  <img src="${e.title}" alt="">
      <img src="${e.poster_path}" alt="">
      `
      return elem
      
    })
    main.innerHTML=movie.join('')
}