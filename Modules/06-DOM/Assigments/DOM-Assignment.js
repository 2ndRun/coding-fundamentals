//we're gonna use practice 1's donetodo tag to make the notification visibile and non visible
//So this time we're gonna mess with values of transformX to reposition the hidden notification
//by giving the notification class the other class called show
const Add = document.getElementsByClassName("add__button")
const Close = document.getElementsByClassName("cta__button");

const notify = document.getElementsByClassName('notification');

notify[0].setAttribute('id', 'noti');
const notified = document.getElementById("noti");



Add[0].addEventListener('click', e => {
    //notified.classList.toggle("show"); works but we dont want toggle only add
    notified.classList.add("show");
});

Close[0].addEventListener('click', e => {

    notified.classList.remove("show")
})


