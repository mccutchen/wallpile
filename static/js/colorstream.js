var Color = function(r, g, b, a) {
    if (typeof a == 'undefined')
        a = 255;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}
Color.prototype.rgba = function() {
    return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
}
Color.prototype.fudge = function() {
    return new Color(
        Utils.wrap(Utils.fudge(this.r, 5), 255),
        Utils.wrap(Utils.fudge(this.g, 5), 255),
        Utils.wrap(Utils.fudge(this.b, 5), 255),
        this.a);
}
Color.prototype.toString = function() {
    return this.rgba();
}
Color.random = function() {
    return new Color(
        Utils.rand(255),
        Utils.rand(255),
        Utils.rand(255));
}


var ColorStream = function(color) {
    if (!color)
        color = Color.random();
    this.color = color;
}
ColorStream.prototype.next = function() {
    var newColor = this.color.fudge();
    this.color = newColor;
    return newColor;
}