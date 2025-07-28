import HomeTop from "@/components/home-top/HomeTop";
import { HomeData } from "@/components/home-data";
import { HomeCourses } from "@/components/home-courses";
import { HomeFeedback } from "@/components/home-feedback";
import { HomeRegister } from "@/components/home-register";
import { HomeMentors } from "@/components/home-mentors";
import { HomeBranch } from "@/components/home-branch";
import { Faq } from "@/components/faq";

const HomePage = () => {
  return (
    <div>
      <HomeTop />
      <HomeData />
      <HomeCourses />
      <HomeFeedback />
      <HomeRegister />
      <HomeMentors/>
      <HomeBranch/>
      <Faq />


      
    </div>
  );
};


export default HomePage;
