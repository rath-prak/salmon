
const chatbotSlideMenu = () => {
  $(".toggle").on("click", function(){
    $(".chatbot-list-items").toggleClass("active");
  });
}

export default chatbotSlideMenu
