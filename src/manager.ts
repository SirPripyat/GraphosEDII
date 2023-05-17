export class Manager {
    private name : String;
    private department : Object;
    private subordinates : Object;

    constructor(name: String, department: Object) {
        this.name = name;
        this.department = department;
        this.subordinates = [];
    }
}