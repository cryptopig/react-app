// we always use PascalCase in react and in general
function Message() {
    const name = '';
    if (name)
        return <h1>Hello {name}!</h1> // the code inside the braces is an EXPRESSION: any piece of code that returns a value.
    return <h1>hello world!</h1>
}

export default Message;