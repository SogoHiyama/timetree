var app = new Vue({
    el: '#app',
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD HH:mm');
        }
    },
    data: {
        items:[],
    },
    mounted: function () {
        axios.get("https://timetreeapis.com/calendars/J5DS8KxhvG6E/upcoming_events?days=7", 
            { headers: {'Authorization': 'Bearer Jf8CogRJ1xBWPsJWkpULo6N0GBgJAcKRxvqbvMbmb1I61jq1'} }).then(response => (this.items = response.data.data))
    }
})