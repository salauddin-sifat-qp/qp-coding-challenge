"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var App = function () {
    var _a = (0, react_1.useState)('Loading...'), message = _a[0], setMessage = _a[1];
    (0, react_1.useEffect)(function () {
        fetch('http://localhost:5001')
            .then(function (response) {
            console.log(response);
            return response.text();
        })
            .then(function (data) { return setMessage(data); })
            .catch(function (error) { return console.error('Error fetching data:', error); });
    }, []);
    return (<div>
            <h1>Hello from the Frontend!</h1>
            <p>{message}</p>
        </div>);
};
exports.default = App;
