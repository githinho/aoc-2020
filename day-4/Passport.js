"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passport = void 0;
var Passport = /** @class */ (function () {
    function Passport(map) {
        this.ecl = map.get("ecl");
        this.pid = map.get("pid");
        this.eyr = map.get("eyr");
        this.hcl = map.get("hcl");
        this.byr = map.get("byr");
        this.iyr = map.get("iyr");
        this.hgt = map.get("hgt");
        this.cid = map.get("cid");
    }
    Passport.prototype.hasMandatoryValues = function () {
        return this.ecl != null && this.pid != null && this.eyr != null && this.hcl != null &&
            this.byr != null && this.iyr != null && this.hgt != null;
    };
    Passport.prototype.isByrValid = function () {
        var _a;
        var byrNumber = (_a = Number(this.byr)) !== null && _a !== void 0 ? _a : 0;
        return byrNumber >= 1920 && byrNumber <= 2002;
    };
    Passport.prototype.isIyrValid = function () {
        var _a;
        var iyrNumber = (_a = Number(this.iyr)) !== null && _a !== void 0 ? _a : 0;
        return iyrNumber >= 2010 && iyrNumber <= 2020;
    };
    Passport.prototype.isEyrValid = function () {
        var _a;
        var eyrNumber = (_a = Number(this.eyr)) !== null && _a !== void 0 ? _a : 0;
        return eyrNumber >= 2020 && eyrNumber <= 2030;
    };
    Passport.prototype.isHgtValid = function () {
        var _a, _b, _c, _d, _e;
        var unit = (_a = this.hgt) === null || _a === void 0 ? void 0 : _a.substring(((_b = this.hgt) === null || _b === void 0 ? void 0 : _b.length) - 2);
        var value = (_e = Number((_c = this.hgt) === null || _c === void 0 ? void 0 : _c.substring(0, ((_d = this.hgt) === null || _d === void 0 ? void 0 : _d.length) - 2))) !== null && _e !== void 0 ? _e : 0;
        if (unit == "cm") {
            return value >= 150 && value <= 193;
        }
        if (unit == "in") {
            return value >= 59 && value <= 76;
        }
        return false;
    };
    Passport.prototype.isHclValid = function () {
        var _a;
        return ((_a = this.hcl) === null || _a === void 0 ? void 0 : _a.match("#([0-9]|[a-f]){6}")) != null;
    };
    Passport.prototype.isEclValid = function () {
        var _a;
        return ((_a = this.ecl) === null || _a === void 0 ? void 0 : _a.match("amb|blu|brn|gry|grn|hzl|oth")) != null;
    };
    Passport.prototype.isPidValid = function () {
        var _a;
        return ((_a = this.pid) === null || _a === void 0 ? void 0 : _a.length) == 9;
    };
    Passport.prototype.isValid = function () {
        return this.isByrValid() && this.isEclValid() && this.isEyrValid() && this.isHclValid() &&
            this.isHgtValid() && this.isIyrValid() && this.isPidValid();
    };
    return Passport;
}());
exports.Passport = Passport;
