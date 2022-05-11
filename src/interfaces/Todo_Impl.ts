export interface Todo_Impl {
    name: string;
    description: string;
    priority: boolean;
    end_date: Date;
}

export interface TodoContainer_Impl {
    name: string;
    description: string;
    list?: Todo_Impl[];
}
