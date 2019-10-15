var voteState = false;

function upvote(id) {
    var xhr = new XMLHttpRequest();
    var upvoteButton = document.querySelector("button[name='upvote']");
    var voteCount = document.querySelector("#vote-count");
    var count = 0;

    if (!voteState) {
        xhr.open('POST', "http://localhost:8080/facts/" + id + "/upvote", true)
        // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.send();

        upvoteButton.classList.remove("submit");
        upvoteButton.classList.add("secondary");
        upvoteButton.innerHTML = "<i class='fas fa-sort-amount-up'></i> you upvoted this fact";
        
        count = parseInt(voteCount.innerHTML);
        voteCount.innerHTML = count + 1;

        voteState = true;

    } else {
        xhr.open('POST', "http://localhost:8080/facts/" + id + "/downvote", true)
        // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.send();
        
        upvoteButton.classList.remove("secondary");
        upvoteButton.classList.add("submit");
        upvoteButton.innerHTML = "<i class='fas fa-sort-amount-up'></i> upvote this fact";

        count = parseInt(voteCount.innerHTML);
        voteCount.innerHTML = count - 1;

        voteState = false;
    }
}