import { FaFacebookF , FaYoutube  } from "react-icons/fa";
import { FaXTwitter , FaInstagram , FaLinkedinIn  } from "react-icons/fa6";
import {  Button, Form, Input, Select, Space } from 'antd'

  import { FlagImage, defaultCountries, parseCountry } from 'react-international-phone';
import 'react-international-phone/style.css';
import MapComponent from "../MapComponent";
// import { PhoneNumberUtil } from 'google-libphonenumber';
const ContactUs = () => {

  const { TextArea } = Input;

// const phoneUtil = PhoneNumberUtil.getInstance();

const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ["sa"].includes(iso2);
});

// const isPhoneValid = (phone: string) => {
//   try {
//     return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
//   } catch (error) {
//     return false;
//   }
// };

// const onFinish = (values: any) => {
//   console.log(values)
// }

  return (
    <div className="container p-5 mx-auto ">
        <div className="flex md:flex-row flex-col justify-center items-center gap-6">
            <div className="flex flex-col items-end gap-4 text-[#263238] font-medium sm:text-[15px] text-[14px] w-full sm:w-[50%]">
                <MapComponent />
                <div className="flex justify-center items-center gap-4">
                  <a href="#">Braunschweiger Str. 14, 12055 Riyadh, Saudi arabia</a>
                  <img src="/buildings.png"  className="w-6 h-6"/>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <a href="#">info@masrad.com</a>
                  <img src="/sms.png"  className="w-6 h-6"/>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <a href="#">+49 761 123 1203</a>
                  <img src="/call-calling.png"  className="w-6 h-6"/>
                </div>
                <div className="flex justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-4">
                <a href="#" className="w-8 h-8 bg-[#ccc] text-[white] rounded-full flex justify-center items-center "><FaFacebookF className="w-4 h-4"/></a>
            </div>
            <div className="flex justify-center items-center gap-4">
                <a href="#" className="w-8 h-8 bg-[#ccc] text-[white] rounded-full flex justify-center items-center "><FaYoutube  className="w-4 h-4"/></a>
            </div>
            <div className="flex justify-center items-center gap-4">
                <a href="#" className="w-8 h-8 bg-[#ccc] text-[white] rounded-full flex justify-center items-center "><FaXTwitter  className="w-4 h-4"/></a>
            </div>
            <div className="flex justify-center items-center gap-4">
                <a href="#" className="w-8 h-8 bg-[#D08A40] text-[white] rounded-full flex justify-center items-center "><FaInstagram  className="w-4 h-4"/></a>
            </div>
            <div className="flex justify-center items-center gap-4">
                <a href="#" className="w-8 h-8 bg-[#ccc] text-[white] rounded-full flex justify-center items-center "><FaLinkedinIn  className="w-4 h-4"/></a>
            </div>
                </div>
            </div>
            <div className="flex flex-col md:w-[50%] w-full  ">
              <Form 
              style={{ direction: 'rtl', textAlign: 'right', color : '#8A8A8A' , fontSize : 700 }}
                  onFinish={""}
                    layout="vertical"
                    >
                    <Form.Item 
            label={'الاسم بالكامل'}
            name="name"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'please write your name',
              },
            ]}
          >
            <Input size='large' />
          </Form.Item>
          <div className="flex md:flex-row flex-col justify-center items-center gap-2"><Form.Item label={'رقم الهاتف'} style={{
            width: '100%',
          }}>
<Space.Compact className="w-full">
<Form.Item
    dependencies={["countryCode"]}
    name={"phoneNumber"}
    noStyle
    rules={[
      {
        required: true,
        message: 'enter phone number',
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
          return Promise.reject(
            new Error("Invalid phone number"
            )
          );
        },
      }),
    ]}
  >
    <Input  className="w-[calc(100%_-_100px)]" />
  </Form.Item>
  <Form.Item initialValue={"966"} name={"countryCode"} noStyle>
    <Select  size="large" className="!w-[100px]">
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
  
</Space.Compact>
</Form.Item>
  <Form.Item
  style={{
    width: '100%',
  }}
    label={'البريد الالكترونى'}
    name="email"
    rules={[
      {
type:"email",
        message: 'please write your email',
      },
    ]}
  >
    <Input size='large' />
  </Form.Item></div>
          <Form.Item 
          style={{
            width: '100%',
          }}
            label={' رسالتك'}
            name="textrea"
            rules={[
              {
type:"text",
                message: 'please write your message',
              },
            ]}
          >
          <TextArea rows={4} />
          </Form.Item>
  
  
 

<div className=''>

            <Form.Item>
            <Button 
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
        </div>
      
    </div>
  )
}

export default ContactUs
