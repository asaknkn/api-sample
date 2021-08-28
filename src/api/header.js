import * as crypto from 'crypto';
export var getAuthorization = function (path, method, requestBody) {
    if (requestBody === void 0) { requestBody = ""; }
    var apiKey = "xxxxx";
    var apiSecret = "xxxx";
    var timestamp = getTimeStamp();
    var nonce = getNonce();
    var contentTpye;
    var hash;
    if (requestBody === "") {
        contentTpye = "empty";
        hash = "empty";
    }
    else {
        contentTpye = "application/json";
        var md = crypto.createHash('md5');
        md.update(contentTpye);
        md.update(requestBody);
        hash = md.digest().toString('base64');
    }
    var hmacData = [path, method, nonce, timestamp, contentTpye, hash].join('\n');
    var sha256HMAC = crypto.createHmac('sha256', apiSecret);
    sha256HMAC.update(hmacData);
    var macData = sha256HMAC.digest().toString('base64');
    var authorization = ["hmac OPA-Auth", apiKey, macData, nonce, timestamp, hash].join(":");
    return authorization;
};
var getNonce = function () {
    return ((1 + Math.random()) * 0x1000000 | 0).toString(16).substring(1).toLowerCase();
};
var getTimeStamp = function () {
    var date = new Date();
    var nowUtc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    return Math.round(nowUtc / 1000);
};
//# sourceMappingURL=header.js.map