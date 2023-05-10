export default class EventLog {
    constructor(target, eventType) {
        this.target = target;
        this.eventType = eventType;
        this.count = 1;
    }
    countIncrement(){
        this.count++;
    }
    getTarget(){
        return this.target;
    }
}
