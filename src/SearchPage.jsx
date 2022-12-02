import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__info">
        <p>62 stays . 26 August to 30 . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult 
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing machine"
      star={4.73}
      price="$30 / night"
      total="$99 total"
      />
      <SearchResult 
      img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing machine"
      star={4.63}
      price="$44 / night"
      total="$120 total"
      />
      <SearchResult 
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QJt7X8H8E1ktIh5S254RkQHaEw%26pid%3DApi&f=1&ipt=4f568dd39406b0997587fa8c265a2ae6bfcdba172e8976dcc89f33606c8492c2&ipo=images"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing machine"
      star={4.62}
      price="$69 / night"
      total="$420 total"
      />
      <SearchResult 
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.designcafe.com%2Fwp-content%2Fuploads%2F2019%2F11%2F17054938%2Fduplex-home-interior-design-in-india.jpg&f=1&nofb=1&ipt=576bc51bb4ffcfdba9f0897cbebf94aa822b4f81e733ff906ee799a84fbb2fcd&ipo=images"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing machine"
      star={4.79}
      price="$72 / night"
      total="$550 total"
      />
    </div>
  )
}

export default SearchPage