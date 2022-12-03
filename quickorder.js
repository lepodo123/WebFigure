function quickorder_page(){
    var page = document.getElementById('quick_order_page');
    var bd =document.body;
    bd.style.overflowY = "hidden";
    page.style.display = 'block';
}
function cancel_page(){
    var page = document.getElementById('quick_order_page');
    var bd = document.body;
    bd.style.overflowY = "auto";
    page.style.display = 'none';
}
