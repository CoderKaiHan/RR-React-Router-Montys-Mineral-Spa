
import Home from "./Home";

export default function Packages(props) {

    const packages = props.packages;

    return (
        <div>
            {<Home/>}
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                    {packages.map((packageItem)=>{
                        return(
                            <h2>{packageItem}</h2>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}