import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 1, name: 'Junkrat' },
            { id: 2, name: 'Soldier 76' },
            { id: 3, name: 'Widowmaker' },
            { id: 4, name: 'Zenyatta' }
        ];
        return { heroes };
    }
}
