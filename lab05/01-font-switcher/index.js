let currentFont = 1.4;

const makeBigger = () => {
   // alert('make bigger!');
   currentFont += 0.2;
   setFont();
};

const makeSmaller = () => {
   currentFont -= 0.2;
   setFont();
};

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${currentFont}em`
}

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

