// ==UserScript==
// @name         Outlook ads
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  remove ads from outlook
// @author       You
// @match        https://outlook.live.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=live.com
// @grant        none
// ==/UserScript==

const elements = document.querySelectorAll('[id*="OwaContainer"]');

elements.forEach(element => {
    element.style.display = 'none';
});
