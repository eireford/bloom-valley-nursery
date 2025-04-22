function subscribeMessage(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  // event.target.submit();
  const subscribeModal = document.getElementById("subscribe-modal");
  if (emailInput && subscribeModal) {
    const email = emailInput.value.trim();
    if (email) {
      subscribeModal.style.display = "flex"; // Close the modal
      emailInput.value = ""; // Clear the input field
    } else {
      alert("Please enter a valid email address.");
    }
    const closeSubscribeModal = document.getElementById("close-subscribe-modal");
    if (closeSubscribeModal) {
      closeSubscribeModal.addEventListener("click", function () {
        subscribeModal.style.display = "none";
      });
    } else {
      console.error("Close button not found in the subscribe modal.");
    }
  }
}

function addToCartMessage(productId) {
  const addToCartModal = document.getElementById("add-to-cart-modal");
  if (addToCartModal) {
    const addToCartProductMessage = document.getElementById("add-to-cart-product-message");
    if (addToCartProductMessage) {
      addToCartProductMessage.textContent = `${productId} has been added to your cart!`;
    } else {
      console.error("Add to cart product message element not found.");
    }
    addToCartModal.style.display = "flex"; // Open the modal
    const closeAddToCartModal = document.getElementById("close-add-to-cart-modal");
    if (closeAddToCartModal) {
      closeAddToCartModal.addEventListener("click", function () {
        addToCartModal.style.display = "none"; // Close the modal
      });
    } else {
      console.error("Close button not found in the add to cart modal.");
    }
    const modalViewCart = document.getElementById("modal-view-cart");
    if (modalViewCart) {
      modalViewCart.addEventListener("click", function () {
        addToCartModal.style.display = "none";
        viewCart();
      });
    } else {
      console.error("Modal view cart button not found.");
    }

  } else {
    console.error("Cart modal not found.");
  }
}

function viewCart() {
  const viewCartModal = document.getElementById("view-cart-modal");
  if (viewCartModal) {
    viewCartModal.style.display = "flex";
    const closeViewCartModal = document.getElementById("close-view-cart-modal");
    if (closeViewCartModal) {
      closeViewCartModal.addEventListener("click", function () {
        viewCartModal.style.display = "none";
      });
    } else {
      console.error("Close button not found in the view cart modal.");
    }
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
    if(!cartItems) {
      cartItems = [];
    }
    const cartItemsList = document.getElementById("cart-items-list");
    if (!cartItemsList) {
      console.error("Cart items list not found.");
      return;
    }
    cartItemsList.innerHTML = "";
    if (cartItems && cartItems.length === 0) {
      console.log("No cart items found.");
      const listItem = document.createElement("li");
      listItem.textContent = "Your cart is empty.";
      cartItemsList.appendChild(listItem);
    } else {
      cartItems.sort()
      cartItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartItemsList.appendChild(listItem);
      });
    }
  } else {
    console.error("Cart modal not found.");
  }
}

function cartClearedMessage() {
  const cartClearedModal = document.getElementById("cart-cleared-modal");
  if (cartClearedModal) {
    cartClearedModal.style.display = "flex"; // Open the modal
    const closeCartClearedModal = document.getElementById("close-cart-cleared-modal");
    if (closeCartClearedModal) {
      closeCartClearedModal.addEventListener("click", function () {
        cartClearedModal.style.display = "none"; // Close the modal
      });
    } else {
      console.error("Close button not found in the cart cleared modal.");
    }
  } else {
    console.error("Cart cleared modal not found.");
  }
}


function clearCart() {
  const clearCartModal = document.getElementById("clear-cart-modal");
  if (clearCartModal) {
    clearCartModal.style.display = "flex"; // Open the modal
    const confirmClearButton = document.getElementById("confirm-clear-cart");
    if (confirmClearButton) {
      confirmClearButton.addEventListener("click", function () {
        sessionStorage.removeItem("cartItems");
        console.log("Cart cleared.");
        clearCartModal.style.display = "none";
        cartClearedMessage();
      });
    } else {
      console.error("Confirm clear button not found in the clear cart modal.");
    }

    const closeClearCartModal = document.getElementById("close-clear-cart-modal");
    if (closeClearCartModal) {
      closeClearCartModal.addEventListener("click", function () {
        clearCartModal.style.display = "none"; // Close the modal
      });
    } else {
      console.error("Close button not found in the clear cart modal.");
    }
  } else {
    console.error("Clear cart modal not found.");
  }
}

