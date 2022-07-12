import React from 'react'
import './style.css'
import { HeaderContainer } from '../Header'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiHeart,BiConfused } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CgBookmark } from "react-icons/cg";



export const HomeContainer = () => {
    return (
        <>
            <HeaderContainer />
            <main>
                <div className='home-contaier'>
                    <div className="home-left">
                        <div className="home-story">
                            <ul className='home-story-menu'>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Rido.jpg`)} alt="" />
                                    </span>
                                    <p>RiĐỗ</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Sati.jpg`)} alt="" />
                                    </span>
                                    <p>SaTị</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Quangnui.png`)} alt="" />
                                    </span>
                                    <p>QuangNúi</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Mocnhan.jfif`)} alt="" />
                                    </span>
                                    <p>MộcNhân</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Pepe.jfif`)} alt="" />
                                    </span>
                                    <p>ThiênThần</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Mu.jfif`)} alt="" />
                                    </span>
                                    <p>FcPhảnThầy</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Barca.jfif`)} alt="" />
                                    </span>
                                    <p>FcNợNần</p>
                                </li>
                                <li className="home-story-item">
                                    <span>
                                        <img src={require(`../../img/Kiemlam.jpg`)} alt="" />
                                    </span>
                                    <p>KiểmLâm</p>
                                </li>
                            </ul>
                        </div>
                        <div className="home-info">
                            <div className="home-post">
                                <div className="header-post">
                                    <div className="infor-user-post">
                                        <img className='avatar-post' src={require(`../../img/Sati.jpg`)} alt="" />
                                        <span>SaTị</span>
                                    </div>
                                    <HiOutlineDotsHorizontal className='icon-header-post' />
                                </div>
                                <div className="container-post">
                                    <div className="img-container-post">
                                        <img src={require(`../../img/Sati.jpg`)} alt="" />
                                    </div>
                                    <div className='assess-post'>
                                        <div className="like-cmt-post">
                                            <div className="like-cmt">
                                                <BiHeart className="like-cmt-icon"/>
                                                <FaRegComment className="like-cmt-icon"/>
                                                <IoPaperPlaneOutline className="like-cmt-icon"/>
                                            </div>
                                            <div className="hidden">
                                                <CgBookmark className="like-cmt-icon"/>
                                            </div>
                                        </div>
                                        <div className="content-post">
                                            <div className="number-like">
                                                <span>100,000</span>
                                                <span> lượt thích</span>
                                            </div>
                                            <div className="content-user">
                                                <span className="name-user">SaTị</span>
                                                <p>Bảy bóng làm gì có nhiều bóng vàng như anh?</p>
                                            </div>
                                            <div className="number-comt">
                                                <p>Xem tất cả <span>10,000</span> bình luận</p>
                                            </div>
                                            <div className="comment-user">
                                                <div className='comment-user-left'>
                                                <p className="name-user-cmt">RiĐỗ</p>
                                                <span>Râu cha mãi đỉnh anh ơi!</span>
                                                </div>
                                                <BiHeart className='comment-user-right'/>
                                            </div>
                                            <div className="comment-user">
                                                <div className='comment-user-left'>
                                                <p className="name-user-cmt">RiCon</p>
                                                <span>Tuổi gì so với anh bảy?</span>
                                                </div>
                                                <BiHeart className='comment-user-right'/>
                                            </div>
                                            <div className="number-day">
                                                2 NGÀY TRƯỚC
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-post">
                                   <div className="width-95">
                                     <div className='footer-post-left'>
                                        <BiConfused className='footer-post-left-icon'/>
                                    <input type="text" placeholder='Thêm bình luận ...'/></div>
                                    <button>Đăng</button>
                                   </div>
                                </div>
                            </div>
                            <div className="home-post">
                                <div className="header-post">
                                    <div className="infor-user-post">
                                        <img className='avatar-post' src={require(`../../img/Sati.jpg`)} alt="" />
                                        <span>SaTị</span>
                                    </div>
                                    <HiOutlineDotsHorizontal className='icon-header-post' />
                                </div>
                                <div className="container-post">
                                    <div className="img-container-post">
                                        <img src={require(`../../img/Sati.jpg`)} alt="" />
                                    </div>
                                    <div className='assess-post'>
                                        <div className="like-cmt-post">
                                            <div className="like-cmt">
                                                <BiHeart className="like-cmt-icon"/>
                                                <FaRegComment className="like-cmt-icon"/>
                                                <IoPaperPlaneOutline className="like-cmt-icon"/>
                                            </div>
                                            <div className="hidden">
                                                <CgBookmark className="like-cmt-icon"/>
                                            </div>
                                        </div>
                                        <div className="content-post">
                                            <div className="number-like">
                                                <span>100,000</span>
                                                <span> lượt thích</span>
                                            </div>
                                            <div className="content-user">
                                                <span className="name-user">SaTị</span>
                                                <p>Bảy bóng làm gì có nhiều bóng vàng như anh?</p>
                                            </div>
                                            <div className="number-comt">
                                                <p>Xem tất cả <span>10,000</span> bình luận</p>
                                            </div>
                                            <div className="comment-user">
                                                <div className='comment-user-left'>
                                                <p className="name-user-cmt">RiĐỗ</p>
                                                <span>Râu cha mãi đỉnh anh ơi!</span>
                                                </div>
                                                <BiHeart className='comment-user-right'/>
                                            </div>
                                            <div className="comment-user">
                                                <div className='comment-user-left'>
                                                <p className="name-user-cmt">RiCon</p>
                                                <span>Tuổi gì so với anh bảy?</span>
                                                </div>
                                                <BiHeart className='comment-user-right'/>
                                            </div>
                                            <div className="number-day">
                                                2 NGÀY TRƯỚC
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-post">
                                   <div className="width-95">
                                     <div className='footer-post-left'>
                                        <BiConfused className='footer-post-left-icon'/>
                                    <input type="text" placeholder='Thêm bình luận ...'/></div>
                                    <button>Đăng</button>
                                   </div>
                                </div>
                            </div>
                            <div className="home-post">
                                <div className="header-post">
                                    <div className="infor-user-post">
                                        <img className='avatar-post' src={require(`../../img/Sati.jpg`)} alt="" />
                                        <span>SaTị</span>
                                    </div>
                                    <HiOutlineDotsHorizontal className='icon-header-post' />
                                </div>
                                <div className="container-post">
                                    <div className="img-container-post">
                                        <img src={require(`../../img/Sati.jpg`)} alt="" />
                                    </div>
                                    <div className='assess-post'>
                                        <div className="like-cmt-post">
                                            <div className="like-cmt">
                                                <BiHeart className="like-cmt-icon"/>
                                                <FaRegComment className="like-cmt-icon"/>
                                                <IoPaperPlaneOutline className="like-cmt-icon"/>
                                            </div>
                                            <div className="hidden">
                                                <CgBookmark className="like-cmt-icon"/>
                                            </div>
                                        </div>
                                        <div className="content-post">
                                            <div className="number-like">
                                                <span>100,000</span>
                                                <span> lượt thích</span>
                                            </div>
                                            <div className="content-user">
                                                <span className="name-user">SaTị</span>
                                                <p>Bảy bóng làm gì có nhiều bóng vàng như anh?</p>
                                            </div>
                                            <div className="number-comt">
                                                <p>Xem tất cả <span>10,000</span> bình luận</p>
                                            </div>
                                            <div className="comment-user">
                                                <div className='comment-user-left'>
                                                <p className="name-user-cmt">RiĐỗ</p>
                                                <span>Râu cha mãi đỉnh anh ơi!</span>
                                                </div>
                                                <BiHeart className='comment-user-right'/>
                                            </div>
                                            <div className="comment-user">
                                                <div className='comment-user-left'>
                                                <p className="name-user-cmt">RiCon</p>
                                                <span>Tuổi gì so với anh bảy?</span>
                                                </div>
                                                <BiHeart className='comment-user-right'/>
                                            </div>
                                            <div className="number-day">
                                                2 NGÀY TRƯỚC
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-post">
                                   <div className="width-95">
                                     <div className='footer-post-left'>
                                        <BiConfused className='footer-post-left-icon'/>
                                    <input type="text" placeholder='Thêm bình luận ...'/></div>
                                    <button>Đăng</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-right">
                        <div className="home-right-top">
                            <div className="you-user">
                                <img src={require(`../../img/user.jpg`)} alt="" />
                                <div className="name-you">
                                    <p>nguyenduylinh1123</p>
                                    <span>Nguyễn Duy Linh</span>
                                </div>
                            </div>
                            <button>Chuyển</button>
                        </div>
                        <div className="home-right-container">
                            <div className="right-container-top">
                                <span>Gợi ý cho bạn</span>
                                <p>Xem tất cả</p>
                            </div>
                            <div className="right-container">
                                <div className="can-follow">
                                    <div className="info-follow">
                                        <img src={require(`../../img/Rido.png`)} alt="" />
                                        <div className="name-follow">
                                            <p>RiCha</p>
                                            <span>Bố của RiCon</span>
                                        </div>
                                    </div>
                                    <button>Theo dõi</button>
                                </div>
                                <div className="can-follow">
                                    <div className="info-follow">
                                        <img src={require(`../../img/Rido.png`)} alt="" />
                                        <div className="name-follow">
                                            <p>RiCha</p>
                                            <span>Bố của RiCon</span>
                                        </div>
                                    </div>
                                    <button>Theo dõi</button>
                                </div>
                                <div className="can-follow">
                                    <div className="info-follow">
                                        <img src={require(`../../img/Rido.png`)} alt="" />
                                        <div className="name-follow">
                                            <p>RiCha</p>
                                            <span>Bố của RiCon</span>
                                        </div>
                                    </div>
                                    <button>Theo dõi</button>
                                </div>
                                <div className="can-follow">
                                    <div className="info-follow">
                                        <img src={require(`../../img/Rido.png`)} alt="" />
                                        <div className="name-follow">
                                            <p>RiCha</p>
                                            <span>Bố của RiCon</span>
                                        </div>
                                    </div>
                                    <button>Theo dõi</button>
                                </div>
                                <div className="can-follow">
                                    <div className="info-follow">
                                        <img src={require(`../../img/Rido.png`)} alt="" />
                                        <div className="name-follow">
                                            <p>RiCha</p>
                                            <span>Bố của RiCon</span>
                                        </div>
                                    </div>
                                    <button>Theo dõi</button>
                                </div>
                            </div>
                        </div>
                        <div className="home-right-footer">
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">Trợ giúp</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">Báo chí</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">API</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">Việc làm</a>
                                </li>
                                <li style={{marginLeft: 0 }}>
                                    <a href="https://www.youtube.com/">Quyền riêng tư</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">Điều khoản</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">Vị trí</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/">Ngôn ngữ</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
