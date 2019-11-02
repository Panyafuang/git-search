class Github{
    constructor(){
        this.client_id = '2101b06f31281d0ebd14';
        this.client_secret = '6fb78211fb682a581aa17c11a949ef04bd4af267';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        // User
        const resUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Repos
        const resRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await resUser.json();
        const repos = await resRepos.json();

        return {
            profile,
            repos
        }
    }
}