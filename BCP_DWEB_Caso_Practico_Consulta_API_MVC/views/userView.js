class UserView {
    constructor() {
        this.container = $("#user-list");
    }

    displayUsers(users) {
        this.container.empty();

        users.forEach(user => {
            const userCard = `
                <div class="col-md-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">@${user.username}</h6>
                            
                            <p class="card-text mb-1">
                                <strong>Email:</strong> ${user.email}
                            </p>

                            <p class="card-text">
                                <strong>Ciudad:</strong> ${user.address.city}
                            </p>
                        </div>

                        <div class="card-footer bg-white">
                            <button class="btn btn-primary w-100">Ver Perfil</button>
                        </div>
                    </div>
                </div>
            `;

            this.container.append(userCard);
        });
    }
}
