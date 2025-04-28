import type {Context} from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
    firstName: string;
    lastName: string;
};

const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json({
                success: false,
                data: null,
                msg: "firstName or lastName is duplicated",
            });
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "Created new User!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};
export {createUser};

const getAllUser = async (c: Context) => {
    try {
        const data = await userModel.getAllUser();
        return c.json(data, 200);
    } catch (e) {
        return c.json({
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        )
    }
}
export {getAllUser};
const EditUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        const param = c.req.query("id");

        if (!body.firstName || !body.lastName || !param)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const data = await userModel.EditUser(parseInt(param), body.firstName, body.lastName);
        return c.json({data}, 200);

    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
export {EditUser};