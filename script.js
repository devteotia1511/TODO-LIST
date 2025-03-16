const addBtn = document.getElementById('add-btn');
const TODOinput = document.getElementById('TODO-input');
const todoitemscontainer = document.getElementById('List-items');

function updateDateTime() {
    let now = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString('en-US', options); 
    document.getElementById("date-div").innerText = formattedDate;
}

updateDateTime();
document.getElementById("date-div").style.color = "darkred";

addBtn.addEventListener('click', () => {
    const value = TODOinput.value;
    
    const li = document.createElement('li');
    li.innerText = value;

    const delButton = document.createElement('button');
    delButton.innerText = 'X';
    delButton.style.color = "Red"
    delButton.style.marginLeft = '30px';
    li.appendChild(delButton)

    delButton.addEventListener('click', ()=>{
        li.remove()
    })

    if (value!=''){
        todoitemscontainer.appendChild(li);
        TODOinput.value = ''
    }
    else{
        alert("Enter your task and then Add")
    }


})