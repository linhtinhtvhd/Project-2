
import React from 'react'
import { useState } from 'react'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

export const RegisterContainer = () => {
  const register = [{
    types: 'text',
    title: 'Họ và tên',
    icon: 'fa-solid fa-user',
    placeholder: 'Nhập họ và tên của bạn',
    name: "fullname"
  },
  {
    name: "email",
    types: 'email',
    title: 'Email',
    icon: 'fa-solid fa-envelope',
    placeholder: 'Nhập email của bạn '
  },
  {
    name: "password",
    types: 'password',
    title: 'Mật khẩu',
    icon: 'fa-solid fa-shield',
    placeholder: 'Nhập mật khẩu'
  }
    ,
  {
    name: "repassword",
    types: 'password',
    title: 'Xác nhận mật khẩu',
    icon: 'fa-solid fa-shield',
    placeholder: 'Nhập lại mật khẩu'
  }]
  const [isname,setIsname] =useState(false)
  const [isnumberpass,setIsnumberpass]=useState(false)
  const [isrepass,setRepass] = useState(false)
  const [data, setData] = useState({ fullname: '', email: '', password: '', repassword: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.fullname.length < 2 || data.fullname.length >50){
      setIsname(true)
    }
    else{
      setIsname(false)
    }
    if(data.password.length<6 || data.password.length>25){
      setIsnumberpass(true)
    }
    else{
      setIsnumberpass(false)
    }
    if(data.password !== data.repassword){
      setRepass(true)
    }
    else{
      setRepass(false)
    }
    console.log(data)
  }
  const changeValue = (filed) => (value) => {
    setData({
      ...data,
      [filed]: value
    })
   
  }
  
  return (
    <div className='register'>
      <div className="register-container width50">
        <div className="container-register">
          <div className='register-header'>
            <div className="register-logo">
              <a className='register-logo-link' href="https://www.facebook.com/linhtinhtvhd/">
                <span className='left-logo'>CIJS</span>
                <span className='right-logo'>75</span>
              </a>
            </div>
            <div className="register-content ">
              <p className='register-content-top'>Chào mừng bạn đến với CIJS75 </p>
              <p className='register-content-bot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur quaerat sed sapiente ea quo sit aliquid.</p>
            </div>
           { (isname && <div className="registor-error">Họ và Tên phải có độ dài từ 2 đến 50 ký tự.</div>) || (isnumberpass&&<div className="registor-error">Mật khẩu phải từ 6 đến 25 kí tự.</div>) || (isrepass&&<div className="registor-error">Mật khẩu xác nhận chưa đúng</div>)}
            <form action="">
              {register.map((el, index) => {
                return <Input key={index} typ={el.types} title={el.title}
                 placholder={el.placeholder} icon={el.icon}
                 handleChange={changeValue(el.name)} value={data.types} />
              })}
              <p className='register-agree'>
                Bằng việc đăng ký tài khoản, bạn đã đồng ý với <span>Điều khoản dịch vụ </span> và <span>Chính sách bảo mật </span> của chúng tôi
              </p>
              <Button handleClick={handleSubmit} content='Đăng kí'/>
            </form>
            <div className="want-login">
              <p>
                <span>
                Bạn đã có tài khoản?
                  <a href="https://www.facebook.com/"> Đăng nhập ngay</a>
                </span>
              </p>
            </div>
            <div className="register-footer">
              <p>Bạn gặp khó khăn khi tạo tài khoản?</p>
              <p>Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).</p>
            </div>
          </div>
        </div>
      </div>
      <div className="register-slider width50">
        <div className='register-sli'>
          <img className='register-slider-img ' src="https://vignette.wikia.nocookie.net/scribblenauts/images/0/07/Deli.png/revision/latest?cb=20130302153958" alt="" />
          <p>Bảo mật và An toàn tuyệt đối</p>
          <span>Thông tin và tài khoản của bạn sẽ được bảo mật. Mọi thông tin cá nhân của bạn sẽ an toàn.</span>
        </div>
      </div>
    </div>
  )
}
