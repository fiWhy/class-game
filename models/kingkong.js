var KingKong = (function() {
    function KingKong(level) {
        Unit.call(this, 500, 1500, level);
     }
    KingKong.prototype = Object.create(Unit.prototype);
    KingKong.prototype.constructor = KingKong;
    
    return KingKong;
}());