class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        const markup = `
            <div class="card card-body mb-4">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-3" src="${user.avatar_url}">
                        <a class="btn btn-block btn-outline-info mb-4" target="_blank" href="${user.html_url}">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-warning">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Public Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="pang-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
        this.profile.innerHTML = markup;
    }

    showRepos(repos){
        // console.log(repos);
        const reposEL = document.querySelector('#repos');

        repos.forEach(curr =>{
            const list = `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${curr.html_url}" target="_blank">${curr.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-pill badge-danger">Stars: ${curr.stargazers_count}</span>
                        <span class="badge badge-pill badge-warning">Watchers: ${curr.watchers}</span>
                        <span class="badge badge-pill badge-info">Forks: ${curr.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
            reposEL.insertAdjacentHTML('afterbegin', list);


        });
    }



    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(msg, className){
        // Clear any remaining alert
        this.clearAlert();

        // Chose EL
        const containerEL = document.querySelector('.searchContainer');
        const searchBoxEL = document.querySelector('.search');

        // Create div
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        // Append Child
        containerEL.insertBefore(div, searchBoxEL);

        // Set timeout
        setTimeout(() =>{
            this.clearAlert();
        }, 1500);

    }

    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

}