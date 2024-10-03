import { Character } from "./character";
import { Info } from "./info";

export class CharactersResponse {
    info: Info;
    results: Character[];

    constructor(info: Info, results: Character[]) {
        this.info = info;
        this.results = results;
    }
}