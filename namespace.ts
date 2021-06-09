namespace app.model.todo {
    let counter = 1;
    export interface TodoModel {
        id: number;
        text: string;
    }
}

namespace app.model {
    import TodoModel = app.model.todo.TodoModel;
    interface User {
        id:number;
        name: string;
        todos: TodoModel[];
    }
}