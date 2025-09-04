import { Sim } from '../components/sim.jsx'
import { Settings } from '../components/settings.jsx'
import '../components/home.css'

export const Home = () => {

    return (
        <div>
            <Sim id='sim' />
            <Settings id='settings' />
        </div>
    )

}