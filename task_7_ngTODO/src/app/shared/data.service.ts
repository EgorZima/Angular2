import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let todos = [
            {   
                id: 1,
                title: 'Learning Angular2',
                completed: false
            },
            {   
                id: 2,
                title: 'Buy something',
                completed: true
            },
            {   
                id: 3,
                title: 'Call to someone',
                completed: true
            }
        ] 

        return  { todos } 
    }
}

