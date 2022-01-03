// Js File to add to cart
var addItemId = 0;
function addTocart(item){
    addItemId +=1;
        var selectedItem = document.createElement('div');
        selectedItem.classList.add('cartImg');
        selectedItem.setAttribute('id',addItemId);
        var img = document.createElement('img');
        img.setAttribute('src,item.children[0].currentSrc');
        var cartItems = document.getElementById('title');
        selectedItem.append(img);
        cartItems.append(selectedItem);

}