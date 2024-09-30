const X_ERROR = "Ошибка валидации X!";
const Y_ERROR = "Ошибка валидации Y!";
const R_ERROR = "Ошибка валидации R!";

const hitResult = {
    true: "hit-true",
    false: "hit-false"
}

async function validateInput(event){
    event.preventDefault();

    const xResult = getValidateX(event);
    const yResult = getValidateY(event);
    const rResult = getValidateR(event);

    if(xResult == null || yResult == null || rResult == null){
        return;
    }
    const url = "/api/";
    const requestData = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            x: xResult,
            y: yResult,
            r: rResult
        })
    }
    fetch(url, requestData).then(response => response.json())
    document
}