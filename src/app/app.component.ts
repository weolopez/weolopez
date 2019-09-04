import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resume = {
    name: 'Mauricio Lopez',
    email: 'weolopez@gmail.com',
    phone: '(404) 664-4899',
    address: '1615 Northlake Springs Ct, Decatur GA 30033',
    title: 'Systems Engineer',
    titleDescription: 'Principal Systems Engineer with a proven track record of working with clients on delivering innovative solutions to challenging business problems.',
    expertise1: [
      'Agile Development',
      'Cloud Architecture',
      'Full Stack Development',
      'Onshore / Offshore Delivery'
    ],
    expertise2: [
      'System Design and Technical Architecture',
      'Systems Integration',
      'Security Architecture'
    ],
    skills: 'Angular (HTML, CSS, Typescript), Java MicroServices, Apache Camel, Docker, Kubernetes, Quarkus, Linux, bash scripting, SQL, MongoDB, NodeJS, ExpressJS, Nginx, UML (HLD/DD), requirements estimation',
    experience: [
      {
        application: 'Shared Application Partner Management Platform',
        date: 'February 2016 - Present',
        role: 'PRINCIPAL-SYSTEM ENGINEER',
        description: 'Lead technical, system and security architecture for AT&T Business Console. AT&T Business Console provides customer self service for enrollment and management of devices (DMP). DMP integrates with IBM MAAS 360 Mobile Device Management. The frontend is built using Angular 7; backend is build on Java and Camel based MicroServices deployed on Kubernetes across three data centers.'
      },
      {
        application: 'AT&T Engage',
        date: 'November 2012 - November 2014',
        role: 'PRINCIPAL-SYSTEM ENGINEER',
        description: 'Lead design and development of AT&T Engage.'
      },
      {
        application: 'TDICE and T.Data',
        date: 'November 2013 - February 2016',
        role: 'SENIOR-TECHNICAL ARCHITECT',
        description: 'Lead design and development of AT&T TDICE.'
      },
      {
        application: 'Digital Life Online Store Front',
        date: 'November 2011 - November 2013',
        role: 'SENIOR-TECHNICAL ARCHITECT',
        description: 'Designed and Developed new online Account Management, Marketing, Ordering and Support applications for AT&T Digital Life. Created a unique ordering application integrated with Mobility, Credit, Fulfillment, Billing and Connect Tech Appointment Scheduling systems. Developed modern mobile first designed websites that enabled rapid development and design changes based on CQ5 CMS and custom frameworks integrated with RBMS.'
      }
    ]
  }
  title = 'resume';
}
