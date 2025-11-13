class UserModel {
    constructor() {
        this.users = [];
        this.apiURL = "https://jsonplaceholder.typicode.com/users";
    }

    async fetchUsers() {
        try {
            const response = await fetch(this.apiURL);
            this.users = await response.json();
            return this.users;
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    }
}
