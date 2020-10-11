function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      degreeCompletion: 0,
      graduate: false,
      newGoals: [],
      compGoals: [],
      enteredGoal: '',
      message: 'Congrats! Starting a BS in Computer Science is a great decision!',
      completeGep: false,
      completeCpp: false,
      completeBasic: false,
      completeElective: false,
      completeExam: false,
      completeResume: false,
      completeIntern: false,
      completeAdvisor: false
    };
  },
  computed: {
    degreeBarStyles() {
      if (this.degreeCompletion <= 0) {
        return { width: '0%' };
      }
      else if (this.degreeCompletion > 100) {
        return {width: '100%'};
      }
      else {
        return { width: this.degreeCompletion + '%' };
      }
    }
  },
  watch: {
    degreeCompletion(value) {
      if(value >= 100){
        this.graduate = true;
      } 
      else if(value == 0)
      {
        this.graduate = false;
      }
      else {
        this.graduate = false;
        this.getMessage();
      }
    }
  },
  methods: {
    startDegree() {
      this.degreeCompletion = 0;
      this.completeGep = false;
      this.completeCpp = false;
      this.completeBasic = false;
      this.completeElective = false;
      this.completeExam = false;
      this.completeResume = false;
      this.completeIntern = false;
      this.completeAdvisor = false;
      this.newGoals = [];
      this.compGoals = [];
      this.message = 'Congrats! Starting a BS in Computer Science is a great decision!';
    },
    getMessage() {
      if(Math.random() < .25){
        this.message = 'Look at you! Smart and Successful...keep it up!';
      }
      else if(Math.random() < .5){
        this.message = 'Woah now! Check out that work ethic!';
      }
      else if(Math.random() < .75){
        this.message = 'You are almost there! Nothing can stop you now!';
      }
      else{
        this.message = 'We have a new genius on the block, dont we?';
      }
    },
    addGoal() {
        this.newGoals.push(this.enteredGoal);
        this.enteredGoal = '';
    },
    completeGoal(index) {
        this.compGoals.push(this.newGoals[index]);
        this.newGoals.splice(index, 1);
    },
    completeRequirement(value) {
      if(value === 'gep') {
        // Student took 39 credit hours of GEP
        if(confirm("By clicking this, you are indicating that you have completed 39 credit hours of the General Education Program.")) {
          this.degreeCompletion = this.degreeCompletion + 19.5;
          this.completeGep = true;
        }
      }
      else if(value === 'cpp') {
        // Student took 14 credit hours of CPP
        if(confirm("By clicking this, you are indicating that you have completed 14 credit hours of the Common Program Prerequisites with a C or better.")) {
          this.degreeCompletion = this.degreeCompletion + 7;
          this.completeCpp = true;
        }
      }
      else if(value === 'basic') {
        // Student took 30 credit hours of core requirements
        if(confirm("By clicking this, you are indicating that you have completed 30 credit hours of the Core Requirements: Basic Level with a C or better.")) {
          this.degreeCompletion = this.degreeCompletion + 15;
          this.completeBasic = true;
        }
      }
      else if(value === 'elective') {
        // Student took 6 CS electives
        if(confirm("By clicking this, you are indicating that you have completed 18 credit hours of the Core Requirements: Advanced Level with a C or better.")) {
          this.degreeCompletion = this.degreeCompletion + 9;
          this.completeElective = true;
        }
      }
      else if(value === 'exam') {
        // Student passed foundation exam
        if(confirm("By clicking this, you are indicating that you have passed the foundation exam.")) {
          this.degreeCompletion = this.degreeCompletion + 25;
          this.completeExam = true;
        }
      }
      else if(value === 'resume') {
        // Student created a resume
        if(confirm("By clicking this, you are indicating that you have completed a technical resume.")) {
          this.degreeCompletion = this.degreeCompletion + 5;
          this.completeResume = true;
        }
      }
      else if(value === 'intern') {
        // Student completed internship
        if(confirm("By clicking this, you are indicating that you have completed an internship.")) {
          this.degreeCompletion = this.degreeCompletion + 14.5;
          this.completeIntern = true;
        }
      }
      else if(value === 'advisor') {
        // Student completed advising
        if(confirm("By clicking this, you are indicating that you have met with your advisor.")) {
          this.degreeCompletion = this.degreeCompletion + 5;
          this.completeAdvisor = true;
        }
      }
    }
  }
});

app.mount('#dashboard');
