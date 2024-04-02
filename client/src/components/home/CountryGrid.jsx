import '../../styles/countryGrid.scss';
import { homeCountryData } from '../../data';

const CountryGrid = () => {
  return (
    <section className='countryGridMainSection'>
        <h1>Explore New Destination</h1>
        <div className="countryGridContainer">
            {
                homeCountryData.map((country) => (
                    <div className="gridItem" key={country.id}>
                        <img src={country.img} alt={country.title} />
                        <h1>{country.title}</h1>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default CountryGrid