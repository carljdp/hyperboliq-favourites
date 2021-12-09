import {FC} from "react";
import {Form, FormControl, Navbar} from "react-bootstrap";

import RadioToggle from "./RadioToggle";


interface keyValueIcon {
    key: string,
    value: string,
    icon: any
}

type tAppHeader = {
    listLayoutOptions: keyValueIcon[],
    currentListLayout: string,
    setCurrentListLayout:  React.Dispatch<React.SetStateAction<string>>,

    listOptions: keyValueIcon[],
    visibleList: string,
    setVisibleList:  React.Dispatch<React.SetStateAction<string>>,
}

const notYetImplemented = (event: any) => {
    event.preventDefault()
    window.alert('NOT IMPLEMENTED YET')
}

const AppHeader: FC<tAppHeader> = (props: tAppHeader) => {

    return (

        <Navbar sticky="top" expand="md" bg="dark" className="mb-3 shadow">
            <Form className="container d-flex flex-row flex-nowrap justify-content-between align-items-center"
                onSubmit={notYetImplemented}
            >

                <div className="d-none d-sm-inline-block">
                    <RadioToggle name={`ViewMode`} options={props.listLayoutOptions} currentState={props.currentListLayout} setState={props.setCurrentListLayout} />
                </div>


                {/*<div className="flex-grow-1">*/}
                    <FormControl
                        type="search"
                        placeholder="Search by Title"
                        // className="mx-1 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5 text-center"
                        className="mx-1 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5 text-center flex-grow-1"
                        aria-label="Search"
                    />
                {/*</div>*/}


                <RadioToggle name={`ListName`} options={props.listOptions} currentState={props.visibleList} setState={props.setVisibleList} />

            </Form>

        </Navbar>

    );
};

export default AppHeader;


