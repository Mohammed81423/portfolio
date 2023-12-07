let tittle = document.querySelector('input[placeholder="Enter username"]')
let password = document.querySelector('input[placeholder="Email"]')
let btn = document.querySelector('.btn')
let div1 = document.querySelector('.text-container')

let listvals=[]


let text
let passval

let elem

tittle.addEventListener('keyup', (e) => {
    text = e.target.value
    console.log(text)
})

password.addEventListener('keyup', function (r) {
    passval = r.target.value
    console.log(passval)
})
btn.addEventListener('click', (t) => {
    if(tittle.value === ''){
        alert("you must write something")
    
    }
    else{
    let  objinps = {
        "text": text,
        'passval': passval
    }
    listvals.push(objinps)
    console.log(listvals)
    show(listvals)
}

})
function show(){
    let items=listvals.map(function (e,i){
        elem=`<div class="forflex">
        <h4>${e.text}</h4>
        <div class="foredit">
        <span class=""cursor onclick="del(${i})">Delete</span>
        <span id=""color" onclick="edit(${i})">EDIT</span>
        </div>
        <br>
        </div>
        <p>${e.passval}</p>
    </div>`
      

        return elem
        
    })
 



    
            tittle.value=''
            password.value=''
    div1.innerHTML=items.join('')
}
function del(i){
    listvals.splice(i,1)
    show(listvals)
}

function edit(i){
    btn.setAttribute('class','addTodoBtn')
    tittle.value=listvals[i].text
    console.log(text)
    tittle.addEventListener('keyup',function(e){
        text=e.target.value
    })
    password.value=listvals[i].passval

        console.log(passval)
        password.addEventListener('keyup',function(e){
            passval=e.target.value
        })
    let editBtn=document.querySelector('.editBtn')
    editBtn.style.display="inline-block"
    editBtn.addEventListener("click",function(e){
        tittle.value=''
            password.value=''
            listvals[i].text=text
            show(listvals)
            editBtn.style.display="none"
            btn.setAttribute('class','')

    })
    editBtn.style.display="inline-block"
        editBtn.addEventListener("click",function(e){
            password.value=''
                password.value=''
                listvals[i].passval=passval
                show(listvals)
                editBtn.style.display="none"
                btn.setAttribute('class','')
    
        })


}















