//write here your js

document.addEventListener("DOMContentLoaded", function() {
    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready, только для vanila js

    let carrot = document.getElementById('carrot');
    let frameWidth = window.innerWidth;
    let frameHeight = window.innerHeight;
    let imageWidth = carrot.clientWidth;
    let imageHeight = carrot.clientHeight;
    let x = Math.random() * (frameWidth - imageWidth);
    let y = Math.random() * (frameHeight - imageHeight);
    let cadx = (Math.random() - 0.5) * 10;
    let cady = (Math.random() - 0.5) * 10;
    
    function animate() {
        x += cadx;
        y += cady;
    
        if (x < 0 || x > frameWidth - imageWidth) {
            cadx = -cadx;
        }
        if (y < 0 || y > frameHeight - imageHeight) {
            cady = -cady;
        }
    
        carrot.style.left = x + 'px';
        carrot.style.top = y + 'px';
    
        requestAnimationFrame(animate);
    }
    
    animate();



    let oil = document.getElementById('oil');
    let oframeWidth = window.innerWidth;
    let oframeHeight = window.innerHeight;
    let oimageWidth = oil.clientWidth;
    let oimageHeight = oil.clientHeight;
    let ox = Math.random() * (oframeWidth - oimageWidth);
    let oy = Math.random() * (oframeHeight - oimageHeight);
    let odx = (Math.random() - 0.5) * 10;
    let ody = (Math.random() - 0.5) * 10;
    
    function oanimate() {
        ox += odx;
        oy += ody;
    
        if (ox < 0 || ox > oframeWidth - oimageWidth) {
            odx = -odx;
        }
        if (oy < 0 || oy > oframeHeight - oimageHeight) {
            ody = -ody;
        }
    
        oil.style.left = ox + 'px';
        oil.style.top = oy + 'px';
    
        requestAnimationFrame(oanimate);
    }
    
    oanimate();
    


    let pepper = document.getElementById('pepper');
    let pframeWidth = window.innerWidth;
    let pframeHeight = window.innerHeight;
    let pimageWidth = pepper.clientWidth;
    let pimageHeight = pepper.clientHeight;
    let px = Math.random() * (pframeWidth - pimageWidth);
    let py = Math.random() * (pframeHeight - pimageHeight);
    let pdx = (Math.random() - 0.5) * 10;
    let pdy = (Math.random() - 0.5) * 10;
    
    function panimate() {
        px += pdx;
        py += pdy;
    
        if (px < 0 || px > pframeWidth - pimageWidth) {
            pdx = -pdx;
        }
        if (py < 0 || py > pframeHeight - pimageHeight) {
            pdy = -pdy;
        }
    
        pepper.style.left = px + 'px';
        pepper.style.top = py + 'px';
    
        requestAnimationFrame(panimate);
    }
    
    panimate();



    let onion = document.getElementById('onion');
    let onframeWidth = window.innerWidth;
    let onframeHeight = window.innerHeight;
    let onimageWidth = onion.clientWidth;
    let onimageHeight = onion.clientHeight;
    let onx = Math.random() * (onframeWidth - onimageWidth);
    let ony = Math.random() * (onframeHeight - onimageHeight);
    let ondx = (Math.random() - 0.5) * 10;
    let ondy = (Math.random() - 0.5) * 10;
    
    function onanimate() {
        onx += ondx;
        ony += ondy;
    
        if (onx < 0 || onx > onframeWidth - onimageWidth) {
            ondx = -ondx;
        }
        if (ony < 0 || ony > onframeHeight - onimageHeight) {
            ondy = -ondy;
        }
    
        onion.style.left = onx + 'px';
        onion.style.top = ony + 'px';
    
        requestAnimationFrame(onanimate);
    }
    
    onanimate();



    let milk = document.getElementById('milk');
    let mframeWidth = window.innerWidth;
    let mframeHeight = window.innerHeight;
    let mimageWidth = milk.clientWidth;
    let mimageHeight = milk.clientHeight;
    let mx = Math.random() * (mframeWidth - mimageWidth);
    let my = Math.random() * (mframeHeight - mimageHeight);
    let mdx = (Math.random() - 0.5) * 10;
    let mdy = (Math.random() - 0.5) * 10;
    
    function manimate() {
        mx += mdx;
        my += mdy;
    
        if (mx < 0 || mx > mframeWidth - mimageWidth) {
            mdx = -mdx;
        }
        if (my < 0 || my > mframeHeight - mimageHeight) {
            mdy = -mdy;
        }
    
        milk.style.left = mx + 'px';
        milk.style.top = my + 'px';
    
        requestAnimationFrame(manimate);
    }
    
    manimate();



    let cream = document.getElementById('cream');
    let cframeWidth = window.innerWidth;
    let cframeHeight = window.innerHeight;
    let cimageWidth = cream.clientWidth;
    let cimageHeight = cream.clientHeight;
    let cx = Math.random() * (cframeWidth - cimageWidth);
    let cy = Math.random() * (cframeHeight - cimageHeight);
    let cdx = (Math.random() - 0.5) * 10;
    let cdy = (Math.random() - 0.5) * 10;
    
    function canimate() {
        cx += cdx;
        cy += cdy;
    
        if (cx < 0 || cx > cframeWidth - cimageWidth) {
            cdx = -cdx;
        }
        if (cy < 0 || cy > cframeHeight - cimageHeight) {
            cdy = -cdy;
        }
    
        cream.style.left = cx + 'px';
        cream.style.top = cy + 'px';
    
        requestAnimationFrame(canimate);
    }
    
    canimate();



    let dish = document.getElementById('dish');
    let dframeWidth = window.innerWidth;
    let dframeHeight = window.innerHeight;
    let dimageWidth = dish.clientWidth;
    let dimageHeight = dish.clientHeight;
    let dx = Math.random() * (dframeWidth - dimageWidth);
    let dy = Math.random() * (dframeHeight - dimageHeight);
    let ddx = (Math.random() - 0.5) * 10;
    let ddy = (Math.random() - 0.5) * 10;
    
    function danimate() {
        dx += ddx;
        dy += ddy;
    
        if (dx < 0 || dx > dframeWidth - dimageWidth) {
            ddx = -ddx;
        }
        if (dy < 0 || dy > dframeHeight - dimageHeight) {
            ddy = -ddy;
        }
    
        dish.style.left = dx + 'px';
        dish.style.top = dy + 'px';
    
        requestAnimationFrame(danimate);
    }
    
    danimate();



    let yellowpepper = document.getElementById('yellowpepper');
    let yeframeWidth = window.innerWidth;
    let yeframeHeight = window.innerHeight;
    let yeimageWidth = yellowpepper.clientWidth;
    let yeimageHeight = yellowpepper.clientHeight;
    let yex = Math.random() * (yeframeWidth - yeimageWidth);
    let yey = Math.random() * (yeframeHeight - yeimageHeight);
    let yedx = (Math.random() - 0.5) * 10;
    let yedy = (Math.random() - 0.5) * 10;
    
    function yeanimate() {
        yex += yedx;
        yey += yedy;
    
        if (yex < 0 || yex > yeframeWidth - yeimageWidth) {
            yedx = -yedx;
        }
        if (yey < 0 || yey > yeframeHeight - yeimageHeight) {
            yedy = -yedy;
        }
    
        yellowpepper.style.left = yex + 'px';
        yellowpepper.style.top = yey + 'px';
    
        requestAnimationFrame(yeanimate);
    }
    
    yeanimate();




$(document).ready(function() {
  $(".carrot2").draggable ();
  $(".oil2").draggable ();
  $(".pepper2").draggable ();
  $(".onion2").draggable ();

  $(".milk2").draggable ();
  $(".cream2").draggable ();
  $(".dish2").draggable ();
  $(".yellowpepper2").draggable ();
})

$(document).ready(function() {
    $(".carrot4").draggable ();
    $(".oil4").draggable ();
    $(".pepper4").draggable ();
    $(".onion4").draggable ();
  
    $(".milk4").draggable ();
    $(".cream4").draggable ();
    $(".dish4").draggable ();
    $(".yellowpepper4").draggable ();
  })


teleport.onclick = function() {
  this.style.scale = 36 ;
  this.style.zIndex = 2000;
};

document.getElementById('teleport').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановить распространение события, чтобы не вызывался другой обработчик
    setTimeout(function() {
        window.location.href = 'teleportation.html'; // замените ссылку на нужную
    }, 500); // Задержка в миллисекундах перед переходом по ссылке (например, 500 мс)
});



const container = document.getElementById('cream3');
const object = document.getElementById('object');

let prevX = 0;
let prevY = 0;

container.addEventListener('mousemove', function(event) {
  const trail = document.createElement('div');
  trail.classList.add('trail');
  
  trail.style.left = prevX + 'px';
  trail.style.top = prevY + 'px';
  
  container.appendChild(trail);
  
  prevX = event.clientX - container.getBoundingClientRect().left - object.offsetWidth / 2;
  prevY = event.clientY - container.getBoundingClientRect().top - object.offsetHeight / 2;
  
  object.style.left = prevX + 'px';
  object.style.top = prevY + 'px';
});

});
