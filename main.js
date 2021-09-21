let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let ulList = document.querySelector("#ulList");
const myArray = [];
let nrTasks = document.querySelector("#nrTasks");
let warning = document.querySelector("#warning");
let tasksCompleted = document.querySelector("#tasksCompleted")
let completedCount = 0;

tasksCompleted.innerHTML = completedCount + " completed";
//Knapp som lägger till punkter på ToDo-listan
btn.addEventListener("click", function () {

    const text = input.value;
    myArray.push(text);

    if (input.value == "") {
        warning.innerHTML = "Du måste ange text!";
        return;
    } else {
        warning.innerText = "";
    }



    let newListItem = document.createElement('li');
    ulList.appendChild(newListItem);

    const itemLabel = document.createElement('span');
    itemLabel.innerHTML = text;
    newListItem.appendChild(itemLabel);

    //newListItem.textContent = myArray[myArray.length -1];

    //nrTasks.innerHTML = myArray.length;
    console.log(ulList);
    input.value = "";

    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#X1F5D1";
    trashcan.setAttribute("class", "trashcan");
    newListItem.appendChild(trashcan);

    //Lägg till klick på våra ToDos i listan
    itemLabel.addEventListener("click", function () {
        if (itemLabel.getAttribute("class") == "completed") {
            itemLabel.setAttribute("class", "");
            completedCount--;
        } else {
            itemLabel.setAttribute("class", "completed");
            completedCount++;
        }
        //tasksCompleted.innerHTML = `${completedCount} completed`;
        tasksCompleted.innerHTML = completedCount + " completed"
    });

    //Lägg till klick på vår trashcan
    trashcan.addEventListener("click", function() {
        newListItem.remove();
    })


});