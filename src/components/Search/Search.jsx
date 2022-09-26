import {Form, Input} from "./SearchStyle";

const Search = ({
    onChange,
    value,
    onSubmit
}) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" placeholder='Search...' onChange={onChange} value={value}/>
        </Form>
    );
};

export default Search;