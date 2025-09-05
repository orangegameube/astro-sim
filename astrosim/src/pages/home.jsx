import { Sim } from '../components/sim.jsx'
import { Settings } from '../components/settings.jsx'
import '../components/home.css'

export const Home = () => {

    return (
        <div>
            <Settings id='settings' />
            <Sim id='sim' />
        </div>
    )

}