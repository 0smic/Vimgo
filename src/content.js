let result = [];
let currentIndex = 0;

function getResult(){
    result = Array.from(document.querySelectorAll('a h3'))
}

result[currentIndex].style.color = "red";
function highlight(index){
    result.forEach(element => element.style.color = "");
    if(result[index]){
        result[index].style.color = "red";
        result[index].scrollIntoView({behavior: "smooth", block: "center"})
    }
}

document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)){
        console.log("text area");
    }else if(e.key === "j"){
        console.log("j is pressed");
        currentIndex++;
        highlight(currentIndex);
    }else if(e.key === "k"){
        console.log("k is pressed");
        if(currentIndex !== 0){
            currentIndex--;
        }
        highlight(currentIndex);
    }else if(e.key === "Enter"){
        console.log("enter is pressed");
        if(result[currentIndex]){
            result[currentIndex].click();
        }
    }

})

windows.addEventListener("load", getResult);
