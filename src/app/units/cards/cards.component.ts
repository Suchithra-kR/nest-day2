import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department=[
    {
      id:1,
      title:"Aerospace & Defence",
      image:"../../../assets/aero1.jpg",
      description:"Pushing boundaries & defending horizons with cutting-edge technologies.",
    },
    {
      id:2,
      title:"Banking & Financial Service",
      image:"../../../assets/banking.jpg",
      description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities.",
    },
    {
      id:3,
      title:"Healthcare",
      image:"../../../assets/health.jpg",
      description:"Promoting digital innovation & excellence in the healthcare industry.",
    },
    {
      id:4,
      title:"Industrial",
      image:"../../../assets/industry.jpg",
      description:"Where Power Meets Production: Redefining Manufacturing & Energy.",
    },
    {
      id:5,
      title:"Mobility",
      image:"../../../assets/mobility.jpg",
      description:"We are Revolutionizing the world of Mobility.Providing better solutions for overcoming the challenges.",
    },
    {
      id:6,
      title:"GIS",
      image:"../../../assets/giss.jpg",
      description:"NeST GIS offers geospatial solutions for government,cadastral, utilities,Transportation and facilities management services.",
    },
  ]

}
