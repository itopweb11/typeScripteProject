const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const num: number = 3e22

const messege: string = 'Hello Typescript'

const numberArray: number[] = [1, 2, 3, 3, 32, 54]
const numberArray2: Array<number> = [1, 2, 3, 3, 32, 54]

const words: string[] = ['Hello', 'Typescript']

// Tuple
 const contact: [string, number] = ['Dmitrii', 8928578394]

//Any
let variable: any = 45
// ....
variable = 'New string'

// function
function sayMayName(name: string): void {
    console.log(name)
}

sayMayName('Andrei')

// Newer
function throwError(message: string): never {
    throw new Error(messege)
}

function infinete(): never {
    while (true) {

    }
}

// Type

type Login = string

const log: Login = 'admin123'
//const log2: Login= 123 /не будет работать

type ID = string | number

const id: ID = 55
const id2: ID = 'admin'
//const id3: ID = true /не будет работать

type SomeType = string | null | undefined