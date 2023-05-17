export class Department {
    private name : String;
    private manager : Object;
    private employees : Array<Object>;

    constructor(name: String) {
        this.name = name;
        this.manager = {};
        this.employees = [];
    }
}