const b1 = document.querySelector('.btn')
const img = document.querySelector('.img')
const url = "https://aws.random.cat/meow"



async function HandlerResponse() {
    try {
     const response = await fetch(url);

     const data = await response.json()
    
     img.src = data.file;

    } catch (error) {
        console.log(error);
    }
}


b1.addEventListener('click', () => {
    let isLoaded = img.complete;
    HandlerResponse()
})

img.addEventListener('click', () => {
    let isLoaded = img.complete;
    HandlerResponse()
})
