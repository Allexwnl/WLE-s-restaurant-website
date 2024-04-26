const badge = document.getElementById("cartBadge");

let cartCount = localStorage.getItem('cartcount');
if (cartCount == 0) {
    badge.style.display = "none";
} else {
    badge.style.display = "inline-block";
    badge.innerText = cartCount;
}