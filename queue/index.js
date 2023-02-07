class Queue {
    constructor() {
        this.queue = [];
        this.count = 0;
    }
    push(item) {
        this.count++;
        this.queue = [...this.queue, item];
    }
    shift() {
        if (this.count === 0) return undefined;
        let remove = this.queue[0];
        delete this.queue[0];
        this.count--;
        this.queue = this.queue.filter(item => item !== undefined);
        return remove;
    }
    peek() {
        if(this.count === 0) return undefined;
        return this.queue[0];
    }
}