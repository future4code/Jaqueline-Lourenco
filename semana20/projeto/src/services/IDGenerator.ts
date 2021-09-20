import { v4 } from 'uuid';

export class IDGenerator {
    generateId = ():string => { 
        return v4();
    };
};