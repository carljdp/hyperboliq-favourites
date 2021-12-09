import {FC} from "react";
import {Button, Col, Row} from "react-bootstrap";


const AppFooter: FC = () => {
    return (
        <>
            <hr className="my-5"/>
            <Row as="section" className="text-center my-5">
                <Col>
                    <h2 className="h5">
                        View code on Github
                    </h2>
                    <Button variant="outline-primary"
                            className="mt-2"
                            onClick={() => {window.open("https://github.com/carljdp/hyperboliq-favourites#readme")}}
                    >
                        carljdp/hyperboliq-favourites
                    </Button>
                </Col>
            </Row>

            <Row as="section" className="text-center my-5">
                <p>
                    Built with React + <code>react-bootstrap</code> + <code>react-icons</code> using TypeScript
                </p>
            </Row>


        </>


    );
};

export default AppFooter;


