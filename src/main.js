(function run(){
    "use strict";
    function greetMe(yourName) {
      console.log('Hello ' + yourName);
    }
  
    greetMe('World!');
   const inject = document.querySelector('.lead4');
   inject.textContent = `${greetMe}`;

    var sales = 'Toyota';

    function carTypes(name) {
        if (name === 'Honda'){
            return name;
        } else {
           return  "Sorry we don't sell " + name + ". ";
        }
    }

    var car = { myCar: 'Saturn', getCar: carTypes('Honda'),
     special: sales};

     const sect = document.querySelector('.lead4');
     sect.textContent = `${car.myCar} ${car.getCar} ${car.special}`;
    
     function display_image(src, width, height, alt) {
         let a = document.createElement('img');
         a.src = src;
         a.width = width;
         a.height = height;
         a.alt = alt; 
         document.getElementById('javascript').appendChild(a)
     }

     let randomNum = Math.floor(Math.random() * 101);
     let winCar = [ car.myCar,
      car.getCar,
      car.special ];

         let array2 = [];
         let randomIndex = Math.floor(Math.random() * winCar.length);
         array2.push(winCar[randomIndex]);
         winCar.splice(randomIndex, 1);
         winCar = array2;


        const dist = document.querySelector('.lead6');
        if ( winCar[0] === "Saturn" && randomNum <= 33){
         display_image('./images/Saturn-symbol.png', 300, 300, 'Javascript Image');
        } else if ( winCar[0] === "Honda" && randomNum <= 33) {
        display_image('./images/honda-silver-logo.png', 300, 300, 'Javascript Image');
        } else if (winCar[0] === "Toyota" && randomNum <= 33){
         display_image('./images/toyota-logo.png', 300, 300, 'Javascript Image');
        } else {
         display_image('./images/coal14.png', 300, 300, 'Javascript Image');
        }

        if (randomNum <= 33) {
             dist.textContent =`Your random number is: ${randomNum}.
            You've won a ${winCar}!`;
        } else {
        
             dist.textContent = `Your random number is: ${randomNum}.
             You win nothing this time.`;
        };
        
        document.getElementById('button').onclick = 
        function changeContent(){
        const imageSelector =  document.querySelector('img');
        imageSelector.remove(); 
        return run();
           }
        
  })();