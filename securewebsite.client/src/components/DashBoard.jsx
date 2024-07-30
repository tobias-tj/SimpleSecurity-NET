import Parthers from './parther/Parthers';
import useParther from '../hooks/useParther';

function DashBoard() {
    document.title = "Dashboard"
    const parthers = useParther();

    return (
        <section>
            {
                parthers.length > 0 ?
                <Parthers parthers={parthers}/>
                :
                <div className='waiting-page'>
                    <div>Waiting...</div>
                </div>
            }
        </section>
    );
}

export default DashBoard;
