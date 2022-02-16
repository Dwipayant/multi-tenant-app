export interface Serializable<T> {
    toObject(): Object;
}

export interface Deserializable<T> {
    getInstance(input: Object): T;
}