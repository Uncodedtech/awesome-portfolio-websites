let footer = $(`
<footer class="webintern-footer">
    <div class="footer-left">
      <div class="footer-text">
        <p>"Develop a passion for learning. If you do, you will never cease to grow."</p>
      </div>
      <div class="footer-icons">
      <a href="#" class="linkedin sub-footer-icon">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="git sub-footer-icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="twitter sub-footer-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="email-icon sub-footer-icon" >
        <i id="mail" class="fa fa-envelope" ></i>
        </a>
        <a href="#" class="kaggle sub-footer-icon" >
        <i class="fab fa-kaggle" id="kaggle-icon" ></i>
        </a> 
        <!-- <a href="#" class="google-scholar sub-footer-icon">
        <i class="ai ai-google-scholar-square ai-3x" ></i>
        </a>
         <a href="#" class="leetcode sub-footer-icon">
        <span class="iconify" data-icon="cib:leetcode" data-inline="false"></span>
        </a>
        <a href="#" class="codeforces sub-footer-icon">
        <span class="iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
        </a>
        <a href="#" class="dribbble sub-footer-icon">
              <i class="fab fa-dribbble"></i>
            </a>
            <a href="#" class="instagram sub-footer-icon">
            <i class="fab fa-instagram"></i>
          </a>  -->
        </div>
    </div>
    <div class="footer-right">
      <h6 class="display-7">Get in Touch</h6>
      <form style="width:80%; margin-left:7%;">
        <div class="name">
          <input type="text" name="name" placeholder="Name" id="inputs" required>
        </div>
        <div class="email">
          <input type="email" name="email"  placeholder="Email"  id="inputs" required>
        </div>
        <div class="msg">
          <textarea type="text" name="msg" placeholder="Message" id="inputs" required></textarea>
        </div>
        <button class="submit"  type="submit">Send</button>
      </form>
    </div>
    
    <!-- <div class="tt-copy">
      <div class="container col-sm-6">
       <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
      </div>
    </div> -->
    
    </footer>`);
let bodyElement = $(`body`);
bodyElement.append(footer);

