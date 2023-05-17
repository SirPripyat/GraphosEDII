export class Employee {
    private name : String;
    private manager : Object;
    private department : Object;

    constructor(name: String, manager: Object, department: Object) {
        this.name = name;
        this.manager = manager;
        this.department = department;
    }
}