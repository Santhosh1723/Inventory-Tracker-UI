import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import SaveIcon from "@mui/icons-material/Save";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import ProfileImg from "./ProfileImg.jpg";
import "./Shop.css";
import UserProfileImg from "./UserProfileImg.jpg";

function UserProfile() {
  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${UserProfileImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundPosition: "center",
        }}
      >
        <Container style={{ width: 1000 }}>
          <Row>
            <Col xs={4} md={4}>
              <Card
                className="hovercard-client"
                style={{
                  width: 300,
                  height: 450,
                  border: "none",
                  marginTop: 50,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "230px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={ProfileImg}
                    style={{
                      width: "200px",
                      height: "auto",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <Card.Body style={{ marginTop: 10 }}>
                  <Card.Title style={{ textAlign: "center" }}>
                    Santhosh Kumar
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <small className="text-muted">Sales Excutive</small>
                    <br></br>
                    <small className="text-muted">Joined at 01/01/2000</small>
                    <br></br>
                    <small className="text-muted">504 hr of Working</small>
                  </Card.Text>
                  <div style={{ textAlign: "center" }}>
                    <Button className="Commonbuttonblue">
                      <EditIcon></EditIcon>Edit
                    </Button>
                    {"      "}
                    <Button className="Commonbuttonblue">
                      <SaveIcon></SaveIcon>Save
                    </Button>
                    {""}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={8} md={8}>
              <Card
                className="hovercard-colorless "
                style={{
                  width: 800,
                  height: 450,
                  border: "none",
                  marginTop: 50,
                }}
              >
                <Table responsive="sm" >
                  <thead>
                    <tr>
                      <th></th>
                      <th>
                        <h3
                          style={{
                            WebkitTextStrokeColor: "grey",
                            WebkitTextStrokeWidth: "1px",
                            color: "black",
                            fontWeight: 800,
                          }}
                        >
                          {" "}
                          User Details
                        </h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Full Name</th>
                      <td>Santhosh Kumar</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>scanty123@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>(239) 816-9029</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <td>(320) 380-4539</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>201-5 , adyar street , coimbatore</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <Button
                          href="/ShopOwnerDetails"
                          className="Commonbuttonblue"
                          style={{ alignItems: "center" }}
                        >
                          <EditIcon></EditIcon>
                          Edit
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: 50 }}>
            <Col xs={4} md={4}>
              <Card
                 className="hovercard-colorless "
                style={{ width: "18rem", border: "none"}}
              >
                <Table style={{ marginBottom: 0}} responsive="sm">
                  <tbody>
                    <tr>
                      <th style={{ borderRadius: 10 }}>
                        <FacebookIcon
                          style={{ color: "#39569c" }}
                        ></FacebookIcon>{" "}
                        Facebook{" "}
                      </th>
                      <td>bootdey</td>
                    </tr>
                    <tr>
                      <th>
                        <InstagramIcon style={{ color: "red" }}></InstagramIcon>
                        Instagram
                      </th>
                      <td>bootdey</td>
                    </tr>
                    <tr>
                      <th>
                        <LanguageIcon
                          style={{ color: "#808080" }}
                        ></LanguageIcon>
                        Website
                      </th>
                      <td>https://bootdey.com</td>
                    </tr>
                    <tr>
                      <th>
                        <TwitterIcon style={{ color: "#1DA1F2" }}></TwitterIcon>{" "}
                        Twitter
                      </th>
                      <td>@bootdey</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>

            <Col xs={8} md={8}>
              <Card
                 className="hovercard-colorless "
                style={{ width: 800, border: "none" }}
              >
                <Card.Header>Progress of the Week</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Sales record{" "}
                    <ProgressBar variant="danger" animated now={75} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Activate hours
                    <ProgressBar variant="success" animated now={45} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Feature functionality
                    <ProgressBar variant="info" animated now={60} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Feature functionality
                    <ProgressBar variant="primary" animated now={55} />
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 50 }}></Row>
        </Container>
      </div>
    </>
  );
}

export default UserProfile;
