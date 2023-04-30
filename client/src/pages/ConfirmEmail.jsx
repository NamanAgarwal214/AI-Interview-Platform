import React from "react";
import styles from '../styles/ConfirmEmail.module.css'
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
  return (
    <div
      className={styles.body}
      topmargin={0}
      rightmargin={0}
      bottommargin={0}
      leftmargin={0}
      marginWidth={0}
      marginHeight={0}
      width="100%"
      style={{
        borderCollapse: "collapse",
        borderSpacing: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        WebkitFontSmoothing: "antialiased",
        textSizeAdjust: "100%",
        msTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%",
        lineHeight: "100%",
        backgroundColor: "#F0F0F0",
        color: "#000000",
      }}
      bgcolor="#F0F0F0"
      text="#000000"
    >
      <table
        width="100%"
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        style={{
          borderCollapse: "collapse",
          borderSpacing: 0,
          margin: 0,
          padding: 0,
          width: "100%",
        }}
        className={styles.background}
      >
        <tbody>
          <tr>
            <td
              align="center"
              valign="top"
              style={{
                borderCollapse: "collapse",
                borderSpacing: 0,
                margin: 0,
                padding: "116px",
              }}
              bgcolor="#F0F0F0"
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                align="center"
                bgcolor="#FFFFFF"
                width={560}
                style={{
                  borderCollapse: "collapse",
                  borderSpacing: 0,
                  padding: 0,
                  width: "inherit",
                  maxWidth: "560px",
                }}
                className={styles.container}
              >
                <tbody>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        paddingLeft: "6.25%",
                        paddingRight: "6.25%",
                        width: "87.5%",
                        fontSize: "24px",
                        fontWeight: "bold",
                        lineHeight: "130%",
                        paddingTop: "25px",
                        color: "#000000",
                        fontFamily: "sans-serif",
                      }}
                      className={styles.header}
                    >
                    <h2>Intellihire</h2>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        paddingLeft: "6.25%",
                        paddingRight: "6.25%",
                        width: "87.5%",
                        paddingTop: "25px",
                      }}
                      className={styles.line}
                    >
                      <hr
                        color="#E0E0E0"
                        align="center"
                        width="100%"
                        size={1}
                        noshade
                        style={{ margin: 0, padding: 0 }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        paddingLeft: "6.25%",
                        paddingRight: "6.25%",
                        width: "87.5%",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "160%",
                        paddingTop: "25px",
                        color: "#000000",
                        fontFamily: "sans-serif",
                      }}
                      className={styles.paragraph}
                    >
                      <h4>Please Verify your email address</h4>
                      <br/>
                      Before you can start hiring on Intellihire,we need to verify your emailaddress.An email containing verification instructions was sent to your registered email account
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        paddingLeft: "6.25%",
                        paddingRight: "6.25%",
                        width: "87.5%",
                        paddingTop: "25px",
                        paddingBottom: "5px",
                      }}
                      className={styles.button}
                    >
                      <a
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          align="center"
                          style={{
                            maxWidth: "240px",
                            minWidth: "120px",
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            padding: 0,
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                valign="middle"
                                style={{
                                  padding: "12px 24px",
                                  margin: 0,
                                  textDecoration: "none",
                                  borderCollapse: "collapse",
                                  borderSpacing: 0,
                                  borderRadius: "4px",
                                  WebkitBorderRadius: "4px",
                                  MozBorderRadius: "4px",
                                  KhtmlBorderRadius: "4px",
                                }}
                                bgcolor="#3969d5"
                              >

                                <Link
                                    to={`/login/company`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#FFFFFF",
                                        fontFamily: "sans-serif",
                                        fontSize: "17px",
                                        fontWeight: 400,
                                        lineHeight: "120%",
                                      }}
                                >
                                    <div> Login </div>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        paddingLeft: "6.25%",
                        paddingRight: "6.25%",
                        width: "87.5%",
                        paddingTop: "25px",
                      }}
                      className={styles.line}
                    >
                      <hr
                        color="#E0E0E0"
                        align="center"
                        width="100%"
                        size={1}
                        noshade
                        style={{ margin: 0, padding: 0 }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        paddingLeft: "6.25%",
                        paddingRight: "6.25%",
                        width: "87.5%",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "160%",
                        paddingTop: "20px",
                        paddingBottom: "25px",
                        color: "#000000",
                        fontFamily: "sans-serif",
                      }}
                      className={styles.paragraph}
                    >
                      If you did not sign up for this account you can ignore
                      this email and the account will be deleted.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConfirmEmail;
