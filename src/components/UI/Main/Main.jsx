import CropPlan from '../../CropPlan/CropPlan';
import CropTable from '../../CropTable/CropTable';
//import HighlightBar from '../../HighlightBar/HighlightBar';
//import Welcome from '../../Welcome';
//import ContactSection from '../../ContactSection/ContactSection';

import './Main.scss';

const Main = ({plots}) => {
    return (
        <main className="content">
            {/*<HighlightBar />
            <Welcome />
            <ContactSection />*/}
            <CropPlan data={plots}/>
            <CropTable data={plots}/>
        </main>
    );
};

export default Main;