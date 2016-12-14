var vm = new Vue({
    el: '#app',
    data: {
        username: null,
        user: null
    },
    methods: {
        fetchUser: function () {
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/' + self.username);
            xhr.onload = function () {
                self.user = JSON.parse(xhr.responseText);
            };
            xhr.send();
        }
    }
});