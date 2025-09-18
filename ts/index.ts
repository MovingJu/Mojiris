const form = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const title = document.querySelector("#title");
const bro = document.querySelector("#bro");

let stage: number = 0;

form.addEventListener('submit', (event) => {
    if (!(nameInput instanceof HTMLInputElement)) { return; }
    if (!(title instanceof HTMLHeadingElement)) { return; }
    if (!(bro instanceof HTMLImageElement)) { return; }
    event.preventDefault(); // 폼의 기본 동작(새로고침) 막기
    const name = nameInput.value.trim();
    console.log(stage);
    console.log(name);
    if (!name) {
        alert('이 모지리 샛기');
        title.innerHTML = "Enter Password";
        title.style.color = "black";
        stage = 0;
        bro.width = 0;
        bro.height = 0;
        return;
    }
    switch (true) {
        case (stage === 0 && name === "Password"):
            title.innerHTML = "Password is incorrect";
            title.style.color = "red";
            stage++;
            break;
        case (stage === 1 && name == "incorrect"):
            title.innerHTML = "Try again.";
            title.style.color = "red";
            stage++;
            break;
        case (stage === 2 && name === "again"):
            title.innerHTML = "Please try again later";
            title.style.color = "red";
            stage++;
            break;
        case (stage === 3 && name === "again later"):
            bro.width = 800;
            bro.height = 800;
            bro.src = "./image/umm.png";
            bro.style.position = "absolute"; 
            bro.style.top = "50%";
            bro.style.left = "50%";
            bro.style.transform = "translate(-50%, -50%)";
            bro.style.zIndex = "999";         
            bro.style.pointerEvents = "none";
            title.innerHTML = "Enter Password";
            title.style.color = "black";
            stage = 0;
            break;
        default:
            title.innerHTML = "Enter Password";
            title.style.color = "black";
            stage = 0;
            bro.width = 0;
            bro.height = 0;
            break;
    }

    nameInput.value = "";
});