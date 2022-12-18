// string, number, boolean, null, undefined
const myName:string = "";

// We can't reassign variables to a differnt type
// Typescript will infer a datatype as long as we initialize
// the 'any' type is used when typescript doesn't know what to use
// the any type is exclusive to typescript


// union types - when multiple datatypes might be used
let myOtherName: string | null = "";

// this can be done in functions as well
const myfunction = (x:number, y:number) : number | boolean => {

        return 1;
}


//arrays
let items = ['test', 'luis'];
let empty: string[] = [];

// Interfaces

// Help us outsource the type of an object
interface IAccount{
    name:string,
    balance: number,
    status?:string // use ? for optional

    // adding a method
    deposit?: ()=> void
};


// objects
const account: IAccount = {
    name: 'Luis',
    balance: 10
}

// array of objects
let accounts: IAccount[];

let randomObjects: {}[];

// Classes

class InvestmentAccount implements IAccount {

    // must have the public 
    constructor(public name, public balance) {}

    // methods are public by default
    private withdraw() {

    }


}
