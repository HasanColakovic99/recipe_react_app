import {Form, Input} from "./SearchStyle";

const Search = ({
    onSubmit,
    onChange,
    value
}) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" placeholder='Search for specific recipes...' onChange={onChange} value={value}/>
        </Form>
    );
};

export default Search;