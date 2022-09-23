import {InfinitySpin} from 'react-loader-spinner';
import {LoaderWrapper} from './LoaderStyle';

const Loader = () => {
    return (
        <LoaderWrapper>
            <InfinitySpin 
                color="#b5927f"
                height={320}
                width={320}
            />
        </LoaderWrapper>
    );
}

export default Loader;