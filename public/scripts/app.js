"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("------------------------------------------------------------------------");
console.log("Init");
console.log("------------------------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //console.log('componentDidMount');
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do nothing...
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }

            console.log('componentDidUpdate');
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            /*this.setState(() => {
                return {
                    options: []
                }
            });*/

            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {

            console.log("Delete " + optionToRemove);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
            /*this.setState(() => ({
                    options: []          
            }));*/
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[rand]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Already exists';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life to a good place';
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Header, { subtitle: subtitle }),
                    React.createElement(Action, {
                        hasOptions: this.state.options.length > 0,
                        handlePick: this.handlePick
                    }),
                    React.createElement(Options, {

                        options: this.state.options,
                        handleDeleteOptions: this.handleDeleteOptions,
                        handleDeleteOption: this.handleDeleteOption
                    }),
                    React.createElement(AddOption, {
                        handleAddOption: this.handleAddOption
                    })
                )
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};
//---------------------------------------------------------------------------------------------------------
/*class Header extends React.Component {
    render() {
        console.log(props);
        return (
            <div>
            <h1>{ props.title }</h1>
            <h3>{ props.subtitle}</h3>
                <p>This is from Header</p>
            </div>
        );
    }
}*/
var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h3",
            null,
            props.subtitle
        ),
        React.createElement(
            "p",
            null,
            "This is from Header"
        )
    );
};

Header.defaultProps = {
    title: "Indecision App"
};
//---------------------------------------------------------------------------------------------------------
/*
class Action extends React.Component {
    render() {
        return (
            <div>
                <button className='btn btn-success' 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >What should i do?</button>
            </div>
        );
    }
}
*/
var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { className: "btn btn-success",
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What should i do?"
        )
    );
};
//---------------------------------------------------------------------------------------------------------
/*class Options extends React.Component {
    
    render() {
        return (
            <div className='mar-top-20'>
                Options Components.... {props.options.length}
                {
                    props.options.map((option) => <Option key={option} optionText={option} />
                    )
                }
                <button className='btn btn-danger' onClick={props.handleDeleteOptions}>RemoveAll?</button>
            </div>
        );
    }
}*/
var Options = function Options(props) {
    return React.createElement(
        "div",
        { className: "mar-top-20" },
        React.createElement(
            "button",
            {
                className: "btn btn-danger",
                onClick: props.handleDeleteOptions },
            "RemoveAll?"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            { className: "mar-top-20 alert alert-info" },
            "Please add options below"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};
//---------------------------------------------------------------------------------------------------------
/*class Option extends React.Component {
    render() {
        return (
            <div>
            <ol>
                <li>{props.optionText}</li>
            </ol>
            </div>     
        );
    }
}*/
var Option = function Option(props) {
    return React.createElement(
        "div",
        { className: "mar-top-20" },
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                props.optionText,
                React.createElement(
                    "button",
                    {
                        className: "btn btn-danger mar-lt-20",
                        onClick: function onClick(e) {
                            props.handleDeleteOption(props.optionText);
                        }
                    },
                    "Delete"
                )
            )
        )
    );
};

//---------------------------------------------------------------------------------------------------------

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = "";
            }

            /*if (option){
            //alert('Hit');
            props.handleAddOption(option);
            }*/
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "form-inline mar-top-30" },
                this.state.error && React.createElement(
                    "p",
                    { className: "alert alert-warning" },
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option", className: "form-control" }),
                    React.createElement(
                        "button",
                        { className: "btn btn-info" },
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

//stateless Functions
/*
const User = (props) => {
    return (
        <div className="row">
            <p>Name: { props.name }</p>
            <p>Age: { props.age }</p>
        </div>
    );
}*/
//---------------------------------------------------------------------------------------------------------


ReactDOM.render(React.createElement(IndecisionApp, { options: ['Bar', 'Other'] }), document.getElementById('app'));
