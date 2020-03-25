document.addEventListener("DOMContentLoaded", function() {
    let memo = new Memo(5, 10);
    memo.buildMemo();
});

var Memo = function(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    lastClickedMemoItem = null;

}

Memo.prototype.onMemoCardClick = function(event) {
    event.target.querySelector(".hidden").style.visibility = "visible";
}



Memo.prototype.buildMemo = function() {
    memo = document.querySelector("div.memo");
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
            memo.appendChild(new MemoItem("memoItem", "memo_" + i + "_" + j,
                    "http://icons.iconarchive.com/icons/dapino/girl-in-a-bunny-suit/256/girl-bunny-question-icon.png", this)
                .generateMemoCardDiv());
        }
        memo.appendChild(new MemoItem("empty", "", "", this).generateMemoCardDiv());
    }
}

var MemoItem = function(class_, id, url, memo) {
    this.class_ = class_;
    this.id = id;
    this.url = url;
    this.memo = memo;
}

MemoItem.prototype.generateMemoCardDiv = function() {
    newDiv = document.createElement("div");
    newDiv.classList.add(this.class_);
    if (this.class_ == "memoItem") {
        newDiv.dataset.url = this.url;
        newDiv.id = this.id;
        newDiv.addEventListener("click", () => { this.onMemoCardClick(this) });
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

MemoItem.prototype.onMemoCardClick = function(clickedMemoItem) {
    if (clickedMemoItem.memo.lastClickedMemoItem == null) {
        clickedMemoItem.memo.lastClickedMemoItem = clickedMemoItem;
        event.target.querySelector(".hidden").style.visibility = "visible";
        //clickedMemoItem.revert();
    } else {
        event.target.querySelector(".hidden").style.visibility = "visible";
        setTimeout(() => {}, 5000);
        if (clickedMemoItem.compare(clickedMemoItem.memo.lastClickedMemoItem)) {
            clickedMemoItem.disable();
            clickedMemoItem.memo.lastClickedMemoItem.disable();
        } else {
            clickedMemoItem.memo.lastClickedMemoItem.revert();
            clickedMemoItem.revert();
        }
        clickedMemoItem.memo.lastClickedMemoItem = null;
    }
}

MemoItem.prototype.revert = function() {
    let memoItemElem = document.getElementById(this.id).querySelector(".hidden");
    //  console.log(document.querySelector("#memo_3_2").querySelector(".hidden").style);
    if (memoItemElem.style.visibility == "hidden") {
        memoItemElem.style.visibility = "visible";
    } else
        memoItemElem.style.visibility = "hidden";
}

MemoItem.prototype.disable = function() {
    document.getElementById(this.id).style.visibility = "hidden";
    document.getElementById(this.id).style.visibility = "hidden";
    this.revert();
}

MemoItem.prototype.compare = function(memoItem) {
    return this.url === memoItem.url;
}



//future use
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