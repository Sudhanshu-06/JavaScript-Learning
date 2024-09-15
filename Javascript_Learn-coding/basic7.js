let nums=[1,2,3,4,5,6,7,8,9]
// map()

// function double(nums){
//     return nums*2;
// }

// let doubles=nums.map(double)
// console.log(doubles);

let doubles=nums.map( function double(nums){
    return nums*2;
})
console.log(doubles);

// filter
let number= nums.filter((nums)=>{
    if(nums>5){
        return nums;
    }
})
console.log(number);

// reduce

let nums1=[1,2,3,4,5,6,7,8,9]
let sum= nums.reduce((accumulator,currentvalue)=>{
    accumulator=accumulator+currentvalue;
    return accumulator;
},0)
console.log(sum);

let sums=nums.filter((five)=>{
    return five>=5;
}).reduce((accumulator,currVal)=>{
    return accumulator+currVal
})

console.log(sums);

let employees=[{
    id:1,name:"kishan",department:"sales",salary:50000,year:2023},
    {id:2,name:"rishan",department:"marketing",salary:60000,year:2022},
    {id:3,name:"akash",department:"sales",salary:70000,year:2023},
    {id:4,name:"anil",department:"finance",salary:40000,year:2022},
    {id:5,name:"ram",department:"sales",salary:65000,year:2022}
    
];
let salary= employees.map((emp)=>{
    return emp.salary
})
console.log(salary);

let salaries=employees.filter((emp)=>{
    return emp.salary>50000
}).map((name)=>{
    return name.name
})
console.log(salaries);


let totalSalary= employees.reduce((acc,currVal)=>{
    return acc+ currVal.salary
},0)
console.log(totalSalary);

