var Grass = (function() {
  function Grass() {
    this.el = document.createElement('div');
    this.el.classList.add('cell__grass');
  }

  Grass.prototype.render = function() {
    this.el.style.backgroundColor = 'green';
    return this.el;
  };
  return Grass;
})();
