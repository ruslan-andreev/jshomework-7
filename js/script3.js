//Функция запрашивает данные владельца и автомобиля
//и выводит их, владелец является обьектом в обьекте 
let Contact = function(){
    this.get = function(){
        this.firstName = prompt('Введите фамилию');
        this.name = prompt('Введите имя');
        this.lastName = prompt('Введите отчество');
        this.ageTest();
        
    }; 
        this.ageTest = function(){
             age = +prompt('Введите возраст');
            if(age < 0){
                alert('Не верно указан возраст!');
                return this.age = 'test false';
            }else if(age < 18){
                alert('Вам нет 18-ти  лет!!!');
                return this.age = 'нет 18-ти  лет!!!'
            }else{
                alert('OK');
                return this.age = age;
            };
        };
};

let CarInfo = function(owner){       
    this.getCar = function(){
        if(age >= 18){
            this.brand = prompt('Введите производителя');
            this.carname = prompt('Введите модель');
            this.tipeEngine = prompt('Введите тип двигателя');
            this.owner = owner;   
        }else{
            this.owner = 'Нет права управления';
        };  
    };   
};

function infoCar(){
        contact1 = new Contact;
    contact1.get();
        car1 = new CarInfo(contact1);
    car1.getCar();

    console.log(car1);
    console.log('Тип двигателя ' + car1.tipeEngine);
    console.log(car1.owner);
    console.log('Фамилия владельца ' + car1.owner.firstName);
    
    return car1,contact1;
};
infoCar();

/*
let contact1 = new Contact;
contact1.get();
//console.log(contact1);
let car1 = new CarInfo(contact1);
car1.getCar();
console.log(car1);
console.log(car1.owner);
*/



