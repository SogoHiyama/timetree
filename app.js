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
        axios.get("https://timetreeapis.com/calendars/mqDgcs8noUKy/upcoming_events?days=7", 
            { headers: {'Authorization': 'Bearer 2e4CvM5Q2hGPPAVM-2fevuNU5cmVrGnyA9F4qq2rFBQnrz1T'} }).then(response => (this.items = response.data.data))
    }
})