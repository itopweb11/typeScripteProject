//Интерфейсы
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 20
    },
    color: '#000'
}

const rect2: Rect = {
    id: '3333',
    size: {
        width: 33,
        height: 1
    }
}

rect2.color = 'red'
//rect2.id = '34534' / не возможно изменитьь из за readonly

const rect3 = {} as Rect
const rect4 = <Rect>{}

//Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '5454',
    size: {
        width: 5,
        height: 10
    },
    getArea(): number {
        return  this.size.width * this.size.height
    }
}

// interface class

interface IClock {
    time: Date
    setTime(data: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(data: Date): void {
        this.time = data
    }
}

//==============================

interface IStyles  {
    [key: string]: string
}

const css: IStyles = {
    border: '1px solid black',
    marginTop: '5px',
    borderRadius: '55px'
}