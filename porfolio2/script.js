let right=document.querySelector('.left')
let show=document.querySelector('.humburger')

let tog=false

show.addEventListener('click',()=>{
    tog=!tog
    if(tog){
        right.setAttribute('id','show')
    }else{
        right.setAttribute('id','')
    }
})
