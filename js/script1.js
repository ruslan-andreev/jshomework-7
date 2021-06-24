//Калькулятор

let Calc = function(){
    this.get = function(){
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.action = prompt('Введите действие');

        this.operation();
    };
    this.operation = function(){
        switch(this.action){
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break; 
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            case '%':
                this.result = (this.a / 100) * this.b;
            break;
            default:
                this.result = alert('Нет данной операции!'); 
        }

        this.output();
    };
    this.output = function(){
        alert(this.a + ' ' + this.action + '' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();
calc.get(); 
console.log(calc);