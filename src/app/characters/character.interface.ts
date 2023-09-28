import { Book } from "../books/book.interface";

export interface Character {
    id: number;
    imageUrl: string;
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    birthday: string;
    eyeColor: string;
    hairColor: string;
    skinColor: string;
    weight: number;
    height: number;
    goodTraits: string;
    badTraits: string;
    mainFear: string;
    mainWish: string;
    description: string;
    notes: string;
    books: Book[];
}
