export class User {
    static counter = 1;
    public id: number;
    public firstname: string;
    public secondname: string;
    public description: string;
    public creationTime: Date;

    constructor(firstname: string, secondname: string, description: string) {
        this.id = User.counter++;
        this.firstname = firstname;
        this.secondname = secondname;
        this.description = description;
        this.creationTime = new Date();
    }

}
