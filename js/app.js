document.addEventListener("DOMContentLoaded", function() {
    buildMemo(5, 10);
});




function generateArrayOfPairsInRandomOrder(numberOfUniqueElements) {
    let left = generateArrayOfUniqueNumbers(numberOfUniqueElements);
    let right = generateArrayOfUniqueNumbers(numberOfUniqueElements);
    return left.concat(right);
}

function generateArrayOfUniqueNumbers(numberOfElements) {
    var arr = [];
    while (arr.length < numberOfElements) {
        var r = Math.floor(Math.random() * numberOfElements) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

function onMemoCardClick(event) {
    event.target.querySelector(".hidden").style.visibility = "visible";
    console.log(event.target.querySelector(".hidden"))
}

function generateMemoCardDiv(klasa, url, id) {
    newDiv = document.createElement("div");
    newDiv.classList.add(klasa);
    if (klasa == "memoItem") {
        newDiv.dataset.url = url;
        newDiv.id = id;
        newDiv.addEventListener("click", onMemoCardClick);
    }
    newDiv.appendChild(generateImgForDiv("http://icons.iconarchive.com/icons/dapino/girl-in-a-bunny-suit/256/girl-bunny-question-icon.png"));
    return newDiv;
}



function generateImgForDiv(url) {
    img = document.createElement("img");
    img.src = url;
    img.classList.add("hidden");
    return img;
}

function buildMemo(rows, columns) {
    memo = document.querySelector("div.memo");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            memo.appendChild(generateMemoCardDiv("memoItem", "tekst", "memo_" + i + "_" + j));
        }
        memo.appendChild(generateMemoCardDiv("empty", ""));
    }
}



//buildMemo(10, 10)