class GitHub{
    constructor(){
        this.client_id ='14ebc084a1590ce06757';
        this.client_secret ='da6f06e5999abcb16e4ea5addf894bc89c94db3a';
        this.repos_count=5;
        this.repos_sort ='created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile =await profileResponse.json();
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();
        
        return{
            profile,
            repos
        }
    }
}