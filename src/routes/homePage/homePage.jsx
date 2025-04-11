import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'


function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vitae facere 
          velit eum perferendis ad, pariatur magnam facilis sequi quo deserunt.
           Earum, et maiores. Deserunt, enim. Inventore consequatur quisquam obcaecati.
         corrupti voluptate. Corrupti iusto neque incidunt tempora vel sit reprehenderit et,
          rem ipsa soluta magni culpa obcaecati mollitia, deserunt dignissimos?</p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000</h1>
              <h2>Property Ready</h2>
            </div>
            
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
        </div>
    </div>
    
  )
}

export default HomePage
