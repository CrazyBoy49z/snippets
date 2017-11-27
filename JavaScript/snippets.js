[].slice.call(document.getElementsByClassName('myClass')).forEach(function(element) {
    element.classList.remove('mySecondCalls');
});