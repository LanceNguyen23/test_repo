import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProducts } from "../../../../admin/ProductManagement/ProductSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../cart/CartSlice";
import { getDetailproduct } from "../../HomeSlice";

const BodyProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  console.log(products);
  const handleShowDetail = (id) => {
    const product = products.find((item) => item.product_id === id);
    dispatch(getDetailproduct(product));
    navigate("/detail");
  };
  return (
    <Container fluid className="homepage">
      <h3>-SẢN PHẨM MỚI-</h3>
      <Row>
        {products.map((item, index) => {
          return (
            <Col sm={3} key={index}>
              <Card>
                <Card.Img variant="top" src={item.product_img} />
                <Card.Body>
                  <Card.Title>{item.product_name}</Card.Title>
                  <Card.Text>{item.product_price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleShowDetail(item.product_id)}
                  >
                    View Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BodyProduct;
