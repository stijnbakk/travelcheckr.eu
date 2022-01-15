export const post = (request) => {
    const name = request.body.name;
    const email = request.body.email;

    return {
        body: {
            message: 'ok',
            name: name,
            email: email
        }
    }
}