interface IUser {
    id: number
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const user: IUser = {
    id: 1,
    name: 'Max',
    username: 'popov',
    email: 'max@gmail.com',
    address: {
        street: 'aka',
        city: 'asd',
        geo: {
            lat: '22',
            lng: '33'
        },
        zipcode: '79000',
        suite: 'fghjkl;'
    },
    company: {
        name: 'apple',
        bs: 'sssssssss',
        catchPhrase: 'sssssss'
    },
    phone: '22222222222222',
    website: 'dog.com'
}

const arr: [number, string, number] = [1, '2', 6]