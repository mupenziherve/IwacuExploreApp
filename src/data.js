import tours from "./images/tour-1.jpeg";
import tours from "./images/tour-2.jpeg";
import tours from "./images/tour-3.jpeg";
import tours from "./images/tour-4.jpeg";
import {services} from '../data';


export const pageLinks = [
    {id:1, href: '#home', text: 'home' },
    {id:2, href: '#about', text: 'about' },
    {id:3, href: '#services', text: 'services' },
    {id:4, href: '#tours', text: 'tours' },
    
];

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
  ];
  
  export const services = [
    {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia ' },

  ];

  export const tours =[
   {
    id:1,
     image:tour1,
     date:'august 26th, 2020',
      title:'Tibet Adventure', 
      info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit,qui corporis.', 
      location:'china', 
      duration:'6',
       location:'2100'
      },
      {
        id:2,
         image: tour2,
         date:'october 1th, 2020',
          title:'best of java', 
          info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', 
          location:'indonesia', 
          duration:'11 days',
           location:'$1400'
          },
          {
            id:3,
             image: tour3,
             date:'september 15th, 2020',
              title:'explore hong kong', 
              info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit,qui corporis.', 
              location:'hong kong', 
              duration:'8',
               location:'5000'
              },
              {
                id:4,
                 image:tour4,
                 date:'december 5th, 2019',
                  title:'Rwanda hightlights', 
                  info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit,qui corporis.', 
                  location:'Rwanda', 
                  duration:'20',
                   location:'3300'
                  },
                              

  ];



  
