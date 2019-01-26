class Logger {
    static log(message: string) {
        if (typeof window.console !== 'undefined') {
            window.console.log(message);
        }
    }
}

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

