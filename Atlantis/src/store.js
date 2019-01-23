import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [
      {id: 1,date: "10-12-2019",name:"DRIVE",capacity: 50, category: "Workshop" , course: "Tsiw" ,poster: "",speaker: "Hugo Santos",creatorId: 2 ,participants: [2,1], comments: []},
      {id: 2,date: "10-12-2019",name:"UNLOCK",capacity: 50, category: "Seminario" , course: "Design" ,poster: "",speaker: "Tiago Santos",creatorId: 2 ,participants: [2], comments: []},
      {id: 3,date: "10-12-2019",name:"MAX",capacity: 30, category: "Seminario" , course: "Restauração" ,poster: "",speaker: "Ricardo Queirós",creatorId: 2 ,participants: [1], comments: []},
      {id: 4,date: "10-12-2019",name:"MAX",capacity: 30, category: "Palestra" , course: "Hotelaria" ,poster: "",speaker: "Ricardo Queirós",creatorId: 2 ,participants: [2], comments: []},
      {id: 5,date: "10-12-2019",name:"MAX",capacity: 30, category: "Palestra" , course: "Multimédia" ,poster: "",speaker: "Ricardo Queirós",creatorId: 2 ,participants: [1], comments: []},
      {id: 6,date: "10-12-2019",name:"MAX",capacity: 30, category: "Palestra" , course: "Tsiw" ,poster: "",speaker: "Ricardo Queirós",creatorId: 2 ,participants: [2], comments: []},
      {id: 7,date: "10-12-2019",name:"MAX",capacity: 30, category: "Exposição" , course: "Tsiw" ,poster: "",speaker: "Ricardo Queirós",creatorId: 2 ,participants: [1], comments: []},


    ],
    users: [
      {id: 1,name: "Jorge",email: "jorge@jorge.com",password: "jorge",course: "tsiw",xp: 2,challenges: [{id: 1,name: "Inscreva-se em 5 eventos",xpQuantity: 100,goal: 5,completed: false},{id: 2,name: "Inscreva-se em 10 eventos",xpQuantity: 200,goal: 10,completed: false},{id: 2,name: "Inscreva-se em 20 eventos",xpQuantity: 400,goal: 20,completed: false}],type: "admin",numberInscripton: 4},
      {id: 2,name: "Mário",email: "mario@mario.com",password: "mario",course: "tsiw",xp: 0,challenges: [{id: 1,name: "Inscreva-se em 5 eventos",xpQuantity: 100,goal: 5,completed: false},{id: 2,name: "Inscreva-se em 10 eventos",xpQuantity: 200,goal: 10,completed: false},{id: 2,name: "Inscreva-se em 20 eventos",xpQuantity: 400,goal: 20,completed: false}],type: "docente",numberInscripton: 2},
      {id: 3,name: "Zé",email: "ze@ze.com",password: "ze",course: "tsiw",xp: 1,challenges: [{id: 1,name: "Inscreva-se em 5 eventos",xpQuantity: 100,goal: 5,completed: false},{id: 2,name: "Inscreva-se em 10 eventos",xpQuantity: 200,goal: 10,completed: false},{id: 2,name: "Inscreva-se em 20 eventos",xpQuantity: 400,goal: 20,completed: false}],type: "normal",numberInscripton: 4},
    ],
    categories: [
      {id: 1,name: "Workshop"},
      {id: 2,name: "Seminario"},
      {id: 3,name: "Palestra"},
      {id: 4,name: "Exposição"}
    ],
    courses: [
      {id: 1,name: "Tsiw"},
      {id: 2,name: "Design"},
      {id: 3,name: "Multimédia"},
      {id: 4,name: "Design Industrial"},
      {id: 5,name: "Hotelaria"},
      {id: 6,name: "Restauração"}
    ],
    challenges:[
      {id: 1,name: "Inscreva-se em 5 eventos",xpQuantity: 100,goal: 5,completed: false},
      {id: 2,name: "Inscreva-se em 10 eventos",xpQuantity: 200,goal: 10,completed: false},
      {id: 2,name: "Inscreva-se em 20 eventos",xpQuantity: 400,goal: 20,completed: false},
    ],
    notifications: [{
      id: 0,
      name: "",
      description: ""
    }],
    userId: 0,
    userType: ""
    
  },
  mutations: {
    SET_COMMENT(state, payload) {
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id == payload.eventId) {
          state.events[i].comments.push(payload.opinion)
        }
      }
    },
    CHANGE_TYPE(state, payload) {
      for (let i = 0; i < state.users.length; i++) {
          if (state.users[i].id == payload.userId) {
            state.users[i].type = payload.type
          } 
      }
    },
    COMPLETED_CHALLENGE(state, payload) {
      for (let i = 0; i < state.users.length; i++) {
        if(state.users[i].id == payload.userId){
          console.log("ficou1")
          for (let j = 0; j < state.users[i].challenges.length; j++) {
            if (state.users[i].challenges[j].id == payload.challengeId) {
              state.users[i].challenges[j].completed = true
              state.users[i].xp += payload.xp
              alert("Parabens Completou um desafio")
            }
          }
        }
      }
      
    },
    SET_USER_SUBSCRIBE(state,payload){
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id == payload.idEvent) {
          state.events[i].participants.push(payload.idUser)
        }
      }
    },
    GIVE_XP_INCREASE(state,payload){
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == payload) {
          state.users[i].numberInscripton++
          state.users[i].xp+=50
          alert("Recebeu Xp")
        }
      }
    },
    REMOVE_SUBSCRIBE(state,payload){
      for (let i = 0; i < state.events.length; i++) {
        if(state.events[i].id == payload.idEvent){
          for (let j = 0; j < state.events[i].participants.length; j++) {
            if (state.events[i].participants[j] == payload.idUser) {
              state.events[i].participants.splice(j,1)
              alert("removida inscrição")
            }
          }
        }
      }
    },
    REMOVE_EVENT(state,payload){
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id == payload) {
          state.events.splice(i,1)
          alert("Evento Removido")
        }
      }
    },
    LOG_OUT(state){
      state.userId = 0
      state.userType = ""
    },
    SET_USER_INFO(state,payload){
      state.userId = payload.idUser
      state.userType = payload.idType
    },
    SET_NEW_USER(state,payload){
      state.users.push(payload)
    },
    SET_NEW_EVENT(state,payload){
      state.events.push(payload)
    }





  },
  actions: {
    set_comment(context, payload) {
      context.commit("SET_COMMENT", payload);
    },
    change_type(context, payload) {
      context.commit("CHANGE_TYPE", payload)
    },
    completed_challenge(context, payload) {
      context.commit("COMPLETED_CHALLENGE",payload)
    },
    set_user_subscribe(context, payload) {
      context.commit("SET_USER_SUBSCRIBE",payload)
    },
    give_xp_increase(context, payload){
      context.commit("GIVE_XP_INCREASE",payload)
    },
    remove_subscribe(context, payload){
      context.commit("REMOVE_SUBSCRIBE",payload)
    },
    remove_event(context,payload){
      context.commit("REMOVE_EVENT",payload)
    },
    log_out(context){
      context.commit("LOG_OUT")
    },
    set_user_info(context,payload){
      context.commit("SET_USER_INFO",payload)
    },
    set_new_user(context,payload){
      context.commit("SET_NEW_USER",payload)
    },
    set_new_event(context,payload){
      context.commit("SET_NEW_EVENT",payload)
    }

  },
  getters:{
    login: (state) => (userLog) => {
      let send = {
        idUser: 0,
        idType: ""
      }
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].email == userLog.email && state.users[i].password == userLog.pass) {
          send.idUser = state.users[i].id
          send.idType = state.users[i].type
        }
      }
      console.log(send)
      return send
    },
    signUp: (state) => (createUser) => {
      let insertUser = ""
      let msg = ""
      //verificar se existe algum email
      for (let i = 0; i < state.users.length; i++) {
          if(state.users[i].email == createUser.email){
            msg += "error"
          }
      }
      //verificar se existe se as password coicidem
      if(createUser.password != createUser.confirmPass) {
         msg += "error"
      }
      if(msg == ""){
        insertUser = {
          id: createUser.id,
          name: createUser.name,
          email: createUser.email,
          password: createUser.password,
          course: createUser.course,
          xp: createUser.xp,
          challenges: createUser.challenges,
          type: createUser.type,
          numberInscripton: createUser.numberInscripton
        }
      }

      return insertUser

    },
    getCourses(state){
      return state.courses
    },
    getCategories(state){
      return state.categories
    },
    getEvents(state){
      return state.events
    },
    getUserId(state){
      return state.userId
    },
    getLastIdOfUsers(state){
      let lastId = 0
        if (state.users.length > 0) {
          lastId = state.users[state.users.length - 1].id + 1
          console.log(lastId)
        }
      return lastId
    },
    subscribe: (state) => (subscribeInfo) => {
      let eventToSubscribe
      let result = true
      let alreadySub = false
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id == subscribeInfo.idEvent) {
          eventToSubscribe = i
        }
      }
      for (let i = 0; i < state.events[eventToSubscribe].participants.length; i++) {
        if (state.events[eventToSubscribe].participants[i] == subscribeInfo.idUser) {
          alreadySub = true
          result = false 
        }
      }
      if (!alreadySub) {
        for (let i = 0; i < state.events.length; i++) {
          if(i == eventToSubscribe &&alreadySub == false){
            alert(state.events[i].participants)
          }
        }
      }
      return result
    },
    getRankingByXp: (state) => (top) => {
      let topTen = state.users.sort(
        function orderByLessAttempts(a, b) {
          if (a.xp > b.xp) return 1;
          if (a.xp < b.xp) return -1;
          else return 0;
        }
      )
      return topTen.reverse()
    },
    verifyEvent: (state) => (event) => {
      let result = true
      for (let i = 0; i < state.events.length; i++) {
        console.log(state.events[i].name)
        if (state.events[i].name == event.name) {
          result = false
        }
      }
      return result
    },
    GetArrayCoursesNamesForGrafs(state) {
      let send = []
      for (let i = 0; i < state.courses.length; i++) {
        send.push(state.courses[i].name)
        
      }
      return send
    },
    GetArrayCategoriesNamesForGrafs(state) {
      let send = []
      for (let i = 0; i < state.categories.length; i++) {
        send.push(state.categories[i].name)
        
      }
      return send
    },
    GetDataCoursesForCharts(state) {
      let send = []
      let counter = 0
      for (let i = 0; i < state.courses.length; i++) {
        for (let j = 0; j < state.events.length; j++) {
          if (state.courses[i].name == state.events[j].course) {
            counter++
          }
        }
        send.push(counter)
        counter = 0
      }
      return send
    },
    GetDataCategoriesForCharts(state) {
      let send = []
      let counter = 0
      for (let i = 0; i < state.categories.length; i++) {
        for (let j = 0; j < state.events.length; j++) {
          if (state.categories[i].name == state.events[j].category) {
            counter++
          }
        }
        send.push(counter)
        counter = 0
      }
      return send
    },
    getUsers(state){
      return state.users
    },
    getMyEvents: (state) => (id) => {
      let sendEvents = []
      for (let i = 0; i < state.events.length; i++) {
        for (let j = 0; j < state.events[i].participants.length; j++) {
          if (state.events[i].participants[j] == id) {
            sendEvents.push(state.events[i])
          }
        }
        
      }
      return sendEvents
    },
    GetUserCreatedEvents: (state) => (id) => {
      let sendEvents = []
      console.log(id)
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].creatorId == id) {
          sendEvents.push(state.events[i])
        }
      }
      return sendEvents
    },
    GetEventUsers: (state) => (participants) => {
      let send = []
      for (let i = 0; i < participants.length; i++) {
       for (let j = 0; j < state.users.length; j++) {
         if (participants[i] == state.users[j].id) {
           send.push(state.users[j])
         }
       }
      }
      return send
    },
    GetChallenges(state){
      return state.challenges
    },
    GetLastIdOfEvents(state){
      let lastId
      if(state.events.length > 0 ){
        lastId = state.events[state.events.length- 1].id + 1
      }
      return lastId
    }

    
  },
});
