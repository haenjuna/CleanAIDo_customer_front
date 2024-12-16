import {Link} from "react-router-dom";

function MyPageComponent() {
    return (
        <div>
            <div className="pb-40 text-bara_sodomy mt-[9rem] bg-bara_gray_1">
                <div className="px-8 pt-8 text-[1.2rem] pb-4">
                    {/* 사용자 이름 데이터 넣어야 함!!!! */}
                    <b>박소영</b>님, 반갑습니다!
                </div>
                <div className="bg-white py-4 px-8">
                    {/* 대시보드 */}
                    <div
                        className="bg-bara_gray_1 rounded-[0.5rem] w-full h-28 flex justify-between items-center p-8 relative">
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-[1.5rem]">2.3m</p>
                            <p>총결제액</p>
                        </div>

                        {/* 세로선 */}
                        <div
                            className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-[1px] bg-bara_gray_3"></div>

                        <div className="flex flex-col items-center">
                            <p className="font-bold text-[1.5rem]">42</p>
                            <p>총구매수</p>
                        </div>

                        {/* 세로선 */}
                        <div
                            className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-[1px] bg-bara_gray_3"></div>

                        <div className="flex flex-col items-center">
                            <p className="font-bold text-[1.5rem]">21</p>
                            <p>후기작성</p>
                        </div>
                    </div>


                    {/* 메뉴 */}
                    <div className="flex justify-between mt-8">
                        <Link to="order/list">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <img src="/images/my_order_list.svg" className="w-[2.25rem]"/>
                                <span>주문내역</span>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <img src="/images/my_wish_list.svg" className="w-[2.25rem]"/>
                                <span>찜한목록</span>
                            </div>
                        </Link>
                        <Link to="review/list">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <img src="/images/my_review_list.svg" className="w-[2.25rem]"/>
                                <span>리뷰관리</span>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <img src="/images/my_edit_info.svg" className="w-[2.25rem]"/>
                                <span>정보수정</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageComponent;