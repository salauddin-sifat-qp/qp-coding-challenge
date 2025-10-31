"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var App = function () {
    var _a = (0, react_1.useState)(""), backendMessage = _a[0], setBackendMessage = _a[1];
    (0, react_1.useEffect)(function () {
        fetch("http://localhost:5000/api/message")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setBackendMessage(data.message);
        })
            .catch(function (err) { return console.error(err); });
    }, []);
    return (<div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            width: "100%",
            textAlign: "center",
        }}>
      <h1>Hello from the Frontend!</h1>
      <h2>{backendMessage}</h2>
    </div>);
};
exports.default = App;
