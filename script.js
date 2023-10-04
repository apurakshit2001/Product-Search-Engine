// function search(){

// }
const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("productList");
    const product = document.querySelectorAll(".product");
    const productName = storeItems.getElementsByTagName("h2");

    for (let i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName("h2")[0]; //i number product to bujhlam but last a [0] ta kno holo?

        if(match){
            let textValue = match.textContent|| match.innerHTML; //bujhini

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display ="";
            }
            else{
                product[i].style.display ="none"; 
            }
        }
    }
}