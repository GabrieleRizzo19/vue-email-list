const { createApp }  = Vue;

createApp({
    data(){
        return{
            emailList: []
        }
    },
    mounted(){

        // For cicle to push 10 email in emailList from an API request
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response => {
                const email  = response.data.response;
                this.emailList.push(email);
            }))
        }

    }
}).mount("#app");