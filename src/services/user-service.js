
export const userLogin = async ({email, password}) => {
    const data = {
        email: email,
        name: "John Doe",
        roles: ["ROLE_USER", "ROLE_ADMIN"],
    }

    return data;
}

export const userRegister = async ({firstName, lastName, email, password, roles}) => {
    console.log(firstName, lastName, email, password, roles);
    const data = {
        email: email,
        name: "John Doe",
        roles: ["ROLE_USER", "ROLE_ADMIN"],
    }

    return data;
}

