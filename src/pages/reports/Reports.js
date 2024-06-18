import React, { useEffect, useState } from "react";
import { MotionDiv } from "../../components";
import { Card, CardBody, Col, Container, Row, Spinner } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useGetReportStaticsMutation } from "../../features/apiSlice";
import { getError } from "../../utils/error";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BarChart } from "@mui/x-charts";

function Reports() {
  const [getReportStatics, { isLoading }] = useGetReportStaticsMutation();
  const [statics, setStatics] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStaticsData();
  }, []);

  const fetchStaticsData = async () => {
    try {
      const data = await getReportStatics();
      setStatics(data.data);
    } catch (error) {
      getError(error);
    }
  };

  console.log(statics);

  const dataset = [
    {
      count: 1,
      month: "Jan",
    },
    {
      count: 2,
      month: "Feb",
    },
    {
      count: 3,
      month: "Mar",
    },
  ];

  return (
    <MotionDiv>
      <Container>
        <div
          style={{
            fontWeight: 600,
            fontSize: "24px",
          }}
        >
          Questions
        </div>
        <Row>
          <Col>
            <Card className="mb-3 card_shadow">
              <CardBody>
                <Row>
                  <Col style={{ color: "#475467" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Total No. of Questions Prepared
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        {statics.totalNumberOfQuestions &&
                          statics.totalNumberOfQuestions}
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card className="card_shadow">
              <CardBody>
                <Row>
                  <Col style={{ color: "#475467" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Total No. of Exams Prepared
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        {statics.totalNumberOfExams &&
                          statics.totalNumberOfExams}
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3 card_shadow" style={{ height: "100%" }}>
              <CardBody>
                <Row>
                  <Col style={{ color: "#475467" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Total Users
                    </div>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        {statics.totalNumberOfUsers &&
                          statics.totalNumberOfUsers}
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                  <Col className="text-end">
                    <div
                      style={{
                        color: "#00008B",
                        fontWeight: 600,
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/admin/reports/users")}
                    >
                      View Reports <GoArrowRight size={18} />
                    </div>
                    <BarChart
                      sx={{ marginLeft: "-50px" }}
                      dataset={dataset}
                      xAxis={[{ scaleType: "band", dataKey: "month" }]}
                      series={[{ dataKey: "count" }]}
                      // xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}

                      width={350}
                      height={150}
                    />
                  </Col>
                </Row>

                {/* <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        {statics.totalNumberOfUsers &&
                          statics.totalNumberOfUsers}
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row> */}
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Card className="mb-3 card_shadow">
              <CardBody>
                <Row>
                  <Col>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Newly Added Users
                    </div>
                  </Col>
                  <Col className="text-end">
                    <BsThreeDotsVertical className="mb-1" size={"0.9rem"} />{" "}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        2240
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3 card_shadow">
              <CardBody>
                <Row>
                  <Col style={{ color: "#475467" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Number of Tests Completed
                    </div>
                  </Col>
                  <Col className="text-end">
                    <BsThreeDotsVertical className="mb-1" size={"0.9rem"} />{" "}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        {statics.totalNumberOfTestCompleted &&
                          statics.totalNumberOfTestCompleted}
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <div
              style={{
                fontWeight: 600,
                fontSize: "24px",
              }}
            >
              Payments Received:
            </div>
            <Card className="mb-3 w-75 card_shadow">
              <CardBody>
                <Row>
                  <Col style={{ color: "#475467" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Total Amount Recieved
                    </div>
                  </Col>
                  <Col className="text-end">
                    <BsThreeDotsVertical className="mb-1" size={"0.9rem"} />{" "}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        £{" "}
                        {statics.totalamountReceived &&
                          statics.totalamountReceived}
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3 card_shadow" style={{ height: "100%" }}>
              <CardBody>
                <Row>
                  <Col style={{ color: "#475467" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      Module Wise Money Received
                    </div>
                  </Col>

                  <Col className="text-end">
                    <div
                      style={{
                        color: "#00008B",
                        fontWeight: 600,
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/admin/reports/module")}
                    >
                      View Reports <GoArrowRight size={18} />
                    </div>
                  </Col>
                  <hr />
                </Row>

                <Row>
                  <Col>
                    {!isLoading ? (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "33px",
                        }}
                      >
                        <ul>
                          <li>
                            {/* {statics.areaWiseAmountReceived &&
                              statics.areaWiseAmountReceived
                                .MechanicalEngineering} */}
                            {statics.areaWiseAmountReceived &&
                              Object.entries(
                                statics.areaWiseAmountReceived
                              ).map(([key, value]) => (
                                <li key={key}>
                                  {key}: {value}
                                </li>
                              ))}
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </MotionDiv>
  );
}

export default Reports;
