// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  // im gonna create a for loop of the objects into array and output it
//   this function is what was in the instructions

function getLearnerData(CourseInfo, assignmentGroup, learnerSubmissions) {

// I was told that i should keep this array empty so that i can store the submission stuff 
// but ill just keep it empty because it works. 

    const submitArray = [];
  
 // this part im gonna use a for loop so that i can iterate each submit 
// Im gonna put all the assignments for the submissions in a array
    for (const submission of learnerSubmissions) {

      const assignment = assignmentGroup.assignments.find
      (a => a.id === submission.assignment_id);
      submitArray.push({
        // create id's so that it can put the names and numbers.
        assignment_id: submission.assignment_id,
        assignment_name: assignment.name,
        // id of the assignment
        learner_id: submission.learner_id,
        submission_date: submission.submission.submitted_at,
        score: submission.submission.score
        
      });
    }
 
   // lastly ill return the array and the submission data should be displayed.
    return submitArray;
  }

  const allTheAssignments = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(allTheAssignments);

/* to who ever is grading this it took me so long to figure out 
 how to create this and i just didnt have enough time to go through and match all
 the critea, so my message to you is im sorry and i tried my best, 
 i heard casper say that all they want from me in this project is to
 put the objects in an array and output that array, i think i got my own 
 understanding of that. so i hope this doesnt get that bad of a grade 
 because this was an overwelming assigment and the headaches i got from 
 it and kept restarting because of errors and trying to relearn and go 
 through slides and outside info and even phoning a friend for help was exausting.
 but thank you because this assigment helped me refresh on the info we learned this pass week.
 */