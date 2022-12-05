var searchformel = document.querySelector('#search-form');
let clicked  = moment('.buttonsearch');
let $clicked = $(".buttonsearch");
$clicked.on("click", citysearch);
$clicked.on("click", searchSave);
$("input").keyup(function () {
    if (event.key === "Enter") {
        $clicked.click();
    }
})