const login_signup = document.getElementById("loginsignup") 

function StartTheTest(){
        document.getElementById("test-starter").style.display = "none";
        const my_section = document.createElement("section");
        my_section.setAttribute("id", "two");
        const inner_html_1 = `<div id="Itsme" style = "padding-top : 3rem;" >
  <ul id = "list-papa" style = "display : grid; grid-template-columns : 0.5fr 7fr 4fr; gap : 0.5rem;font-size: 5rem; list-style : none;">
    <li style = "background: -webkit-linear-gradient(#a873c9, #314d9b);-webkit-background-clip: text;-webkit-text-fill-color: transparent;padding-left : 3rem;">S.No.</li>
    <li style = "background: -webkit-linear-gradient(#a873c9, #314d9b);-webkit-background-clip: text;-webkit-text-fill-color: transparent; padding-left : 20rem;">Question</li>
    <li style = "background: -webkit-linear-gradient(#a873c9, #314d9b);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Response as Extent</li>
  </ul>
</div>`;
        const after_me = document.getElementById("one");
        after_me.insertAdjacentHTML('afterend', inner_html_1);
        let another_html = ""
        let i = 0
        for (item of anxiety_questions){
          i++;
          another_html += `<div style = "padding-left : 5rem; padding-top : 10rem;">${item.id}</div>
    <div style = "font-size : 4rem; padding-top : 10rem;">${item.question}</div>
    <div style = "width : 90%; padding-top : 10rem;"><input id = "${i}" type = "range" min = "0" max = "10" step = "1" value = "5"></input></div>`
        }
        const last_html = `<a id = "test-finisher" style = "margin-top : 70px; margin-left : 65rem; margin-bottom : 10rem; font-size : 3rem;" onClick = "FinishTheTest()" class="btn btn-default btn-xl page-scroll"
              >Submit The Test</a
            >`
        const after_me_again = document.getElementById("list-papa");
        after_me_again.insertAdjacentHTML('beforeend', another_html);
        after_me_again.insertAdjacentHTML('afterend', last_html);
      }

function FinishTheTest(){
  const section_two = document.getElementById("Itsme");
  section_two.setAttribute("class", "row_later");
  section_two.innerHTML = `
  <div class="loading-text">
    <span>E</span>
    <span>V</span>
    <span>A</span>
    <span>L</span>
    <span>U</span>
    <span>A</span>
    <span>T</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>
</div>
<div class="socials">
  <a class="social-link" href="https://twitter.com/aybukeceylan" target="_top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  </a>
  <a class="social-link" href="https://www.linkedin.com/in/ayb%C3%BCkeceylan/" target="_top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  </a>
</div>`
}

const anxiety_questions = [{id : 1, "question" : "How often do you find yourself feeling excessively worried, nervous, or fearful about various aspects of your life, such as work, relationships, health, or the future?", "value" : 0}, {"id" : 2, "question" : "Are these worries or fears interfering with your ability to function in your daily activities, such as work, social interactions, or personal responsibilities?", "value" : 0}, {"id" : 3, "question" : "Do you avoid specific situations, places, or activities due to intense fear or anxiety about potential negative outcomes or embarrassment?", "value" : 0}, {"id" : 4, "question" : "Are you experiencing physical symptoms such as rapid heartbeat, shortness of breath, sweating, trembling, or a sense of restlessness or feeling on edge, especially in situations that provoke worry or fear?", "value" : 0}, {"id" : 5, "question" : "Have you been feeling persistently sad, empty, or hopeless for most of the day, nearly every day, for at least two weeks or more?", "value" : 0}, {"id" : 6, "question" : "Have you lost interest or pleasure in activities that you once enjoyed, such as hobbies, socializing, or work?", "value" : 0}, {"id" : 7, "question" : "Have you experienced significant changes in your sleep patterns, such as insomnia (difficulty falling or staying asleep) or hypersomnia (excessive sleeping), nearly every day?", "value" : 0}, {"id" : 8, "question" : "Have you noticed significant changes in your appetite or weight, such as a significant increase or decrease, unrelated to dieting or intentional changes", "value" : 0}, {"id" : 9, "question" : "Do you have intrusive, unwanted thoughts, images, or urges that cause anxiety or distress?", "value" : 0}, {"id" : 10, "question" : "Do you engage in repetitive behaviors or mental acts to reduce anxiety or prevent a feared event or situation?", "value" : 0}, {"id" : 11, "question" : "Are these obsessions and compulsions time-consuming and significantly interfere with your daily activities or relationships?", "value" : 0}, {"id" : 12, "question" : "Do you find it difficult to control or stop the obsessions and compulsions, even if you recognize they are excessive or unreasonable?", "value" : 0}]