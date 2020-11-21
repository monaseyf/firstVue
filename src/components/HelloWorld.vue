<template>
    <div>
         <select v-model="selectedRole">
            <option v-bind:value="null"> filter by role </option>
            <option :key="item.id" v-for="item in people" > {{ item.role }} </option>
        </select> 
        
                <v-card v-for="person in people" :key="person.id" v-show="selectedRole === null || person.role === selectedRole">
                <v-card-title v-on:click="toggleDisplayDetails(person)">
                    {{person.fullName}}
                </v-card-title>
                <v-card-text v-show="person.DisplayDetails">
                    ID: {{person.id}}
                    <br/>
                    Age: {{person.age}}
                    <br/>
                    Role: {{person.role}}
                </v-card-text>
                </v-card>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                people: [
                        { id: 1, fullName: `Full Name (1)`, age: 21, role: `user`, DisplayDetails: true },
                        { id: 2, fullName: `Full Name (2)`, age: 22, role: `manager`, DisplayDetails: true  },
                        { id: 3, fullName: `Full Name (3)`, age: 23, role: `admin`, DisplayDetails: true  },
                        { id: 4, fullName: `Full Name (4)`, age: 24, role: `user`, DisplayDetails: true  },
                        { id: 5, fullName: `Full Name (5)`, age: 25, role: `manager`, DisplayDetails: true  },
                        { id: 6, fullName: `Full Name (6)`, age: 26, role: `user`, DisplayDetails: true  },
                        { id: 7, fullName: `Full Name (7)`, age: 27, role: `admin`, DisplayDetails: true  },
                        { id: 8, fullName: `Full Name (8)`, age: 28, role: `user`, DisplayDetails: true  },
                        { id: 9, fullName: `Full Name (9)`, age: 29, role: `user`, DisplayDetails: true  },
                    ],
                    selectedRole: null,
            }
        },

        props: {
            title: String
        },

        methods: {
             toggleDisplayDetails: function (person) {
                 person.DisplayDetails = !person.DisplayDetails
             },
        },

        
    }
</script>