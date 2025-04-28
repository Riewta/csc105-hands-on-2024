import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
export { createTodo };

const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return todo;
}
export { getTodo };

const updateTodo = async (id: number) => {
    const todo = await db.todo.update({
        where: { id: id },
        data: {completed:true},
    });
    return todo;
};

export { updateTodo };

const updateTodoTitle = async (id: number,newTitle: string) => {
    const todo = await db.todo.update({
        where: {id:id},
        data:{title: newTitle},
    });
    return todo;
};

export { updateTodoTitle };
const  getAllTodo = async (userId: number) => {
    const todo = await db.todo.findMany({
        where:{userId:userId},


    })
    return todo;
}
export { getAllTodo };

