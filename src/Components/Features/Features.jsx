import './Features.css'

const Features = (props) => {


    return (
        <div className="cards">
            <div key={props.id} className='featureCard'>
                <div className='featureImg'>
                    <img src={props.image} alt="" className='featureName'/>

                </div>
                <div className='features_content'>
                    
                    <div className='disPlay__1'>
                       
                        <div className='featureSales'>
                            {props.description}
                        </div>
                    </div>
                    <div className='disPlay__2'>
                        <div className="featureRating">
                          {props.rating}
                        </div>
                         <div className='featurePrice'>
                            {props.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
