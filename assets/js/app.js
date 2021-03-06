const app = new Vue({
    el: "#app",
    data:{
        
        activeUser:0,
        newMessage:"",
        nomeUtente:"",
        
        
        
        
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                    }
                ],
            }
        ]
    },


    methods:{
        chatWith(index){
            this.activeUser = index
        },

        getHours(date){
            const hour = date.split(' ')[1];
            return hour.substring(0,5);
        },

        filterMessage(){
            this.contacts.forEach(contact => {
                if(contact.name.toLowerCase().includes(this.nomeUtente.toLowerCase())){
                contact.visible = true
            } else {
                contact.visible= false
                }
            })
        } ,   

        deleteMsg(i){
            this.contacts[this.activeUser].messages.splice(i,1)
        },
        

        addMessage(i){
            const d = new Date ()
            let ora = d.getHours()
            let minuti = d.getMinutes()
            if(ora.toString().length == 1 ) ora = "0"+ora;
            if(minuti.toString().length == 1 ) minuti = "0"+minuti;
            const orario = `dd/mm/yyyy ${ora}:${minuti}:ss`
            newMsg = {date: orario,
            message: this.newMessage,
            status: 'sent'}  
            
           if(this.newMessage==" "){
            
           }else{
            this.contacts[i].messages.push(newMsg)
            this.newMessage=" ",
            
                
            setTimeout(() => {
                const message = {date: orario,
                message: "ok!",
                status: 'received'}  
                this.contacts[i].messages.push(message)
                
            }, 1000)}
            console.log(orario);
            e.preventDefault();
        return orario , ora, minuti 
        },
    }
})
    
//     computed: {
        
        
        
//         //  filteredList() {
//         //      return this.contacts.filter((element, index)=> {
//         //      nome = element.name.toLowerCase()
//         //      filterName = nome.includes(this.nomeUtente.toLowerCase())
//         //      if (nome.includes(filterName)){
//         //          element.visible = "true"
                
//         //      } else if(nome =! filterName){
//         //          element.visible = "false"
                
//         //      }
//         //      return nome, filterName
//         //      })
//         //      return this.contacts.filter(element => {
//         // return element.name.toLowerCase().includes(this.nomeUtente.toLowerCase())
//         //      })
            
//         // }
    




