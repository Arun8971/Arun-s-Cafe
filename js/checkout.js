function buyNow(headId, priceId) {

    let alertbox=document.querySelector('.alert-burger');

    alertbox.style.display='block';

    localStorage.setItem("itemName", headId);
    localStorage.setItem("itemPrice", priceId);
}


function checkout(){
    let address=document.getElementById("address").value;
    if(address){
        var itemName = localStorage.getItem('itemName');
        var itemPrice = localStorage.getItem('itemPrice');

        var greeting = `Greetings from Arun's Cafe\n\nYour order: ${itemName}\nPrice: ${itemPrice} is Confirmed..! & We'll deliver it to you soon. Enjoy your meal!\n\nDelivery address: ${address}`;

        alert(greeting);

            let alertbox=document.querySelector('.alert-burger');

            alertbox.style.display='none';
    }
    
    else{
        let msg="Please enter valid address for delivery";
        alert(msg);

            let alertbox=document.querySelector('.alert-burger');

            alertbox.style.display='block';
    }
}

