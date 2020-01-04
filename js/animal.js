var Animal =
/*#__PURE__*/
function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      console.log("".concat(this.name, " makes a noise."));
    }
  }]);

  return Animal;
}();