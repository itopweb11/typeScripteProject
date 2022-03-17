interface Person {
    name: string
    age: number
}

type PersonKeys = keyof  Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
//key = 'id'  / небудет работать

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> //исключаем из User два ключа _id и createdAt
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // оставляем в User необходимые нам ключи name и email