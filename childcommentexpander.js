// ==UserScript==
// @name         Child Comment Expander
// @namespace    https://github.com/SirNeon618
// @version      0.1
// @description  Expands child comments
// @author       SirNeon
// @include      https://www.reddit.com/r/SubredditDramaDrama/*
// @include      https://www.reddit.com/r/ThePopcornStand/*
// @include      https://www.reddit.com/r/SubredditAnalysis/*
// @grant        none
// ==/UserScript==

var i = 0;
var child_comments = document.getElementsByClassName('showreplies');

for(i = 0; i < child_comments.length; i++) {
    child_comments[i].click();
}
