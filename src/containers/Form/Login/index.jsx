import React from 'react'
import { useState } from 'react'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { gql, useMutation } from '@apollo/client';

const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(data: $input) {
      account {
        id
        identityNumber
        accountName
        firstName
        lastName
        email
        birthday
        phoneNumber
        role
        isActive
        createdAt
        updatedAt
        deletedAt
      }
      token {
        accessToken
      }
    }
  }
`;

export const LoginContainer= () => {

    const [handleLogin, {loading}] = useMutation(SIGN_IN, {
      onCompleted(data) {
        console.log(data.signIn.token.accessToken);
      },
      onError(err) {
        console.log(err);
      },
    });

    const login =[ {
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
    ]
    const typeBtn =[{
        icon:"fa-brands fa-facebook",
        type:"Facebook",
        color:"#365899"
    },
    {
        icon:"fa-brands fa-facebook",
        type:"Google",
        color:"#ea4335"
    },{
        icon:"fa-brands fa-facebook",
        type:"Linkedin",
        color:"#056497"
    }]
  const [isnumberpass,setIsnumberpass]=useState(false)
  const [data, setData] = useState({  email: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.password.length<6 || data.password.length>25){
      setIsnumberpass(true)
    }
    else{
      setIsnumberpass(false)
    }
    console.log(data)
    handleLogin({
      variables : {
        input: data
      }
    })
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
              <p className='register-content-top'>Chào mừng bạn trở lại, </p>
              <p className='register-content-bot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur quaerat sed sapiente ea quo sit aliquid.</p>
            </div>
           {  (isnumberpass&&<div className="registor-error">Mật khẩu phải từ 6 đến 25 kí tự.</div>) }
            <form action="">
              {login.map((el, index) => {
                return <Input key={index} typ={el.types} title={el.title}
                 placholder={el.placeholder} icon={el.icon}
                 handleChange={changeValue(el.name)} value={data.types} />
              })}
              <p className='register-agree'>
                Bằng việc đăng ký tài khoản, bạn đã đồng ý với <span>Điều khoản dịch vụ </span> và <span>Chính sách bảo mật </span> của chúng tôi
              </p>
              <Button handleClick={handleSubmit} content='Dang nhap'  disabled={loading}/>
            </form>
            <p className='hoac'>Hoặc</p>
            <div className="login-different">
                {typeBtn.map((el,index) =>  
                   <div className='width30' key={index}>
                    <i className={`${el.icon} icon-login`}></i>
                   <Button content={el.type}  color={el.color}/>
                   </div>
                )}
            </div>
            <div className="want-login">
              <p>
                <span>
                  Bạn chưa có tài khoản?
                  <a href="https://www.facebook.com/"> Đăng kí ngay</a>
                </span>
                  <span>
                  <a href="https://www.facebook.com/"> Quên mật khẩu</a>
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

