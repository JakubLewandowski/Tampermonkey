// ==UserScript==
// @name         Outlook reklamy
// @namespace    http://tampermonkey.net/
// @version      2024-10-22
// @description  try to take over the world!
// @author       You
// @match        https://outlook.live.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=live.com
// @grant        none
// ==/UserScript==

const elements = document.querySelectorAll('[id*="OwaContainer"]');

elements.forEach(element => {
    element.style.display = 'none';
});
