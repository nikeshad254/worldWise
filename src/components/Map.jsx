import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
function Map() {
    const [searchParams, setSearchParams] =  useSearchParams()
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')

    return (
        <div className={styles.mapContainer}>
            Maap
            <h1>Maap</h1>
            <h1>Postion: {lat}, {lng}</h1>
        </div>
    )
}

export default Map
