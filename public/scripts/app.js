"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(nombre) {
    _classCallCheck(this, Person);

    this.nombre = nombre;
  }

  _createClass(Person, [{
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "getTitulo",
    value: function getTitulo() {
      return "mr";
    }
  }]);

  return Person;
}();

if (typeof module !== "undefined") {
  module.exports = {
    factory: function factory(nombre) {
      return new Person(nombre);
    }
  };
}

var p = new Person("bart simpson");
console.log(p.nombre);
//# sourceMappingURL=app.js.map

/*FBUILD*/ console.log( 'FBUILD-20190422 08:19');  /*FBUILD*/
