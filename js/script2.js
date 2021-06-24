// Чайник с функцией расчета времени закипания и расходом электроэнергии

let Teapot = function(name,volum,power){
    this.name = name,
    this.volum = volum,
    this.power = power

    this.boilingTime = function(){
        const startTemp = 4,
            endTemp = 100;
            time = 0;
        time = 0.00117 * volum * (endTemp - startTemp) / power;

        return name + ' время закипания ' + time + ' ч';
    };
    this.consum = function(){
        let cons = 0;
        cons = power * time;

        return name + ' расход kW/h до закипания ' + cons + ' КВ/ч';
    };
};

let teapotBosh = new Teapot('bosh',2,2.2);
console.log(teapotBosh);
console.log(teapotBosh.boilingTime());
console.log(teapotBosh.consum());
let teapotHorizont = new Teapot('Horizont',1.7,2);
console.log(teapotHorizont);
console.log(teapotHorizont.boilingTime());
console.log(teapotHorizont.consum());