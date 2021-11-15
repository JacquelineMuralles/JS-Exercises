const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    //increases load
    load ++
    //stops load at 100
    if(load > 99) {
        clearInterval(int)
    }
    //puts the load number in the dom
    loadText.innerText =`${load}%`
    // load text becoming more transparent
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // image becoming less blurry
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
//while load is going up this function assists in bringing the
//opacity of the numbers down and the blur of the photo down 
// from 30 to 0
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max -in_min) + out_min;
}