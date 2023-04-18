import CropBloc from '../../CropBloc/CropBloc';
import CropPlan from '../../CropBloc/CropPlan/CropPlan';
import CropTable from '../../CropBloc/CropTable/CropTable';
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