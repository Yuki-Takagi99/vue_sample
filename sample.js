new Vue({
    el: '#app',
    data: {
        name: 'A山B郎',
        course: 'Webエンジニアコース',
        acceptancePeriod: '2019年1月期',
        defaultNextId: 4,
        students: [
            { id: 1, name: '山田太郎', course: '機械学習コース', acceptancePeriod: '2019年1月期' },
            { id: 2, name: '山田次郎', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
            { id: 3, name: '山田三郎', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
        ]
    },
    methods: {
        addStudent: function() {
            this.students.push({ id: this.defaultNextId++, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })
            this.name = ""
            this.course = ""
            this.acceptancePeriod = ""
        }
    }
})