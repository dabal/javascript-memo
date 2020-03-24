document.addEventListener("DOMContentLoaded", function() {
    let memo = new Memo(5, 10);
    memo.buildMemo();
});

var Memo = function(rows, columns) {
    this.rows = rows;
    this.columns = columns
}

Memo.prototype.onMemoCardClick = function(event) {
    event.target.querySelector(".hidden").style.visibility = "visible";
    console.log(event.target.querySelector(".hidden"))
}

Memo.prototype.generateMemoCardDiv = function(klasa, url, id) {
    newDiv = document.createElement("div");
    newDiv.classList.add(klasa);
    if (klasa == "memoItem") {
        newDiv.dataset.url = url;
        newDiv.id = id;
        newDiv.addEventListener("click", this.onMemoCardClick);
    }
    newDiv.appendChild(this.generateImgForDiv("http://icons.iconarchive.com/icons/dapino/girl-in-a-bunny-suit/256/girl-bunny-question-icon.png"));
    return newDiv;
}

Memo.prototype.generateImgForDiv = function(url) {
    img = document.createElement("img");
    img.src = url;
    img.classList.add("hidden");
    return img;
}

Memo.prototype.buildMemo = function() {
    memo = document.querySelector("div.memo");
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
            memo.appendChild(this.generateMemoCardDiv("memoItem", "tekst", "memo_" + i + "_" + j));
        }
        memo.appendChild(this.generateMemoCardDiv("empty", ""));
    }
}

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