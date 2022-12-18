
// Using Generics - Templates by another name???
class Queue<T> {
    
    private data: T[];


    add(item: T){
        this.data.push(item);
    }

    remove(){
        this.data.shift()
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('Luis');
nameQueue.add('5')


const numberQueue = new Queue<number>();
numberQueue.add(10);