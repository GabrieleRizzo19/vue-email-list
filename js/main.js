const { createApp }  = Vue;

createApp({
    data(){
        return{
            emailList: []
        }
    },
    mounted(){
        console.log("Mounted iniziato");

        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response => {
                console.log(response.data.response);
                const email  = response.data.response;
                this.emailList.push(email);
            }))
        }

        

        console.log("Mounted terminato");
    }
}).mount("#app");