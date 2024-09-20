import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import NewFolder from './Components/NewFolder/NewFolder'
import Shape from './Components/Shape/Shape'
import Sale from './Components/Sale/Sale'
import Cards from './Components/Cards/Cards'
import Bundle from './Components/Bundle/Bundle'
import Features from './Components/Features/Features'
import features from './Features'
import Gallery from './Components/Gallery/Gallery'
import Reviews from './Components/Reviews/Reviews'
import reviews from './Reviews'
import Footer from './Components/Footer/Footer'

const App = () => {

    return (
        <div>
            <Navbar/>
            <div className=''>
                <Home/>
                <NewFolder/>
                <Shape/>
                <Sale/>
                <Cards/>
                <Bundle/>
                <div className='features_'>
                    <h1>Featured</h1>

                    <div className='features'>
                        {features.map(features => (<Features
                            key={features.id}
                            image={features.image}
                            price={features.price}
                            description={features.description}
                            rating={features.rating}/>))}
                    </div>

                    <Gallery/>
                    <div className='features_'>
                        <h1>Best Selling</h1>
                        <div className='features'>
                            {features.map(features => (<Features
                                key={features.id}
                                image={features.image}
                                price={features.price}
                                description={features.description}
                                rating={features.rating}/>))}
                        </div>
                    </div>
                      <div className='Reviews_'>
                        <h1>Reviews</h1>
                    
                            {reviews.map(reviews => (<Reviews
                                key={reviews.id}
                                image={reviews.image}
                                name={reviews.name}
                                description={reviews.description}
                                rating={reviews.rating}/>))}
                    
                    </div>
                </div> 
                 <Footer/>

            </div>
        </div>
    )
}

export default App
