document.addEventListener("DOMContentLoaded", function() {
    let memo = new Memo(5, 10);
    memo.buildMemo();
});

var Memo = function(rows, columns) {
    this.rows = rows;
    this.columns = columns;

}

Memo.prototype.onMemoCardClick = function(event) {
    event.target.querySelector(".hidden").style.visibility = "visible";
}



Memo.prototype.buildMemo = function() {
    memo = document.querySelector("div.memo");
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
            memo.appendChild(new MemoItem("memoItem", "memo_" + i + "_" + j,
                    "http://icons.iconarchive.com/icons/dapino/girl-in-a-bunny-suit/256/girl-bunny-question-icon.png")
                .generateMemoCardDiv());
        }
        memo.appendChild(new MemoItem("empty", "", "").generateMemoCardDiv());
    }
}

var MemoItem = function(class_, id, url) {
    this.class_ = class_;
    this.id = id;
    this.url = url;
}

MemoItem.prototype.generateMemoCardDiv = function() {
    newDiv = document.createElement("div");
    newDiv.classList.add(this.class_);
    if (this.class_ == "memoItem") {
        newDiv.dataset.url = this.url;
        newDiv.id = this.id;
        newDiv.addEventListener("click", this.onMemoCardClick);
        newDiv.appendChild(this.generateImgForDiv());
    }
    return newDiv;
}

MemoItem.prototype.generateImgForDiv = function() {
    img = document.createElement("img");
    img.src = this.url;
    img.classList.add("hidden");
    return img;
}

MemoItem.prototype.onMemoCardClick = function(event) {
    event.target.querySelector(".hidden").style.visibility = "visible";
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