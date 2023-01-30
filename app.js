
// SELECT ELEMENT 
const theQuestion = document.getElementById('question');
const option1 = document.getElementById('options1'); 
const option2 = document.getElementById('options2'); 
const option3 = document.getElementById('options3'); 
const option4 = document.getElementById('options4'); 
const selectbtn =  document.querySelectorAll('.answer')
const theScore = document.querySelector('.showScore');
const theQuiz = document.querySelector('.upper-portion'); 


// THE QUESTION OF MY QUIZ 
let quizData = [
      {
            question : 'What is HTML',
            a : 'Hypertext Transfer Protocol',
            b : 'Transfer-Encoding',
            c : 'Hypertext Markup Language ',
            d : 'Hypertext Language',
            ans : 'c'
      },

      {
            question : 'How old is kafi',
            a : 22,
            b : 20,
            c : 26,
            d : 23,
            ans : 'c'
      },

      {
            question : 'What is mean by JS',
            a : 'Javascript Language',
            b : 'Transfer-Encoding',
            c : 'Python Language',
            d : 'Normal Language',
            ans : 'a'
      },

      {
            question : 'What is name of Bangladesh Prime Minister',
            a : 'Khaleda',
            b : 'Shik Hasina',
            c : 'Kafi Ahmed',
            d : 'None of them',
            ans : 'b'
      },

      {
            question : 'What is CSS',
            a : 'Case cading sheet',
            b : 'the sheet of style',
            c : 'Case-cading style sheet',
            d : 'Hypertext Language',
            ans : 'c'
      },
]

// INITIAL VARIABLE 
let count = 0;
let score = 0;
let dataLoad = undefined;


// SHOW QUIZ ON DISPLAY FUNCTION 

const showQuiz = () => {
      choseSelect()
      dataLoad = quizData[count]
      theQuestion.innerHTML = dataLoad.question
      option1.innerHTML = dataLoad.a
      option2.innerHTML = dataLoad.b
      option3.innerHTML = dataLoad.c
      option4.innerHTML = dataLoad.d
}

showQuiz()



function choseSelect () {
      selectbtn.forEach(item => {
            item.checked = false;
      })

     
}

function selectAnswer() {

      let answer;
      selectbtn.forEach(item => {
            
            if(item.checked) {
                  answer = item.id
            }
      })

      return answer

}


// AUCTION FUNCTION ON BUTTON 

function clickMe ()  {
      
      let selectOption = selectAnswer()
      console.log(selectOption);
     if(selectOption === quizData[count].ans) {
      score++;  
      }
      count++
      if(count < quizData.length) {
            showQuiz()
            
      } else {
            theQuiz.style.display = 'none'
            theScore.style.display = 'block'
            theScore.innerHTML = `
            Your score : 😇  ${score} / ${quizData.length}
            <button onclick='location.reload()'>Play again</button>
            `
      }
      
     

    
   
}

document.getElementsByClassName('btn')[0].addEventListener('click', clickMe)

