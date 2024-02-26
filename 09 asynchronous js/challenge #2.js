/** Coding Challenge #2
For this challenge you will actually have to watch the video! Then, build the image 
loading functionality that I just showed you on the screen.
Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by 
yourself. Pretend you're working on your own �
PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input. 
This function returns a promise which creates a new image (use 
document.createElement('img')) and sets the .src attribute to the 
provided image path
2. When the image is done loading, append it to the DOM element with the 
'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image (listen for 
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution
PART 2
4. Consume the promise using .then and also add an error handler
5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier
6. After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that �)
7. After the second image has loaded, pause execution for 2 seconds again
8. After the 2 seconds have passed, hide the current image
Test data: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to “Fast 3G” in the dev tools Network tab, 
otherwise images load too fast */

let newImg; // 6

// 1
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    // 2
    img.addEventListener("load", function () {
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject("Image failed to load");
    });
  });
};

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const loadImage = function (image) {
  // 4
  return createImage(image).then(function (img) {
    document.querySelector(".images").appendChild(img);
    newImg = img;
    return wait(2); // 5
  });
};

loadImage("./img/img-1.jpg")
  .then(function () {
    newImg.style.display = "none"; // 6
    return loadImage("./img/img-2.jpg"); // 7
  })
  .then(function () {
    newImg.style.display = "none"; // 7
  })
  .catch(function (err) {
    console.log(err);
  });
