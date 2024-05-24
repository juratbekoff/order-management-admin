import * as z from "zod";

export const LoginSchema = z.object({
    username: z
        .string({
            required_error: "username is required!",
        })
        .min(1, "username is required!"),
    password: z
        .string({
            required_error: "password is required!",
        })
        .min(1, "password is required!"),
});

export const WorkerSchema = z.object({
    name: z
        .string({
            required_error: "name is required!",
        }).min(1, "name is required!"),
    username: z
        .string({
            required_error: "username is required!",
        }).min(1, "username is required!"),
    password: z
        .string({
            required_error: "password is required!",
        }).min(1, "password is required!"),
})


export const AdminSchema = z.object({
    roleId: z.any(),
    name: z
        .string({
            required_error: "name is required!",
        }).min(1, "name is required!"),
    username: z
        .string({
            required_error: "username is required!",
        }).min(1, "username is required!"),
    password: z
        .string({
            required_error: "password is required!",
        }).min(1, "password is required!"),
})