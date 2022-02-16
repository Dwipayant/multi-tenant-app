import { Deserializable, Serializable } from "./serialize";

export class User implements Deserializable<User>, Serializable<User> {
    private name:string;
    private id?:string;

    constructor({ name, id }:{name:string,id?:string}) {
        this.name = name;
        this.id = id;
    }
    
    toObject() : Object{
        return Object.keys(this).reduce((a, i) => {a[i] = this[i]; return a}, {})
    }
    
    getInstance(input: Object): User {
        return User.getInstance(input);
    }

    public static getInstance(input: Object): User {
        let instance = new User({ } as any);
        Object.assign(instance, input);
        return instance;
    }
} 