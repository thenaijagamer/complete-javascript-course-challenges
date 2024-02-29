/**
 * Coding Challenge #3
Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time 
using async/await (only the part where the promise is consumed, reuse the 
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one 
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 
'imgArr'
2. Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array �
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function
 */

// part 1
const loadNPause1 = async function () {
  try {
    const img1 = await createImage("./img/img-1.jpg");
    document.querySelector(".images").appendChild(img1);
    newImg = img1;
    await wait(2);
    newImg.style.display = "none";
    const img2 = await createImage("./img/img-2.jpg");
    document.querySelector(".images").appendChild(img2);
    newImg = img2;
    await wait(2);
    newImg.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};

// Alternative method
const loadNPause = async function (image) {
  try {
    const img = await createImage(image);
    document.querySelector(".images").appendChild(img);
    newImg = img;
    return await wait(2);
  } catch (err) {
    throw err;
  }
};

const consumeLoadNPause = async function () {
  try {
    const img1 = await loadNPause("./img/img-1.jpg");
    newImg.style.display = "none";
    const img2 = await loadNPause("./img/img-2.jpg");
    newImg.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};

// consumeLoadNPause();
// loadNPause1();

// Part 2
const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async (img) => await createImage(img));
  const imgEl = await Promise.all(imgs);
  console.log(imgEl);
  imgEl.forEach((img) => {
    img.classList.add("parallel");
  });
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
