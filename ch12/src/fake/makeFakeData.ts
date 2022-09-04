import Chance from 'chance'
import {IFake} from './IFake'

const c = new Chance

export const makeFakeData = (): IFake => ({
    name: c.name(),
    email: c.email(),
    profession: c.profession(),
    sentence: c.sentence(),
})

export {IFake}