interface Client <T>{
    id: T;
    login:string;
}

let clien1: Client<number> = {id: 1, login: 'sdff'}
let clien2: Client<string> = {id: 'fgdfgt4353', login: 'zvczvc'}