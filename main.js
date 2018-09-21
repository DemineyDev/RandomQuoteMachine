//var quotes = [
//    {quote: 'You know youre in love when you cant fall asleep because reality is finally better than your dreams.',
//    author: '- Dr. Suess'},
//    {quote: 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.',
//    author: '- Marilyn Monroe'},
//    {quote: 'Life is what happens when you are making other plans',
//    author: '- John Lennon'},
//    {quote: 'Get busy living or get busy dying', 
//    author: '- Stephen King'},
//    {quote: 'The first step to success is taken when you refuse t be a captive of the environment in which you find yourself',
//    author: '- Mark Caine'}
//]

//document.getElementById("text").innerHTML = quotes[num]["quote"]
//document.getElementById("author").innerHTML = quotes[num]["author"]



var newButton = document.getElementById("new-quote");



newButton.addEventListener("click", function(){
    var quotes = [
        {quote: 'You know youre in love when you cant fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Suess'},
        {quote: 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.',
        author: 'Marilyn Monroe'},
        {quote: 'Life is what happens when you are making other plans',
        author: 'John Lennon'},
        {quote: 'Get busy living or get busy dying', 
        author: 'Stephen King'},
        {quote: 'The first step to success is taken when you refuse t be a captive of the environment in which you find yourself',
        author: 'Mark Caine'}
    
    ]
    var num = Math.floor(Math.random() * 5) 
    console.log(num)  

    document.getElementById("text").innerHTML = quotes[num]["quote"]
    document.getElementById("author").innerHTML = quotes[num]["author"]
})



