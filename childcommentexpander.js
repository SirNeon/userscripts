// ==UserScript==
// @name         Child Comment Expander
// @namespace    https://github.com/SirNeon618
// @version      0.3
// @description  Expands child comments
// @author       SirNeon
// @include      http://www.reddit.com/r/SubredditDramaDrama/comments/*
// @include      http://www.reddit.com/r/ThePopcornStand/comments/*
// @include      http://www.reddit.com/r/SubredditAnalysis/comments/*
// @grant        none
// ==/UserScript==

var i = 0;
var child_comments = document.getElementsByClassName('showreplies');

for(i = 0; i < child_comments.length; i++) {
    child_comments[i].click();
}
