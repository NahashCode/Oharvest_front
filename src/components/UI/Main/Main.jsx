import CropBloc from '../../CropBloc/CropBloc';
import CropPlan from '../../CropPlan/CropPlan';
import CropTable from '../../CropTable/CropTable';
//import HighlightBar from '../../HighlightBar/HighlightBar';
//import Welcome from '../../Welcome';
//import ContactSection from '../../ContactSection/ContactSection';

import './Main.scss';

const Main = () => {
    return (
        <main className="content">
            {/*<HighlightBar />
            <Welcome />
            <ContactSection />*/}
            <CropBloc />
        </main>
    );
};

export default Main;