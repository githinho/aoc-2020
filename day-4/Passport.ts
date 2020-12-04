export class Passport {
    ecl?: string;
    pid?: string;
    eyr?: string;
    hcl?: string;
    byr?: string;
    iyr?: string;
    hgt?: string;
    cid?: string;

    constructor(map: Map<string, string>) {
        this.ecl = map.get("ecl")
        this.pid = map.get("pid")
        this.eyr = map.get("eyr")
        this.hcl = map.get("hcl")
        this.byr = map.get("byr")
        this.iyr = map.get("iyr")
        this.hgt = map.get("hgt")
        this.cid = map.get("cid")
    }

    hasMandatoryValues(): boolean {
        return this.ecl != null && this.pid != null && this.eyr != null && this.hcl != null &&
            this.byr != null && this.iyr != null && this.hgt != null
    }

    isByrValid(): boolean {
        const byrNumber = Number(this.byr) ?? 0
        return byrNumber >= 1920 && byrNumber <= 2002
    }

    isIyrValid(): boolean {
        const iyrNumber = Number(this.iyr) ?? 0
        return iyrNumber >= 2010 && iyrNumber <= 2020
    }

    isEyrValid(): boolean {
        const eyrNumber = Number(this.eyr) ?? 0
        return eyrNumber >= 2020 && eyrNumber <= 2030
    }

    isHgtValid(): boolean {
        const unit = this.hgt?.substring(this.hgt?.length - 2)
        const value = Number(this.hgt?.substring(0, this.hgt?.length - 2)) ?? 0
        if (unit == "cm") {
            return value >= 150 && value <= 193
        }
        if (unit == "in") {
            return value >= 59 && value <= 76
        }
        return false
    }

    isHclValid(): boolean {
        return this.hcl?.match("#([0-9]|[a-f]){6}") != null
    }

    isEclValid(): boolean {
        return this.ecl?.match("amb|blu|brn|gry|grn|hzl|oth") != null
    }

    isPidValid(): boolean {
        return this.pid?.length == 9
    }

    isValid(): boolean {
        return this.isByrValid() && this.isEclValid() && this.isEyrValid() && this.isHclValid() &&
            this.isHgtValid() && this.isIyrValid() && this.isPidValid()
    }
}
