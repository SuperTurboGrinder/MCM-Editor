
export interface Serializable {
    json() : string;
}

export interface Validatable {
    isValid(): boolean;
}