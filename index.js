

//forEach method
const numbers = [1,2,3,4,5]
numbers.forEach((item)=>{
console.log(item)
});

let sum =0;
numbers.forEach((item)=>{
    sum += item;
});

console.log(sum);


//map method
const numberz = [1,2,3,4,5]
const num = numberz.map(a => a*2);
console.log(num);

const str =['1','2','3','4','5']
const arrString = str.map(a=>Number(a));
console.log(arrString);

const computerAssesories =[
    {
        name: 'Keyboard',
        price: 500,
        count:3
    },
    {
        name: 'mouse',
        price: 200,
        count:5
    },
    {
        name: 'Monitors',
        price: 1500,
        count:2
    }
]

const result = computerAssesories.map(a =>a.price*a.count);
console.log(result);


//filter method
const numbes = [1,2,5,7,3,1,1,4,3,4,5]
const numb1 = numbes.filter(a=>a%2==0);
console.log(numb1);
const numb = numbes.filter((item,index)=> numbes.indexOf(item)==index);
console.log(numb);

const people = [
    {
        name: 'John',
        age : 34,
    },
    {
        name: 'Sarah',
        age : 14,
    },
    {
        name: 'Martha',
        age : 25,
    }
]

const results1 = people.filter(a=>a.name=='John');
console.log(results1);
const results2 = people.filter(a=>a.age>=18);
console.log(results2);


//reduce method
const number1 = [1,2,3,4,5]
const total = number1.reduce((sum,a)=>sum+a,0);
console.log(total);

const computerStore =[
    {
        name: 'Keyboard',
        price: 500,
        count:3
    },
    {
        name: 'mouse',
        price: 200,
        count:5
    },
    {
        name: 'Monitors',
        price: 1500,
        count:2
    }
]

const totalValue = computerStore.reduce((acc, item) => acc  + item.price + item.count, 0);
console.log(totalValue);


//slice method
const number3 = [1,2,3,4,5] 
const sliceNum = number3.slice(0,3);
console.log(number3);
console.log(sliceNum);

const contestPeople = ['Florin','Amaka','Fina','Ivan','Bryan']
console.log(contestPeople.slice(0,3));


//splice method
const number4 =[1,2,3,4,5]
const spliceNum =number4.splice(1,2,4,7,8);
console.log(number4);
console.log(spliceNum);


//sort method
const names = ['Florin','Amaka','Fina','Ivan','Bryan']
console.log(names.sort());
console.log(names.sort((a,b)=> a-b));

const arrNum = [12,45,67,89,34,55,67,22,21]
const sortResult = arrNum.sort((a,b) => a - b);
console.log(sortResult);

const products =[
    {
        name: 'Meat',
        price: 500,
    },
    {
        name: 'Rice',
        price: 700,
    },
    {
        name: ' beans',
        price: 1000,
    }
]
const proSort= products.sort((a,b) => a.price - b.price);
console.log(proSort);


//concat method
const a = [1,2,3];
const b = [4,5,7];
const c = [8,9,10];

const d = a.concat(b,c);
console.log(d);

const e = a.concat();
e.push(4);
console.log(e);
console.log(a);

const r = a.concat(1,2,d);
console.log(r);


//fill method
const fillNum = [1,2,3,4,5,6,7,8,9,10];
const fillRes = fillNum.fill(0);
console.log(fillNum);
console.log(fillRes);

const fillNumber = (n)=>{
return Array(n)
.fill(0)
.map((_, a)=> a+1);
}
console.log(fillNumber(10));


//includes method
const fruits = ['mangoes','ovacadoes','oranges','Apples','grapes'];
console.log(fruits.includes('mangoes'));
console.log(fruits.includes('mangojuice'));
if(fruits.includes('mangojuice')){
console.log('i want to buy mangoes');
}
else{
    console.log('i dont want to buy mangoes');
}


//joins method
const countries = ['USA', 'Europe', 'India','Uganda']
const res = countries.join(', ')
console.log(res)
console.log(`i want to to go to ${res}`);


//reverse method
const revNum = [1,2,3,4,5,6,7,8,9,10];
console.log(revNum.reverse());
const newArr = [...revNum]   
console.log(newArr);
console.log(newArr.reverse());

const str1 = 'coding is fun'
const ress = str1
.split('')
.reverse()
.join('');
console.log(ress);
