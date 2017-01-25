"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown() {
    _classCallCheck(this, Markdown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      txt: [].join('\n')
    };
    return _this;
  }

  Markdown.prototype.update = function update(e) {
    this.setState({ txt: e.target.value });
  };

  Markdown.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "div",
        { className: "col-sm-6" },
        React.createElement(
          "textarea",
          { className: "textArea", onChange: this.update.bind(this) },
          this.state.txt
        )
      ),
      React.createElement("div", { className: "col-sm-6", dangerouslySetInnerHTML: { __html: marked(this.state.txt) } })
    );
  };

  return Markdown;
}(React.Component);

ReactDOM.render(React.createElement(Markdown, null), document.getElementById('app'));