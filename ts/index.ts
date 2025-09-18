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
        title.innerHTML = "Password";
        title.style.color = "black";
        stage = 0;
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
            bro.width = 500;
            bro.height = 500;
            bro.src = "./image/umm.png";
            title.innerHTML = "Enter Password";
            title.style.color = "black";
            stage = 0;
            break;
    }

    nameInput.value = "";
});