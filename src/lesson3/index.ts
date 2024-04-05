// type INumber = number | string | IUser | IUser[]
//
// const func = (a: INumber): void => {
//     console.log(a);
// }
//
// func(true)

const func = (): number => {
    return 55
}

type MyUserType = ReturnType<typeof func>

const func2=(a:MyUserType):void=>{
    console.log(a);
}

func2(4)

