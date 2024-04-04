const nameV: string = 'Max'
const a:number = 6

interface IUser {
    name: string;
    age: number;
}

const getName = (user: IUser): string => {
    return user.name
}

const nameOfUser = getName({name: 'Maz', age: 15})

const arrNumbers: number[] = [1, 2]
const arrTuple:[number, boolean,string] = [1,true,'sssssssss']