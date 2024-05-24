export type LoginAdminProps = {
    username: string;
    password: string;
};

export type CreateOrUpdateAdminProps = {
    roleId: number,
    name: string;
    username: string;
    password: string;
};

export type AdminProps = {
    id: number
    name: string
    username: string
    password: string;
    createdAt: string,
    updatedAt: string,
    role: {
        id: number,
        name: string
    }
}