import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation(); // location 객체 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 가져오기

  console.log(location)
  useEffect(() => {
    if (location.state === undefined) {
      navigate("/"); // 상태가 없을 경우 홈으로 리다이렉트
    }
  }, [location, navigate]);

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
}

export default Detail;