document.addEventListener("DOMContentLoaded", function() {
    links = ["http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png"
    ];
    let memo = new Memo(5, 10, links);
    memo.buildMemo();

});

var Memo = function(rows, columns, links) {
    this.rows = rows;
    this.columns = columns;
    this.lastClickedMemoItems = [];
    this.links = links; //potem trzeba dodac sprawdzenie czy dlugosc tablicy jest ok

}

Memo.prototype.onMemoCardClick = function(event) {
    event.target.querySelector(".hidden").style.visibility = "visible";
}



Memo.prototype.buildMemo = function() {
    let linkIterator = 0;
    memo = document.querySelector("div.memo");
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
            memo.appendChild(new MemoItem("memoItem", "memo_" + i + "_" + j,
                    this.links[linkIterator], this)
                .generateMemoCardDiv());
            linkIterator++;
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
    console.log(clickedMemoItem);
    if (clickedMemoItem.memo.lastClickedMemoItems.length < 2) {
        clickedMemoItem.memo.lastClickedMemoItems.push(clickedMemoItem);
        event.target.querySelector(".hidden").style.visibility = "visible";
        //clickedMemoItem.revert();
        if (clickedMemoItem.memo.lastClickedMemoItems.length == 2) {
            setTimeout(function() { clickedMemoItem.processResult(); }, 3000)
        }
    } else {}

}

MemoItem.prototype.processResult = function() {
    console.log(this.memo.lastClickedMemoItems[0].url);
    console.log(this.memo.lastClickedMemoItems[1].url);
    if (this.memo.lastClickedMemoItems[0].equalsa(this.memo.lastClickedMemoItems[1])) {
        this.memo.lastClickedMemoItems[0].disable();
        this.memo.lastClickedMemoItems[1].disable();
    } else {
        this.memo.lastClickedMemoItems[0].revert();
        this.memo.lastClickedMemoItems[1].revert();
    }
    this.memo.lastClickedMemoItems = [];
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
    this.revert();
    document.getElementById(this.id).style.visibility = "hidden";

}

MemoItem.prototype.equalsa = function(memoItem) {
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

function pausecomp(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < millis);
}