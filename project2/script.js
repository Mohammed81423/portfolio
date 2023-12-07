let right=document.querySelector('.right')
let equal=document.querySelector('.equal')
let heroDiv=document.querySelector('.hero-div')
// let para=document.querySelector('.para')

let show=false

equal.addEventListener('click',function(){
    let showstate=!show
    if(showstate){
        right.setAttribute('id','burger')
    }else{
        right.setAttribute('id','')
    }
})

fetch('https://dummyjson.com/products')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    let result=(data.products)
    console.log(result)
    showitem(result)
    return result



})
function showitem(result){
 let mapval=result.map((e)=>{
    elem=`
    <img src="${e.thumbnail}" alt="">
    
    `
    // <p class="title">${e.title}</p>
    // <p>${e.price}</p>
    // <p>${e.description}</p>
    return elem
 })
 heroDiv.innerHTML=mapval.join('')
}



