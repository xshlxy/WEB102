import React from 'react';
import './App.css'
import Card from './components/Card'


const App = () => {
  return (
    <div className="App">
      <h1>Hispanic/Latinx Student Union</h1>
      <h2>Welcome to the HLSU's Community Board, these are some of our upcoming events.</h2>
      <div className='event-cards'>
      <Card image="https://m.media-amazon.com/images/M/MV5BNTQ4ZjU1MmItYWQzOC00MzlmLWE3YWQtYTdhN2Y1ZTQ2OTEwXkEyXkFqcGdeQXVyMTMwMTc5ODU3._V1_.jpg"
        title="Familia Feud"
        date="September 19, 2024"
        time="6:00 PM"
        location="FSU Academic Spaces"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10473380"/>
      <Card image="https://copperdating.com/img/speed-dating-guide.jpg"
        title="Speed Dating!"
        date="September 19, 2024"
        time="6:30 PM"
        location="Bellamy Building"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10398397"/>
      <Card image="https://media.licdn.com/dms/image/v2/D4D12AQE80krk6qhPfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678800000326?e=2147483647&v=beta&t=ZCnBG9yGY3884LaWPfoN-ejsuQkskCsZHCqByNMYXvo"
        title="Descubre FSU! & Voces de Exito"
        date="September 20, 2024"
        time="6:30 PM"
        location="FSU Student Union Senate Chambers"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10467655"/>
      <Card image="https://www.socialconnectedness.org/wp-content/uploads/2023/08/Imposter-Syndrome.jpg"
        title="Imposter Syndrome Panel"
        date="September 24, 2024"
        time="6:00 PM"
        location="Student Services Building"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10467768"/>
      <Card image="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/04/Dance-Cover.jpg"
        title="Dance with HLSU"
        date="September 25, 2024"
        time="7:00 PM"
        location="Leach Center Fitness Studio"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10491583"/>
      <Card image="https://www.genre.com/content/dam/generalreinsuranceprogram/images/hero-publications/pickleball-more-than-just-the-fastest-growing-sport-en-pubhero.jpg"
        title="Pickleball Tournament"
        date="September 28, 2024"
        time="4:00 PM"
        location="Westside Courts"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10428879"/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdeLEmdQsFLnWZpcfdYhVFuXcwP_sBmskLA&s"
        title="Pintura y Sabor"
        date="September 30, 2024"
        time="5:30 PM"
        location="Thagard 211"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10405337"/>
      <Card image="https://www.geoguessr.com/images/resize:fit:1200:1200/gravity:ce/plain/seterra/game-thumbnail/3243.png"
        title="Guess that Country"
        date="October 1, 2024"
        time="5:15 PM"
        location="Bellamy 0202"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10479598"/>
      <Card image="https://soundoffexperience.com/wp-content/uploads/2022/02/Sound-Off-Nightlife-7-scaled-e1645738352625.jpg"
        title="HLSU Silent Disco X Karaoke"
        date="October 1, 2024"
        time="5:30 PM"
        location="Club Downunder"
        instagramLink="https://nolecentral.dsa.fsu.edu/event/10480619"/>
      <Card image="https://m.media-amazon.com/images/I/711ao27c6TL._AC_UF350,350_QL80_.jpg"
        title="Cidade de Deus Showing"
        date="October 4, 2024"
        time="8:00 PM"
        location="Askew Student Life Cinema"
        instagramLink="https://nolecentral.dsa.fsu.edu/organization/slcfilmcommittee"/>
      </div>
    </div>
  )
}

export default App
