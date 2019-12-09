var Spider = (function() {
    function Spider(level) {
        Unit.call(this, 150, 1000, level);
     }
    Spider.prototype = Object.create(Unit.prototype);
    Spider.prototype.constructor = Spider;
    
    return Spider;
}());