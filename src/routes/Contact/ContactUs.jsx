import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Button, Form, Input, Select, Space } from "antd";
import toast from "react-hot-toast";
import {
  FlagImage,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import MapComponent from "../MapComponent";
import { PhoneNumberUtil } from "google-libphonenumber";
import axios from "axios";
import { useState } from "react";
const ContactUs = ({ settings }) => {
  const contacts = [7, 5, 4];
  // const firstContact = settings.filter((_ , index) => contacts.includes(index))
  const firstContact = settings.filter((el) =>
    ["location", "email", "phone"].includes(el.key)
  );

  const icons1 = (key) => {
    if (key === "location") {
      return "/buildings.png";
    } else if (key === "email") {
      return "/sms.png";
    } else if (key === "phone") {
      return "/call-calling.png";
    }
  };

  const arrays = [6, 8, 9, 10, 11];
  const twoContact = settings.filter((el) =>
    ["facebook", "youtube", "x", "instagram", "linkedin"].includes(el.key)
  );
  const icons2 = (key) => {
    if (key === "instagram") {
      return <FaInstagram />;
    } else if (key === "x") {
      return <FaXTwitter />;
    } else if (key === "facebook") {
      return <FaFacebookF />;
    } else if (key === "youtube") {
      return <FaYoutube />;
    } else if (key === "linkedin") {
      return <FaLinkedinIn />;
    }
  };
  const [form] = Form.useForm();

  const { TextArea } = Input;

  const phoneUtil = PhoneNumberUtil.getInstance();

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ["sa"].includes(iso2);
  });

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
  const [loading, setLoading] = useState(false);
  const request = (values) => {
    setLoading(true);
    values.phone = values.countryCode + values.phoneNumber;
    axios
      .post("https://backend.masrad.sa/api/contact", values)
      .then((res) => {
        setLoading(false);

        const message = res.data.message;
        form.resetFields();
        toast.success(message);
      })
      .catch((err) => {
        setLoading(false);
        const message = err?.response?.data?.message;
        toast.error(message);
      });
  };

  return (
    <div className="container p-5 mx-auto ">
      <div className="flex md:flex-row flex-col justify-center items-center gap-6">
        <div className="flex flex-col md:w-[50%] w-full  ">
          <Form
            form={form}
            style={{ direction: "rtl", textAlign: "right" }}
            onFinish={request}
            layout="vertical"
          >
            <Form.Item
              label={
                <span style={{ color: "#8A8A8A", fontWeight: 700 }}>
                  الاسم بالكامل
                </span>
              }
              name="full_name"
              style={{
                width: "100%",
              }}
              rules={[
                {
                  required: true,
                  message: "ادخل الاسم من فضلك",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <div className="flex md:flex-row flex-col justify-center items-center gap-2">
              <Form.Item
                label={
                  <span style={{ color: "#8A8A8A", fontWeight: 700 }}>
                    رقم الهاتف{" "}
                  </span>
                }
                style={{
                  width: "100%",
                }}
              >
                <Space.Compact className="w-full">
                  <Form.Item initialValue={"966"} name={"countryCode"} noStyle>
                    <Select size="large" className="!w-[100px]">
                      {countries.map((c) => {
                        const country = parseCountry(c);
                        return (
                          <Select.Option
                            key={country.dialCode}
                            value={country.dialCode}
                          >
                            <div className="flex gap-1 items-center">
                              <FlagImage
                                className="w-[30px]"
                                iso2={country.iso2}
                              />
                              <div>{country.dialCode}</div>
                            </div>
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    dependencies={["countryCode"]}
                    name={"phoneNumber"}
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "ادخل رقم هاتفك",
                      },

                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            isPhoneValid(
                              "+" + getFieldValue("countryCode") + value
                            )
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error("رقم غير صحيح"));
                        },
                      }),
                    ]}
                  >
                    <Input className="w-[calc(100%_-_100px)]" />
                  </Form.Item>
                </Space.Compact>
              </Form.Item>
              <Form.Item
                style={{
                  width: "100%",
                }}
                label={
                  <span style={{ color: "#8A8A8A", fontWeight: 700 }}>
                    {" "}
                    البريد الالكترونى
                  </span>
                }
                name="email"
                rules={[
                  {
                    required: true,
                    // type:"email",
                    message: "قم بادخال البريد الالكتروني من فضلك",
                  },
                  {
                    type: "email",
                    message: "قم بادخال بريد الالكتروني صحيح",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </div>
            <Form.Item
              style={{
                width: "100%",
              }}
              label={
                <span style={{ color: "#8A8A8A", fontWeight: 700 }}>
                  رسالتك{" "}
                </span>
              }
              name="message"
              rules={[
                {
                  required: true,
                  message: "اكتب رسالتك الينا",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <div className="">
              <Form.Item>
                <Button
                  loading={loading}
                  type="primary"
                  className="mt-4 bg-[#D08A40] p-5 no-hover-effect "
                  htmlType="submit"
                >
                  إرسال
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="flex flex-col items-start gap-4 w-full md:w-[50%]">
          <MapComponent />
          {firstContact.map((el, index) => (
            <div
              key={el.id}
              className="flex justify-center items-center gap-4  text-[#263238] font-medium sm:text-[15px]  text-center"
            >
              <img src={icons1(el.key)} className="w-6 h-6" />
              <a
                href={
                  el.key === "email"
                    ? `mailto:${el.value}`
                    : el.key === "phone"
                    ? `tel:${el.value}`
                    : "#location"
                }
              >
                {el.value}
              </a>
            </div>
          ))}

          <div className="flex justify-center items-center gap-2">
            {twoContact.map((el, index) => (
              <div
                key={el.id}
                className="flex justify-center items-center gap-4"
              >
                <a
                  href={`https://${el.value}`}
                  target="_blank"
                  className={
                    "hover:bg-[#d08a40] bg-[#ccc]  text-[white] rounded-full flex justify-center items-center w-8 h-8"
                  }
                >
                  {icons2(el.key)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
