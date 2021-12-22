class MyDate {
    _day;
    _month;
    _year;

    constructor(_day, _month, _year) {
        this._day = _day;
        this._month = _month;
        this._year = _year;
    }
    get day(){
        return this._day
    }
    get month(){
        return this._month
    }
    get year(){
        return this._year
    }

    set day(day){
        this._day = day
    }
    set month(month){
        this._month = month
    }
    set year(year){
        this._year = year
    }
}