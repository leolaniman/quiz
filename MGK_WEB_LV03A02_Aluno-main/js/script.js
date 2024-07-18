const start_btn=document.querySelector(".start_btn")
const  info_box =document.querySelector(".info_box")
const exit_btn =info_box.querySelector(".quit")
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");


























start_btn.onclick=()=>{
    info_box.classList.add("activeInfo")
}

exit_btn.onclick=()=>{
    info_box.classList.remo("activeInfo")

}
continue_btn.onclick=()=>{
    info_box.classList.remo("activeInfo")
    quiz_box.classList.add("activeQuiz")
}