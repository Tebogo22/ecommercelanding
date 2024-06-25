const myItems = [
	{productImage: 'white-smart-watch-blue-background-3d-rendering-front-view-hyper-realistic_1121334-7264.jpg', productName: 'White smart watch', productPrice: 4326},
	{productImage: 'phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg', productName: 'Phone screen', productPrice: 8726},
	{productImage: 'white-controller-with-black-green-buttons-it_1240970-12.jpg', productName: 'White Controller', productPrice: 626},
	{productImage: 'gold-black-headphones-with-word-wireless-side_1121334-1701.jpg', productName: 'Headphones', productPrice: 2866},
	{productImage: 'full-screen-smartphone-mockup-design_53876-65968.jpg', productName: 'Smartphone', productPrice: 726},
	{productImage: 'golden-smart-watch-white-background-3d-rendering-front-view-hyper-realistic_1121334-7344.jpg', productName: 'Watch', productPrice: 3626},
	{productImage: 'smartwatch_1121334-4301.jpg', productName: 'Smart watch', productPrice: 4426},
	{productImage: 'golden-smart-watch-white-background-3d-rendering-front-view-hyper-realistic_1121334-7490.jpg', productName: 'Watch', productPrice: 4265},
	{productImage: 'rendering-smart-home-device_23-2151039376.jpg', productName: 'Smart', productPrice: 6526},
	{productImage: 'helmet-mock-up_1310-158.jpg', productName: 'Helmet', productPrice: 2768},
	{productImage: 'rendering-smart-home-device_23-2151039300.jpg', productName: 'Smart device', productPrice: 7726},
	{productImage: 'istockphoto-1191600415-1024x1024.jpg', productName: 'Item', productPrice: 7826},
	{productImage: 'red-headphones-isolated-closeup_271825-28.jpg', productName: 'Headphones', productPrice: 8298},
	{productImage: 'macbook-pro-mockup_106244-1613.jpg', productName: 'Macbook', productPrice: 2766},
	{productImage: 'red-gold-headphones-digital-device_53876-97303.jpg', productName: 'Moteme', productPrice: 2645},
	{productImage: 'modern-design-red-color-wireless-earphones-isolated-blue-pastel-color-background_47469-1460.jpg', productName: 'Smartphone', productPrice: 7926},
	{productImage: 'realistic-smartphone-with-white-screen_23-2147851147.jpg', productName: 'Smartphone', productPrice: 926},
	{productImage: 'modern-minimal-headphone-branding-mockup_439185-9242.jpg', productName: 'Headphones', productPrice: 726},
	{productImage: 'premium-mobile-phone-screen-mockup-template_53876-81688.jpg', productName: 'Phone screen', productPrice: 2676},
	{productImage: 'phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg', productName: 'Phone screen', productPrice: 3226},
	{productImage: 'pink-headphones-wireless-digital-device_53876-96804.jpg', productName: 'Headphones', productPrice: 263}
]
/*
//A function to display items
function displayItems(arrayItems){
	let itemHolder = ''
	for(let i = 0; i < 8; i++){
		itemHolder += `
						<div class="item">
					 		<div id="item-img"><img src="Items/${arrayItems[i].productImage}" height = auto width = 100%></div>
					 		<div class="item-price-description">
					 			<p id="description">${arrayItems[i].productName}</p>
					 			<p id="currency">R</p><p class="price">${arrayItems[i].productPrice}</p>
					 		</div>
					 		<button id="btn-add">Add to cart</button>
			 			</div>
			 		`
	}

	return itemHolder
}

//function to display more items
function displayMore(arrayItems){
	let moreItemsHolder = ''
	for(let i = 8; i < (8+5); i++){
		moreItemsHolder +=	`
								<div class="item">
							 		<div id="item-img"><img src="Items/${arrayItems[i].productImage}" height = auto width = 100%></div>
							 		<div class="item-price-description">
							 			<p id="description">${arrayItems[i].productName}</p>
							 			<p id="currency">R</p><p class="price">${arrayItems[i].productPrice}</p>
							 		</div>
							 		<button id="btn-add">Add to cart</button>
					 			</div>
				 			` 
	}

	return moreItemsHolder
}

const productsDiv = document.querySelector('.products')

productsDiv.innerHTML = displayItems(myObj)

//Testing on clicking 'view more...'
const showMore = document.querySelector('#show-more')

showMore.addEventListener('click', (e)=>{
	e.preventDefault()
	console.log('Show more clicked! Shit!')
	productsDiv.innerHTML += displayMore(myObj)
})
*/
////////////////////Writing the same code using OOP//////////////////////////
class Store{
	constructor(numItemStart, numItemDisplay, arrayOfItems){
		this.numItemStart = numItemStart
		this.numItemDisplay = numItemDisplay
		this.arrayOfItems = arrayOfItems
	}

	itemsToDisplay(){
		let itemHolder = ''
		for(let i = this.numItemStart; i < this.numItemDisplay; i++){
			itemHolder += `
							<div class="item">
						 		<div id="item-img"><img src="Items/${this.arrayOfItems[i].productImage}" height = auto width = 100%></div>
						 		<div class="item-price-description">
						 			<p id="description">${this.arrayOfItems[i].productName}</p>
						 			<p id="currency">R</p><p class="price">${this.arrayOfItems[i].productPrice}</p>
						 		</div>
						 		<button id="btn-add">Add to cart</button>
				 			</div>
				 		`
			}
		return itemHolder
	}

	displayItems(){
		return this.itemsToDisplay()
	}

	displayMore(){
		this.numItemStart += 6
		this.numItemDisplay += 6

		return this.displayItems()
	}
}

const myStore = new Store(0, 6, myItems)

const productsDiv = document.querySelector('.products')
productsDiv.innerHTML = myStore.displayItems()

const showMore = document.querySelector('#show-more')
showMore.addEventListener('click', (e) => {
	productsDiv.innerHTML += myStore.displayMore()
})