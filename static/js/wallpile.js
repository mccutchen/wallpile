function draw(canvas) {
    var stream = new ColorStream();
    var context = canvas.getContext('2d');
    context.lineWidth = 1;
    for (var i = 0; i < canvas.width; i++) {
        context.beginPath();
        context.moveTo(i, 0);
        context.strokeStyle = stream.next().rgba();
        context.lineTo(i, canvas.height);
        context.stroke();
        context.closePath();
    }
}

function save() {
    var imgdata = this.toDataURL('image/png');
    var gallery = document.getElementById('gallery');
    var img = document.createElement('img');
    img.src = imgdata;
    gallery.appendChild(img);
    return false;
}

function init() {
    var canvas = document.getElementById('pile');
    draw(canvas);
}

window.addEventListener('load', init, false);
