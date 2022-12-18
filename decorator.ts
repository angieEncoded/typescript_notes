
// Decorator
function MenuItem (itemID: string) {
    return (target: Function) => {
        target.prototype.id = itemID
    }
}



@MenuItem("Pizza")
class Pizza {
    id: string;
}


@MenuItem("Hamburger")
class Hamburger {
    id:string
}


console.log(new Pizza().id)
console.log(new Hamburger().id)


