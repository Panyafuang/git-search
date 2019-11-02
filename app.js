// init Github
const github = new Github();
// initialized UI
const ui = new UI;

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', e =>{
    const userText = e.target.value

    // if search box not empty
    if(userText){
        github.getUser(userText).then(data =>{
            if(data.profile.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            }else{
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });

    // if search box is empty
    }else{
        ui.clearProfile();
    }
});