import * as bcrypt from 'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    slug: string;
    title: string;
}

interface SeedUser {
    email:    string;
    fullName: string;
    password: string;
    roles:     string[];
}


interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}


export const initialData: SeedData = {

    users: [
        {
            email: 'porfirio@gmail.com',
            fullName: 'Porfirio',
            password: bcrypt.hashSync( 'Password1234', 10 ),
            roles: ['admin']
        },
        {
            email: 'pedro@gmail.com',
            fullName: 'Pedro',
            password: bcrypt.hashSync( 'Password1234', 10 ),
            roles: ['admin']
        },
        {
            email: 'nelson@gmail.com',
            fullName: 'Nelson',
            password: bcrypt.hashSync( 'Password1234', 10 ),
            roles: ['admin']
        },
        {
            email: 'jorge@gmail.com',
            fullName: 'Jorge',
            password: bcrypt.hashSync( 'Password1234', 10 ),
            roles: ['admin']
        },
        {
            email: 'luis@gmail.com',
            fullName: 'Luis',
            password: bcrypt.hashSync( 'Password1234', 10 ),
            roles: ['admin']
        },
        {
            email: 'jvalidojeronimo@gmail.com',
            fullName: 'Juan Daniel',
            password: bcrypt.hashSync( 'Password1234', 10 ),
            roles: ['admin']
        },
    ],

    products: [
        {
            description: "",
            images: [
            ],
            stock: 7,
            price: 75,
            slug: "manzana_criolla",
            title: "Manzana criolla",
        },
        {
            description: "",
            images: [
            ],
            stock: 70,
            price: 75,
            slug: "Durazno",
            title: "Durazno",
        },
        {
            description: "",
            images: [
            ],
            stock: 7,
            price: 75,
            slug: "pan_del_tule",
            title: "Pan del Tule",
        },
        {
            description: "",
            images: [
            ],
            stock: 7,
            price: 75,
            slug: "calabaza_tierna",
            title: "Calabaza tierna",
        },
        {
            description: "",
            images: [
            ],
            stock: 7,
            price: 75,
            slug: "ejote",
            title: "Ejote",
        },
        {
            description: "",
            images: [
            ],
            stock: 7,
            price: 75,
            slug: "frijol",
            title: "Frijol",
        },
    ]
}