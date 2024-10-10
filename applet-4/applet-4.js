class StudentList {
    
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }


    async init(){
        await this.fetchData();
        this.renderStudentList(this.students);
        this.bindSearchEvent();
    }

    async fetchData(){
        try {
            const response = await fetch(this.dataUrl);
            this.students = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderStudentList(students) {
        const studentList = document.getElementById('student-list');
        studentList.innerHTML = students.map(student => 
            `<button class="btn btn-primary" style="margin-top:15px; 
                                                    width:25rem">
                ${student.student_name} | ${student.student_program}
            </button><br>`
        ).join('');
    }

    bindSearchEvent() {
        const studentSearchBar = document.getElementById('student-search-bar');
        const studentSearchList = document.getElementById('student-search-list');
        studentSearchBar.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredStudents = this.students.filter(student => {
                const fullName = `${student.student_name} ${student.student_program}`;
                return fullName.toLowerCase().includes(searchTerm);
            });
            studentSearchList.innerHTML = filteredStudents.map(student => 
                `<button class="btn btn-primary" style="margin-top:15px; 
                                                    width:25rem">
                    ${student.student_name} | ${student.student_program}
                </button><br>`
            ).join('');
        });
    }

    


}