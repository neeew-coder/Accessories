const navLinks = document.querySelectorAll(".nav-menu .nav-link");

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
  });
  function addToCart(itemName, itemPrice) {
      const cartList = document.getElementById('cart-list');
      const listItem = document.createElement('li');
      listItem.textContent = `${itemName} -
      P${itemPrice.toFixed(2)}`;
      cartList.appendChild(listItem);
      let totalPrice = parseFloat(localStorage.getItem('cart')) || 0;
     cart.push({ name: itemName, price: itemPrice });



      totalPrice += itemPrice;


      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('totalPrice', totalPrice.toFixed(2));

      // Update cart count
      document.getElementById('cart-count').textContent = cart.length; 
    }
    //cartList
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

    // Display cart items
    const cartItemsContainer = document.getElementById('cart-list');
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.name} - P${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(itemElement);
    });

    // Display total price
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    function checkout() {
      alert(`Thank you for your purchase! Total amount: P${totalPrice.toFixed(2)}`);
      // Clear cart after checkout
      localStorage.removeItem('cart');
      localStorage.removeItem('totalPrice');
      window.location.href = 'e-commerce.html';  // Redirect back to the home page
    }
    
    
    //added
    
    
  