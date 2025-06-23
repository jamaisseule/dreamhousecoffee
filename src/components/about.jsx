import React from "react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Về Dream House Coffee</h2>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h3 className="text-2xl font-semibold text-amber-800 mb-4">Câu chuyện của chúng tôi</h3>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          Dream House Coffee ra đời từ giấc mơ tạo nên một không gian như ngôi nhà thứ hai cho mọi người. 
          Chúng tôi tin rằng mỗi ly cà phê không chỉ là thức uống, mà còn là cầu nối kết nối con người với nhau.
        </p>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          Tọa lạc tại 44 Bùi Thiện Ngộ, quán được thiết kế với tông màu vàng ấm áp và nâu trầm ấm, 
          tạo cảm giác thân thiện và gần gũi. Mỗi góc nhỏ trong quán đều được chăm chút kỹ lưỡng 
          để mang đến trải nghiệm tuyệt vời nhất cho khách hàng.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-amber-800 mb-4">Sứ mệnh</h4>
          <p className="text-amber-700">
            Mang đến những ly cà phê chất lượng cao trong không gian ấm cúng, 
            tạo nên những khoảnh khắc đáng nhớ cho mỗi khách hàng.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-amber-800 mb-4">Tầm nhìn</h4>
          <p className="text-amber-700">
            Trở thành điểm đến yêu thích của cộng đồng, nơi mọi người có thể 
            thư giãn, làm việc và kết nối với nhau.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
