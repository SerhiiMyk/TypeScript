
interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs
}
interface IUser{
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
    website: string;
    address: IAddress;
    company: ICompany;
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany
}


let user: IUser = {
    id: 1,
    name: 'sf',
    username: 'dfgdgd',
    email: 'sf@gmail.com',
    phone: '+3808',
    website: 'sf.com.ua',
    company: {name: 'sfsfs', catchPhrase: 'sfsfd', bs: 'sdfs'},
    address: {city: '', street: '', suite: '', zipcode: '', geo: {lat: '', lng: ''}}
}