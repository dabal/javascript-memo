document.addEventListener("DOMContentLoaded", function() {
    links = ["http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bear-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Beaver-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bee-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bull-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Cat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Chicken-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Cow-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Crab-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Crocodile-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Deer-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Dog-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Dolphin-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Duck-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Eagle-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Elephant-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Fish-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Frog-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Giraffe-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Goat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Gorilla-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Hippo-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Horse-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Kangaroo-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Koala-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Lion-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Lizard-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Lobster-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Monkey-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Mouse-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Octopus-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Owl-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Penguin-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Pig-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Rabbit-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Raccoon-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Rat-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Rhino-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Seal-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Shark-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Sheep-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Snail-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Snake-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Squirrel-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Swan-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Tiger-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Tuna-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Turtle-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Whale-icon.png",
        "http://icons.iconarchive.com/icons/martin-berube/square-animal/128/Wolf-icon.png"
    ];
    rows = parseInt(window.location.search.substr(1).split("&")[0].split("=")[1]);
    columns = parseInt(window.location.search.substr(1).split("&")[1].split("=")[1]);

    if (rows == null || rows < 1) {
        rows = 4;
    }
    if (columns == null || columns < 1) {
        columns = 4;
    }

    if (columns * rows % 2 !== 0 || columns * rows > 2 * links.length) {
        alert("liczba elementów jest nie podzielna przez 2 - potrzebne są pary. Albo podałeś za dużo - moze by maks 50 par");
        rows = 4;
        columns = 4;
    }

    let memo = new Memo(rows, columns, links);
    memo.buildMemo();

    document.querySelector("#resetClicksButton").addEventListener("click", function() { memo.resetLastClickedElement(memo); });

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
    let sequenceArray = generateArrayOfPairsInRandomOrder((this.rows * this.columns) / 2);
    memo = document.querySelector("div.memo");
    let imgUrl = "";
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
            imgUrl = this.links[sequenceArray[linkIterator]];
            memo.appendChild(new MemoItem("memoItem", "memo_" + i + "_" + j,
                    imgUrl, this)
                .generateMemoCardDiv());
            linkIterator++;
        }
        memo.appendChild(new MemoItem("empty", "", "", this).generateMemoCardDiv());
    }
}

Memo.prototype.resetLastClickedElement = function(memo) {
    memo.lastClickedMemoItems.forEach(element => {
        element.revert();

    });
    memo.lastClickedMemoItems = [];
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
            setTimeout(function() { clickedMemoItem.processResult(); }, 2000)
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