function processCartMessage(event) {
  const processCartModal = document.getElementById("process-cart-modal");
  if (processCartModal) {
    processCartModal.style.display = "flex"; // Open the modal
    const confirmProcessButton = document.getElementById("confirm-process-cart");
    if (confirmProcessButton) {
      confirmProcessButton.addEventListener("click", function () {
        // Here you would typically process the cart in your application logic
        console.log("Cart processed.");
        alert("Your order has been placed successfully.");
        processCartModal.style.display = "none"; // Close the modal
      });
    } else {
      console.error("Confirm process button not found in the process cart modal.");
    }

    const closeProcessCartModal = document.getElementById("close-process-cart-modal");
    if (closeProcessCartModal) {
      closeProcessCartModal.addEventListener("click", function () {
        processCartModal.style.display = "none"; // Close the modal
      });
    } else {
      console.error("Close button not found in the process cart modal.");
    }
  } else {
    console.error("Process cart modal not found.");
  }
}

function contactSentMessage(event) {
  console.log("Contact Sent Message");
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const nameInput = document.getElementById("contact-name").value;
    if (!nameInput) {
      console.error("Name input not found.");
      return;
    }
    console.log(nameInput.value);
    const emailInput = document.getElementById("contact-email").value;
    if (!emailInput) {
      console.error("Email input not found.");
      return;
    }
    console.log(emailInput.value);
    const messageInput = document.getElementById("contact-message").value;
    if (!messageInput) {
      console.error("Message input not found.");
      return;
    }
    console.log(messageInput.value);
    sessionStorage.setItem("contactName", nameInput);
    sessionStorage.setItem("contactEmail", emailInput);
    sessionStorage.setItem("contactMessage", messageInput);
    contactForm.reset();
    event.preventDefault();
  } else {
    console.error("Contact form not found.");
  }

  const contactSentModal = document.getElementById("contact-sent-modal");
  if (contactSentModal) {
    contactSentModal.style.display = "flex"; // Open the modal
    const closeContactSentModal = document.getElementById("close-contact-sent-modal");
    if (closeContactSentModal) {
      closeContactSentModal.addEventListener("click", function () {
        contactSentModal.style.display = "none"; // Close the modal
      });
    } else {
      console.error("Close button not found in the contact sent modal.");
    }
  }
}


  function addToCart(event) {
    event.preventDefault();
    let productId = event.target.id;
    if (!productId) {
      productId = event.target.parentElement.parentElement.id;
    }
    if (productId) {
      productId = productId.replaceAll("-", " ");
      let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      if (!Array.isArray(cartItems)) {
        cartItems = [];
      }
      cartItems.push(productId);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      addToCartMessage(productId);
    }

  }

  document.addEventListener("DOMContentLoaded", function () {
    let subscribeForm = document.getElementById("newsletter-form");
    if (subscribeForm) {
      subscribeForm.addEventListener("submit", subscribeMessage);
    }

    let addToCartAnchor = document.querySelectorAll('.add-to-cart');
    addToCartAnchor.forEach(function (element) {
      element.addEventListener("click", addToCart);
    });

    let clearCartAnchor = document.getElementById('clear-cart');
    if (clearCartAnchor) {
      clearCartAnchor.addEventListener('click', clearCart)
    }

    let processCartAnchor = document.getElementById('process-cart');
    if (processCartAnchor) {
      processCartAnchor.addEventListener('click', processCartMessage);
    }

    let viewCartAnchor = document.getElementById("view-cart");
    if (viewCartAnchor) {
      viewCartAnchor.addEventListener("click", viewCart);
    }

    let sendContact = document.getElementById("send-contact");
    if (sendContact) {
      sendContact.addEventListener('click', contactSentMessage)
    }
  });
