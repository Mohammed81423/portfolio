let inpt=document.querySelector('.inpt')
let btn=document.querySelector('.btn')
let main=document.querySelector('.search-result')


btn.addEventListener('click',function(){

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3567ccb5a73bf0b75e2128c34b931769&query=${inpt.value}`)
    .then((Response)=>{
        return Response.json()
    })
  
    .then((data)=>{
        console.log(data)
        // console.log(data.results)
         let alldata=data.results
        display(alldata)
        return data
    })

function display(alldata){
    let movie=alldata.map((e)=>{
      elem=`
            <h1>${e.title}</h1>
            <h1>${e.overview
            }</h1>
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="">



      
        `
        return elem

    })
    main.innerHTML=movie.join('')
}
  
   
        

})


