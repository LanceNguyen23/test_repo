import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./DetailProduct.css";

function DetailProduct() {
  const DetailProduct = useSelector((state) => state.home.DetailProduct);

  return (
    <div>
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1645858910.jpeg"
            />
            <Card.Body>
              <Row>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-5.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-4.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-7.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1645858910.jpeg"
                    />
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <nav class="woocommerce-breadcrumb breadcrumbs">
            <a href="home">Trang ch???</a>
            <span class="divider">/</span> <a href="nu">N???</a>
            <span class="divider">/</span> <a href="nu/classic-nu/">Classic</a>
          </nav>
          <h1 class="product-title product_title entry-title">
            {DetailProduct.product_name}
          </h1>
          <h3 class="ps-product__price">
            {DetailProduct.product_price}
          </h3>

          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary">-</button>
            <button type="button" class="btn btn-outline-primary">01</button>
            <button type="button" class="btn btn-outline-primary">+</button>
          </div>

          <div className="detail-buttom">
            <div className="addToCart">
              <Button variant="primary" >
                TH??M V??O GI??? H??NG
              </Button>
            </div>
            <div className="buy">
              <Button variant="primary" >
                MUA NGAY
              </Button>
            </div>
          </div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Th??ng tin s???n ph???m</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">H?????ng d???n t??nh size</a>
            </li>
            <p>
            - ????? cao su m???m, ??m ??i gi??p b???n c???m th???y d??? ch???u khi di chuy???n trong th???i gian d??i. Th??m v??o ????, gia??y th???? thao n???? MWC NUTT- 0698 c?? t??nh n??ng tho??ng kh??, gi??p c??n b???ng nhi???t v?? ????? ???m trong nh???ng ??i???u ki???n m??i tr?????ng kh??c nhau.
            - S???n ph???m h?????ng theo phong c??ch hi???n ?????i, kh???e kho???n, m??u s???c tr??? trung ph?? h???p v???i nhi???u l???a tu???i v?? d??ng ng?????i.
            - ???????ng may t??? m???, tinh t??? t???o cho b???n c???m gi??c y??n t??m v??? ch???t l?????ng.
            - S???n ph???m c?? t??nh ???ng d???ng cao: th??ch h???p mang khi t???p luy???n th??? thao, ??i l??m, ??i ch??i v?? tham gia c??c ho???t ?????ng th?????ng ng??y...
            </p>
          </ul>
        </Col>
      </Row>

    </div>
  );

}

export default DetailProduct;
