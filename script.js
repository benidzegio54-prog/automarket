function searchCar() {

    let car = document.getElementById("carSearch").value.trim();

    if (car === "") {
        alert("გთხოვ, ჩაწერე მანქანის დასახელება!");
        return;
    }

    let url = "https://www.google.com/search?q=" +
        encodeURIComponent("site:myauto.ge/ka/pr/ " + car);

    window.open(url, "_blank");

}

function searchSpecific(car) {

    let url = "https://www.google.com/search?q=" +
        encodeURIComponent("site:myauto.ge/ka/pr/ " + car);

    window.open(url, "_blank");

}