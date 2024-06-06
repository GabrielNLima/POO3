import PermissionType from "./PermissionType";

interface DatabaseItem{
    email : string;
    password : string;
    permission : PermissionType;
}

const Database : DatabaseItem[] = [
    {
        email: "gabriel.admin@gmail.com",
        password: "123123",
        permission: PermissionType.ADMIN
    },
    {
        email: "gabriel.user@gmail.com",
        password: "123123",
        permission: PermissionType.USER
    },
    {
        email: "gabriel.user2@gmail.com",
        password: "123123",
        permission: PermissionType.USER
    },
];

export default Database;