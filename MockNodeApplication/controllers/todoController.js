const todos = [
    {
      "id": 1,
      "title": "Finish homework",
      "description": "Complete math and science assignments",
      "dueDate": "2024-04-05"
    },
    {
      "id": 2,
      "title": "Buy groceries",
      "description": "Pick up fruits, vegetables, and milk",
      "dueDate": "2024-04-02"
    },
    {
      "id": 3,
      "title": "Call mom",
      "description": "Check in and see how she's doing",
      "dueDate": "2024-04-03"
    },
    {
      "id": 4,
      "title": "Fix leaking faucet",
      "description": "Get plumbing tools and repair the faucet in the kitchen",
      "dueDate": "2024-04-07"
    },
    {
      "id": 5,
      "title": "Plan weekend trip",
      "description": "Research destinations and book accommodations",
      "dueDate": "2024-04-10"
    },
    {
      "id": 6,
      "title": "Exercise",
      "description": "Go for a run or hit the gym",
      "dueDate": "2024-04-04"
    },
    {
      "id": 7,
      "title": "Read book",
      "description": "Continue reading 'The Great Gatsby'",
      "dueDate": "2024-04-06"
    },
    {
      "id": 8,
      "title": "Attend meeting",
      "description": "Discuss project updates with the team",
      "dueDate": "2024-04-08"
    },
    {
      "id": 9,
      "title": "Pay bills",
      "description": "Clear electricity, water, and internet bills",
      "dueDate": "2024-04-12"
    },
    {
      "id": 10,
      "title": "Write report",
      "description": "Summarize findings and recommendations",
      "dueDate": "2024-04-09"
    },
    {
      "id": 11,
      "title": "Clean garage",
      "description": "Organize tools and dispose of unwanted items",
      "dueDate": "2024-04-11"
    },
    {
      "id": 12,
      "title": "Cook dinner",
      "description": "Prepare spaghetti with garlic bread",
      "dueDate": "2024-04-03"
    },
    {
      "id": 13,
      "title": "Watch movie",
      "description": "Catch up on the latest release",
      "dueDate": "2024-04-05"
    },
    {
      "id": 14,
      "title": "Send email",
      "description": "Follow up on client inquiries",
      "dueDate": "2024-04-07"
    },
    {
      "id": 15,
      "title": "Practice guitar",
      "description": "Learn new chords and songs",
      "dueDate": "2024-04-02"
    },
    {
      "id": 16,
      "title": "Do laundry",
      "description": "Wash clothes and fold them",
      "dueDate": "2024-04-10"
    },
    {
      "id": 17,
      "title": "Study for exam",
      "description": "Review notes and solve practice questions",
      "dueDate": "2024-04-11"
    },
    {
      "id": 18,
      "title": "Clean room",
      "description": "Organize belongings and vacuum floor",
      "dueDate": "2024-04-06"
    },
    {
      "id": 19,
      "title": "Water plants",
      "description": "Check soil moisture and water accordingly",
      "dueDate": "2024-04-08"
    },
    {
      "id": 20,
      "title": "Research topic",
      "description": "Gather information for upcoming presentation",
      "dueDate": "2024-04-09"
    }
  ]
  

const getTodos = (req,res)=>{
    
    return res.status(200).json({
        status:'success',
        todos
    })
}

module.exports = {getTodos}