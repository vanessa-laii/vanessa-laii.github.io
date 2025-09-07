"use client"
import React from 'react';
import Navbar from '../../(home)/components/Navbar';
import Footer from '../../(home)/components/Footer';
import BlogSidebar from '../../(home)/components/BlogSidebar';
import Blog from '../../(home)/components/Blog';
import { FocusCards } from '@/components/ui/focus-cards';

const HamiltonGuidePage = () => {
  const content = (
    <>
      <p>
        Hamilton, Ontario is much more than just the home of McMaster University. This city has 
        incredible natural beauty, a growing food scene, and hidden gems that many visitors never discover. 
        After spending years here, I&apos;ve compiled some of my favorite spots that showcase what makes Hamilton special.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Must-visit natural spots:</h3>
      
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Tiffany Falls:</strong> A beautiful waterfall with a short hiking trail. Right between Ancaster and Dundas, this is a must see.</li>
        <li><strong>Bayfront Park:</strong> Great for lakeside walks and watching sunsets</li>
        <li><strong>Gage Park:</strong> Beautiful greenhouse and gardens free for everyone, 40 minute bus ride from campus. Grab a donut and snack at a nearby cafe afterwards!</li>
        <li><strong>Cootes Paradise:</strong> Right behind Les Prince, perfect for a group hike with friends</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Food Scene</h3>
      <p>So many delicious spots outside of campus! Hamilton&apos;s food scene is kind of a hidden gem. All the restaurants below are my personal favorites and places I would revisit.
      </p>
      
      <div className="mb-10">
        <FocusCards cards={[
          {
            title: "The Mule Hamilton",
            subtitle: "Great tacos, sides and drinks. Order a couple tacos and split some appetizers with the table. Perfect for casual dining with friends on a night out",
            src: "/mule.jpg"
          },
          {
            title: "Menya Kyu",
            subtitle: "Cozy spot focused on chicken ramen, with great appetizers and sides. Dishes felt curated with care and attention to detail.",
            src: "/menya.jpg"
          }, 
          {
            title: "Tondou Ramen",
            subtitle: "Same as the downtown toronto location. Great tonkotsu ramen (I thought the broth wasn't hot enough), gyoza and appetizers. Quite a small space.",
            src: "/tondou.png"
          }, 
          {
            title: "Ramen Isshin",
            subtitle: "Same as the downtown toronto location. Love their tsukemen so much and roasted garlic ramen. Broths can be on the salty side so drink lots of water!",
            src: "/isshin.jpg"
          }, 
          {
            title: "Mystic Ramen",
            subtitle: "Ramen spot that has lots of fun options to try, not your traditional ramen shop. Thick cut pork belly slices in their ramen are a must-try.",
            src: "/mystic.jpg"
          }, 
          {
            title: "Nannaa Persian Eatery",
            subtitle: "In Westdale, this cozy spot has amazing food. Large potions of food and their kabobs are a must-try.",
            src: "/nannaa.png"
          }, 
          {
            title: "The Burnt Tongue",
            subtitle: "Many locations around Westdale and Hamilton! Great spot for a quick hearty bowl of soup and sandwich in the colder months.",
            src: "/burnt.jpg"
          }, 
          {
            title: "BAB Korean Food",
            subtitle: "My favourite meal close to campus hands down. Amazing food, their fried chicken is a must-try. Small shop with limited seating",
            src: "/bab.jpg"
          }, 
          {
            title: "Fuwa Fuwa",
            subtitle: "Recent addition to Westdale, this place is perfect to enjoy japanese pancakes and drinks with friends after class or on weekends",
            src: "/fuwa.jpg"
          }, 
          {
            title: "Chicken Plus",
            subtitle: "Korean Fried Chicken spot with great flavours and sides. More of a takeout spot but they have a few seats to eat in.",
            src: "/chicken plus.jpg"
          }


        ]} />
{/* 
      <h3 className="text-2xl font-bold mt-8 mb-4">Other places I have not tried yet</h3>

        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pinbones Fish Market</strong> </li>
            <li><strong>Namu</strong></li>
            <li><strong>Quatrefoil</strong></li>
            <li><strong>Rapscallion and Co.</strong></li>
            <li><strong>Noodle and Dumpling.</strong></li>
        </ul> */}
      </div>
      
      
      <h3 className="text-2xl font-bold mt-8 mb-4">My Favourite Coffee Spots</h3>
      <p>
        As a student and coffee enthusiast, I&apos;ve spent countless hours exploring Hamilton&apos;s coffee scene. 
      </p>
      
      <h4 className="text-xl font-semibold mt-8 mb-6">Downtown Hamilton</h4>
      <div className="mb-10">
        <FocusCards cards={[
          {
            title: "One For All",
            subtitle: "My favorite cafe in Hamilton! Not meant for studying, but rather enjoying the ambiance and aesthetics. Never had a bad drink here :)",
            src: "/oneforall.jpg"
          },
          {
            title: "Mulberry Coffee Shop",
            subtitle: "Best for studying (has outlets and wifi). Popular spot for Hamilton locals so it gets loud later in the day",
            src: "/mulberry.png"
          },
          {
            title: "Synonym",
            subtitle: "Really good coffee and food options for lunch, has wifi and outlets at some seats, very artsy coffee shop with jazz nights on weekends",
            src: "/synonym.jpg"
          }, 
            {
            title: "Durand Coffee",
            subtitle: "Cute neighborhood coffee shop (has wifi), seats are not the most comfortable but good for a quick study session",
            src: "/durand.jpg"
          }
        ]} />
      </div>
      
      <h4 className="text-xl font-semibold mt-8 mb-6">Westdale</h4>
      <div className="mb-10">
        <FocusCards cards={[
          {
            title: "Paisleys",
            subtitle: "Busy with limited seating (no outlets and no wifi), but good coffee and brunch/lunch sandwiches. Great for hangouts and a sweet treat between classes",
            src: "/paisley.jpg"
          },
          {
            title: "Mikels",
            subtitle: "Good study spot with wifi and outlets. Easy to get spots for 1-2 people, but gets really busy and loud.",
            src: "/mikel.png"
          },
        //   {
        //     title: "Phin Coffee",
        //     subtitle: "Great coff",
        //     src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //   }
        ]} />
      </div>
      
      <h4 className="text-xl font-semibold mt-8 mb-6">Dundas</h4>
      <div className="mb-10">
        <FocusCards cards={[
          {
            title: "Detour Cafe",
            subtitle: "Worth the trip to Dundas for excellent coffee",
            src: "/detour.jpg"
          }
        ]} />
      </div>
    
      
      {/* <h3 className="text-2xl font-bold mt-8 mb-4">Student Life</h3>
      <p>
        As a student, Hamilton offers great value and accessibility. The HSR (Hamilton Street Railway) 
        connects you to most parts of the city, and many businesses offer student discounts.
      </p>
      
      <p>
        Student-friendly spots:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Westdale Village:</strong> Close to campus with shops, restaurants, and the historic Phoenix Theatre</li>
        <li><strong>McMaster University Student Centre:</strong> Everything you need on campus</li>
        <li><strong>Hamilton Public Library:</strong> Multiple locations with great study spaces</li>
        <li><strong>Gage Park:</strong> Perfect for outdoor activities and relaxation</li>
      </ul> */}
      
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <BlogSidebar />
        <div className="flex-1 pt-32">
          <Blog 
            title="Vanessa's Hamilton Guide"
            date="September 06, 2025"
            content={content}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HamiltonGuidePage;
