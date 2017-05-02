import { Employee } from './employee.model'

export class UIState {
    searchBar: String;
    searchQuery: String;
    addForm: Employee;
    sortOrder: String;
    filter: {
        gender: String;
        location: Location;
    };
    notification: String;
}
