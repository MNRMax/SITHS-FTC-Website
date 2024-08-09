<template>
<main>
    <div class="container">
      <h2 class="faq-heading">Frequently Asked Questions</h2>

      <details v-for="i in info" class="faq-card">
        <summary>{{i.title}} <span class="faq-open-icon">+</span></summary>
        <span class="faq-card-spoiler">{{i.text}}</span>
      </details>
      

      <!-- <h2 class="faq-heading">Still have questions?</h2>
      <p class="faq-aftertext">If you cannot find answer to your question in our FAQ, you can always<br>
        contact us. We will answer shortly!
      </p> -->
    </div>
  </main>
</template>

<script setup>

let info = [{
    title: 'What is First Tech Challenge (FTC)?',
    text: 'FTC is a robotics competition in which teams of up to fifteen students build and design a robot able to complete various tasks as efficiently as possible. In addition to the robotics, teams also engage in fundraising, branding, and community outreach for awards and honors. While the challenges vary from year to year, the core philosophy of the competition is to have students learn and apply their knowledge in STEM to learn real-world engineering skills.'
},
{
    title: 'How can I contact the team?',
    text: 'Please email any inquiries about our team to sithssaturn@gmail.com, or feel free to contact us through our social medias linked below!'
},
{
    title: 'What is the competition like? What are the rules?',
    text: 'The offical rules for the 2024-2025 season will be released on September 7th, 2024.'
},
{
    title: 'How can I help to support this team?',
    text: 'Thanks for asking ❤️! Follow us on our social medias (linked below on the footer) to recieve information on our robot, upcoming events, and cool posts! You could also consider spreading the word about our team to your friends and people who may be intrested in engineering!'
},
{
    title: 'What are the roles on the team, and what does each member do?',
    text: 'Each of our 15 members are assigned the roles of either build, code, or outreach, with one lead designated for each section. Build focuses on creating the physical design of the robot by 3D modelling the robot via Inventor, and making it with TETRIX materials. Likewise, code focuses on adding functionality to the robot using Java-based programming and Android Studio. Finally, technical and non-technical outreach works on being a positive influence in our community, wheter it be by using STEM concepts to solve local problems or helping to educate others on STEM. Each role is vital to our team, and most members will get expierence with all three sections no matter what role they choose.'
},
{
    title: 'How can I join this FTC team?',
    text: 'Any student enrolled in Staten Island Technical High School is able to apply to our team before the start of a new FTC season. We will be accepting applications during mid to late 2025 for the upcoming season.'
},
{
    title: 'Is FTC fun/cool?',
    text: 'Yes.'
},]

let summaryCollection = document.getElementsByTagName('summary');
let signsCollection = document.getElementsByClassName('faq-open-icon');

for(let i = 0; i < summaryCollection.length; i++) {
  summaryCollection[i].onclick = function() {
    if(signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
    else signsCollection[i].innerHTML = '+';
  }
}

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
* {
    font-family: "Plus Jakarta Sans", sans-serif ;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Jalka", sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.container {
  max-width: 970px;
  margin: 0 auto;
}

.faq-heading {
margin: 29.48px;
  text-align: center;
  /* font-weight: 400; */
  font-size: 2.75rem;
}

.faq-card {
  border: 1px solid #dce0e8;
  border-radius: 6px;
  padding: 24px 20px;
  margin: 12px;
  list-style: none;
  position: relative;
  cursor: pointer;
  background: white;
  /* width: 80 */
}

.faq-open-icon {
  font-size: 22px;
  position: absolute;
  top: 18px;
  right: 24px;
  font-weight: 700;
}

details[open] .faq-open-icon {
  top: 18px;
  right: 24px;
}

details > summary {
  list-style: none;
}
summary{
    color: black;
}

details > summary::-webkit-details-marker {
  display: none;
}

details[open] summary {
  color: #0186ff;
  font-weight: 500;
}

details[open] .faq-card-spoiler {
  display: inline-block;
  padding-top: 8px;
  color: #8b8b9a;
}

.faq-aftertext {
  text-align: center;
  color: #8b8b9a;
}
</style>