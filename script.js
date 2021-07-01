
(function() {
  fetch('https://api.mocki.io/v2/561baaaa').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
    buildContent(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

  buildContent = function(data) {
    console.dir(data.services);
    let servicesElements = document.querySelectorAll('.services li');
    servicesElements.forEach(element => {
      console.log('Services Wrappers: ', element);
      console.dir(element)
      if (element.classList.contains('first')) {
        element.firstElementChild.setAttribute('src', data.services[0].image );
        element.childNodes[3].innerText = data.services[0].name;
        element.childNodes[5].innerText = data.services[0].description;
      } else if (element.classList.contains('second')) {
        element.firstElementChild.setAttribute('src', data.services[1].image );
        element.childNodes[3].innerText = data.services[1].name;
        element.childNodes[5].innerText = data.services[1].description;
      } else if (element.classList.contains('third')) {
        element.firstElementChild.setAttribute('src', data.services[2].image );
        element.childNodes[3].innerText = data.services[2].name;
        element.childNodes[5].innerText = data.services[2].description;
      }
    });
  }

  // Mobile Menu
  // Using a click event on the close button and on the burger menu we can toggle a class on both the main div and the nav container div to transition in and out. 
  const burgerMenu = document.querySelector('.delicious-burger');
  const leftSide = document.querySelector('.mobile-left');
  const rightSide = document.querySelector('.mobile-right');
  const closeBtn = document.querySelector('.mobile-right img');
  
  console.log(document.querySelector('.mobile-right'));
  console.log('All', burgerMenu, leftSide, rightSide, closeBtn);

  burgerMenu.addEventListener( 'click', function() {
    console.log('Transition In');
    leftSide.classList.add('transitioned');
    rightSide.classList.add('transitioned');
  });

  closeBtn.addEventListener( 'click', function() {
    console.log('Transition Out');
    leftSide.classList.remove('transitioned');
    rightSide.classList.remove('transitioned');
  });

})();
