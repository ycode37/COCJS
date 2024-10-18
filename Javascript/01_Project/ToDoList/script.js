const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    event.preventDefault(); //Form submit nahi hone dega by which you can use enter button
    if(inputBox.value === ''){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //  Jo naya li element create kiya gaya hai, usse 
        // existing list (listContainer element) ke end mein add kiya ja raha hai.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        // Jab li pe click hoga, toh
        //  uske CSS class "checked" ko toggle (on/off) karega. Matlab, agar item already 
        // checked hai toh unchecked ho jayega, aur agar unchecked hai toh checked ho jayega.
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // span ka parent element (jo ki li hota hai) ko remove kar diya jayega. Matlab, wo task delete ho jayega.
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();