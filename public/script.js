fetch("http://localhost:3001/users")
.then(res=> res.json())
.then(data=>{
    console.log(data.items)

    // <div class="user">
    //   <h2>User name</h2>
    //   <p>User e-mail</p>
    // </div>
    const usersEl=document.querySelector('.users') 
    for(let item of data.items){
      const userEl=document.createElement('div')
      userEl.classList.add ('user')
      userEl.innerHTML=` <h2>${item.name}</h2>
      <p>${item.email}</p>  `
      usersEl.append(userEl)
    }


})