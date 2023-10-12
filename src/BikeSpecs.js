import React, { useEffect, useState } from 'react'
import BikeSpecsCss from './BikeSpecs.module.css'
import { useParams } from 'react-router-dom'
import jsonData from './json file/BikesInfo.json';
import AddCartBtn from './AddCartBtn';

export default function BikeSpecs() {

  const { brand, id } = useParams();
  const [ bike, setBike ] = useState(null);
  const [ selected, setSelected ] = useState(false)
  const [ bikeSpecs, setBikeSpecs ] = useState(null)

  useEffect(() => {
    // Your code to retrieve the bike model data goes here

    // Example code to find the bike model in the JSON data
    const selectedBrand = jsonData.bikes.find((b) => b.brand === brand);
    if (selectedBrand) {
      const selectedModel = selectedBrand.models.find((m) => m.id === parseInt(id, 10));
      if (selectedModel) {
        setBike(selectedModel);
      }
    }

    fetch(`http://localhost:8080/api/bikeSpecsData/?brand=${brand}&id=${id}`)
        .then(response => response.json())
        .then(data => {
            setBikeSpecs(data)
        })

  }, [brand, id]);

  const [bikeSize, setBikeSize] = useState('--');

  function handleSizeClick(size) {
    setBikeSize(size);
    setSelected(true)
  }

  return (
    <div className={BikeSpecsCss.specs}>

      {
        bike &&
        <div className={BikeSpecsCss.specsContainer}>

        <div className={BikeSpecsCss.bikeSpecs}>
            <div className={BikeSpecsCss['spec-title']}>
                <h1>Technical Specifications</h1>
            </div>
            {
                bikeSpecs &&
                <table>
                    <tr id="Sizes">
                        <td className={BikeSpecsCss.subTitle}>Sizes</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.sizes || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Colours">
                        <td className={BikeSpecsCss.subTitle}>Colours</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.colours || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Frame">
                        <td className={BikeSpecsCss.subTitle}>Frame</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.frame || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Fork">
                        <td className={BikeSpecsCss.subTitle}>Fork</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.fork || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Handlebar">
                        <td className={BikeSpecsCss.subTitle}>Handlebar</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.handlebar || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Grips">
                        <td className={BikeSpecsCss.subTitle}>Grips</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.grips || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Stem">
                        <td className={BikeSpecsCss.subTitle}>Stem</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.stem || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Seatpost">
                        <td className={BikeSpecsCss.subTitle}>Seatpost</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.seatpost || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Saddle">
                        <td className={BikeSpecsCss.subTitle}>Saddle</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.saddle || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Pedals">
                        <td className={BikeSpecsCss.subTitle}>Pedals</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.pedals || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Shifters">
                        <td className={BikeSpecsCss.subTitle}>Shifters</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.shifters || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Front Derailleur">
                        <td className={BikeSpecsCss.subTitle}>Front Derailleur</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.frontDerailleur || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Rear Derailleur">
                        <td className={BikeSpecsCss.subTitle}>Rear Derailleur</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.rearDerailleur || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Brakes">
                        <td className={BikeSpecsCss.subTitle}>Brakes</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.brakes || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Brake Levers">
                        <td className={BikeSpecsCss.subTitle}>Brake Levers</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.brakeLevers || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Cassette">
                        <td className={BikeSpecsCss.subTitle}>Cassette</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.cassette || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Chain">
                        <td className={BikeSpecsCss.subTitle}>Chain</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.chain || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Crankset">
                        <td className={BikeSpecsCss.subTitle}>Crankset</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.crankset || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Bottom Bracket">
                        <td className={BikeSpecsCss.subTitle}>Bottom Bracket</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.bottomBracket || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Rims">
                        <td className={BikeSpecsCss.subTitle}>Rims</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.rims || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Hubs">
                        <td className={BikeSpecsCss.subTitle}>Hubs</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.hubs || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Spokes">
                        <td className={BikeSpecsCss.subTitle}>Spokes</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.spokes || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Tires">
                        <td className={BikeSpecsCss.subTitle}>Tires</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.tires || 'N/A') : 'N/A'}</td>
                    </tr>
                    <tr id="Weight">
                        <td className={BikeSpecsCss.subTitle}>Weight</td>
                        <td className={BikeSpecsCss.specProp}>{bikeSpecs ? (bikeSpecs.weight || 'N/A') : 'N/A'}</td>
                    </tr>
                </table>
            }
        </div>

        <div className={BikeSpecsCss.bikeAddCart}>
          <img src={process.env.PUBLIC_URL + '/img/' + brand + '/' + bike.img}></img>
          <p className={BikeSpecsCss.bikeName}>{bike.name}</p>
          <div className={BikeSpecsCss.btnContainer}>
            <p className={BikeSpecsCss.sizeLabel}>Size: {bikeSize}</p>
            {
                !selected &&
                    <p>Please select size</p>
            }
            <div className={BikeSpecsCss.sizeBtnGrid}>
              <button onClick={() => handleSizeClick('49')}>49</button>
              <button onClick={() => handleSizeClick('52')}>52</button>
              <button onClick={() => handleSizeClick('54')}>54</button>
              <button onClick={() => handleSizeClick('56')}>56</button>
              <button onClick={() => handleSizeClick('58')}>58</button>
              <button onClick={() => handleSizeClick('61')}>61</button>
            </div>
            <AddCartBtn bikeInfo={{...bike, brand: brand, size: bikeSize}}/>
          </div>
        </div>
      
      </div>
      }

    </div>
  )
}
