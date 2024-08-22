import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import { useContext } from "react";
import { LanguageContext } from "../hooks/languageContext";

const Policy = () => {
  const valueLocation = useContext(LanguageContext);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="text-center ">
      <Header />
      <div className="mx-auto">
        <div className="md:grid md:grid-cols-2">
          <div className="text-left p-11">
            <h1 className="text-center font-bold text-[40px]">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bắt đầu với"
                : "Start with"}{" "}
              <span className="text-[#54ffc0]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Giả đám cưới"
                  : "Fake Wedding"}
              </span>
            </h1>
            <p className="text-[25px]">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bạn muốn biết tương lai của bạn và người yêu?, Bạn muốn biết hãy tận hưởng niềm vui với phần mềm dự đoán tương lai của bạn, hãy trải nghiệm ứng dụng trí tuệ nhân tạo, chúng ta là nhân tạo phần mềm thông minh tạo ra những dự đoán trong tương lai, chúng tôi sẽ tự động tạo dự đoán của bạn, trải nghiệm nó, chúng tôi sẽ tạo ra những kịch bản tình yêu trong tương lai"
                : "You want to know the future of you and your lover?, you want to have fun with a software that predicts your future, experience our artificial intelligence application, we are artificial intelligence software create future predictions, we will automatically generate your predictions, experience it, we will create future scenarios of love"}
            </p>
            <Button
              variant={"cus1"}
              className="w-[200px] mt-2 md:ml-[200px] ml-[70px]"
            >
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bản tải android"
                : "Download android"}
            </Button>
            <br />
            <Button
              variant={"cus1"}
              className="w-[200px] mt-2 md:ml-[200px] ml-[70px]"
            >
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bản tải IOS"
                : "Download IOS"}
            </Button>
          </div>
          <div className="mt-4">
            <img
              className="w-[700px] h-[480px] object-cover rounded-3xl"
              src="img\gal7.png"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-11">
        <div className="md:grid md:grid-cols-2">
          <div className="mt-4">
            <img
              className="w-[700px] h-[480px] object-cover rounded-3xl hidden md:block"
              src="img\gal9.png"
            />
          </div>
          <div className="text-left p-11">
            <h1 className="text-center font-bold text-[40px]">
              {valueLocation.geoplugin_city === "Hanoi" ? "Về" : "About"}{" "}
              <span className="text-[#54ffc0]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng Tôi?"
                  : "Us?"}
              </span>
            </h1>
            <p className="text-[25px]">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bạn muốn biết tương lai của bạn và người yêu?, Bạn muốn biết hãy tận hưởng niềm vui với phần mềm dự đoán tương lai của bạn, hãy trải nghiệm ứng dụng trí tuệ nhân tạo, chúng ta là nhân tạo phần mềm thông minh tạo ra những dự đoán trong tương lai, chúng tôi sẽ tự động tạo dự đoán của bạn, trải nghiệm nó, chúng tôi sẽ tạo ra những kịch bản tình yêu trong tương lai"
                : "You want to know the future of you and your lover?, you want to have fun with a software that predicts your future, experience our artificial intelligence application, we are artificial intelligence software create future predictions, we will automatically generate your predictions, experience it, we will create future scenarios of love"}
            </p>
            <Button
              variant={"cus1"}
              className="w-[200px] mt-2 md:ml-[200px] ml-[70px]"
            >
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bản tải android"
                : "Download android"}
            </Button>
            <br />
            <Button
              variant={"cus1"}
              className="w-[200px] mt-2 md:ml-[200px] ml-[70px]"
            >
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bản tải IOS"
                : "Download IOS"}
            </Button>
          </div>
        </div>
        <div className="mx-auto text-left px-11">
          <h1 className="mt-11 font-bold text-[40px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Thông báo về quyền riêng tư"
              : "Privacy Notice"}
          </h1>
          <p className="text-[25px] mt-4">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Cập nhật lần cuối: Ngày 8 tháng 4 năm 2022 Thông báo về quyền riêng tư này được thiết kế để trợ giúp bạn hiểu cách Thinkdiff, một công ty được thành lập hợp pháp theo Việt Nam, địa điểm kinh doanh chính là Hà Nội Việt Nam (“chúng tôi,” “chúng tôi” và “của chúng tôi”) thu thập, sử dụng và chia sẻ thông tin cá nhân của bạn thông tin và giúp bạn hiểu và thực hiện quyền riêng tư của mình quyền.NỘI DUNG"
              : "Last updated: 8 April 2022 This Privacy Notice is designed to help you understand how Thinkdiff, a company duly incorporated under the Vietnam, which principal place of business is Ha Noi VietNam (“we,” “us,” and “our”) collects, uses, and shares your personal information and to help you understand and exercise your privacy rights.CONTENT"}
          </p>
        </div>
        <div className="mx-auto text-left text-[25px] mt-4 px-11 pb-8">
          <div className="">
            <h1 className="mt-11 font-bold text-[40px]">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Nội dung"
                : "Content"}
            </h1>
            <ul className="text-[#46b8ff] cursor-pointer">
              <li onClick={() => scrollToSection("section1")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "1. Phạm vi"
                  : "1. Scope"}
              </li>
              <li onClick={() => scrollToSection("section2")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "2. Nhứng thay đổi đối với thông báo về quyền riêng tư của chúng tôi"
                  : "2. Changes to our privacy notice"}
              </li>
              <li onClick={() => scrollToSection("section3")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "3. Thông tin cá nhân chúng tôi thu thập"
                  : "3. Personal information we collect"}
              </li>
              <li onClick={() => scrollToSection("section4")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "4. Cách chúng tôi sử dụng thông tin của bạn"
                  : "4. How we use your information"}
              </li>
              <li onClick={() => scrollToSection("section5")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "5. Cách chúng tôi tiết lộ thông tin của bạn"
                  : "5. How we disclose your information"}
              </li>
              <li onClick={() => scrollToSection("section6")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "6. Các lựa chọn và quyền riêng tư của bạn"
                  : "6. Your privacy choices and rights"}
              </li>
              <li onClick={() => scrollToSection("section7")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "7. Bảo mật thông tin của bạn"
                  : "7. Security of your information"}
              </li>
              <li onClick={() => scrollToSection("section8")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "8. Truyền dữ liệu quốc tế"
                  : "8. International data transfers"}
              </li>
              <li onClick={() => scrollToSection("section9")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "9. Lưu giữ thông tin cá nhân"
                  : "9. Retention of personal information"}
              </li>
              <li onClick={() => scrollToSection("section10")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "10. Thông báo bổ sung dành cho cư dân California"
                  : "10. Supplemental notice for California residents"}
              </li>
              <li onClick={() => scrollToSection("section11")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "11. Thông báo bổ sung dành cho cư dân Nevada"
                  : "11. Supplemental notice for Nevada residents"}
              </li>
              <li onClick={() => scrollToSection("section12")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "12. Thông tin trẻ em"
                  : "12. Children’s information"}
              </li>
              <li onClick={() => scrollToSection("section13")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "13. Trang web/ứng dụng của bên thứ ba"
                  : "13. Third-party websites/applications"}
              </li>
              <li onClick={() => scrollToSection("section14")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "14. Cơ quan giám sát"
                  : "14. Supervisory authority"}
              </li>
              <li onClick={() => scrollToSection("section15")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "15. Ứng dụng của bạn thu thập dữ liệu khuôn mặt nào?"
                  : "15. WHAT face data does your app collect?"}
              </li>
              <li onClick={() => scrollToSection("section16")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "16. Bạn sử dụng dữ liệu khuôn mặt đã thu thập như thế nào? Cung cấp đầy đủ và giải thích rõ ràng về tất cả các kế hoạch sử dụng dữ liệu này."
                  : "16. How do you use the collected face data? Provide a complete and clear explanation of all planned uses of this data."}
              </li>
              <li onClick={() => scrollToSection("section17")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "17. Dữ liệu có được chia sẻ với bất kỳ bên thứ ba nào không? Nơi sẽ thông tin này có được lưu trữ không?"
                  : "17. Will the data be shared with any third parties? Where will this information be stored?"}
              </li>
              <li onClick={() => scrollToSection("section18")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "18. Dữ liệu khuôn mặt sẽ được lưu giữ trong bao lâu?"
                  : "18. How long will face data be retained?"}
              </li>
              <li onClick={() => scrollToSection("section19")}>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "19. Liên lạc với tôi"
                  : "19. Contact us"}
              </li>
            </ul>
            <section id="section1">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "1. PHẠM VI"
                  : "1. SCOPE"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Thông báo về quyền riêng tư này áp dụng cho thông tin cá nhân được xử lý bởi chúng tôi trên ứng dụng di động FutureLove và các trang trực tuyến và dịch vụ ngoại tuyến. Để làm cho Thông báo về Quyền riêng tư này dễ đọc hơn, ứng dụng di động FutureLove của chúng tôi và các dịch vụ liên quan của chúng tôi là gọi chung là “Dịch vụ”."
                  : "This Privacy Notice applies to personal information processed by us on our FutureLove mobile app, and our related online and offline offerings. To make this Privacy Notice easier to read, our FutureLove mobile app and our related offerings are collectively called “Services.”"}
              </p>
            </section>
            <section id="section2">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "2. THAY ĐỔI THÔNG BÁO QUYỀN RIÊNG TƯ CỦA CHÚNG TÔI"
                  : "2. CHANGES TO OUR PRIVACY NOTICE"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Đôi khi, chúng tôi có thể sửa đổi Thông báo về quyền riêng tư này theo ý riêng của chúng tôi. và quyền quyết định tuyệt đối. Nếu có bất kỳ thay đổi quan trọng nào đối với Thông báo về Quyền riêng tư này, chúng tôi sẽ thông báo cho bạn theo yêu cầu của luật hiện hành có hiệu lực kể từ ngày có những thay đổi quan trọng đó đang trở nên có hiệu lực. Bạn hiểu và đồng ý rằng bạn sẽ được coi là đã chấp nhận Thông báo quyền riêng tư được cập nhật nếu bạn tiếp tục sử dụng Dịch vụ của chúng tôi sau khi Thông báo về quyền riêng tư mới có hiệu lực tác dụng."
                  : "We may revise this Privacy Notice from time to time in our sole and absolute discretion. If there are any material changes to this Privacy Notice, we will notify you as may be required by applicable law effective as of the date of such material changes becoming effective. You understand and agree that you will be deemed to have accepted the updated Privacy Notice if you continue to use our Services after the new Privacy Notice takes effect."}
              </p>
            </section>
            <section id="section3">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "3. THÔNG TIN CÁ NHÂN CHÚNG TÔI THU THẬP"
                  : "3. PERSONAL INFORMATION WE COLLECT"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các loại thông tin cá nhân chúng tôi thu thập tùy thuộc vào cách thức bạn tương tác với chúng tôi, Dịch vụ của chúng tôi và các yêu cầu của luật áp dụng. Chúng tôi thu thập thông tin mà bạn cung cấp cho chúng tôi, thông tin chúng tôi tự động nhận được khi bạn sử dụng Dịch vụ của chúng tôi, và thông tin từ các nguồn khác như dịch vụ của bên thứ ba và các tổ chức, như được mô tả dưới đây."
                  : "The categories of personal information we collect depend on how you interact with us, our Services and the requirements of applicable law. We collect information that you provide to us, information we obtain automatically when you use our Services, and information from other sources such as third-party services and organizations, as described below."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "3.1. Thông tin bạn cung cấp trực tiếp cho chúng tôi"
                  : "3.1. Information You Provide to Us Directly"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể thu thập thông tin cá nhân sau đây mà bạn cung cấp cho chúng tôi. (a) Dữ liệu sinh trắc học. Tùy thuộc vào riêng của bạn đồng ý chọn tham gia, chúng tôi có thể thu thập dữ liệu sinh trắc học từ bạn bao gồm ảnh và video về khuôn mặt của bạn, bao gồm cả hình học khuôn mặt của bạn. Bạn có thể từ chối việc chúng tôi sử dụng dữ liệu này bất cứ lúc nào bằng cách liên hệ với chúng tôi theo thông tin liên hệ được cung cấp dưới đây trong Mục 15. (b) Tính năng tương tác. Chúng tôi và những người khác sử dụng Dịch vụ có thể thu thập thông tin cá nhân mà bạn gửi hoặc cung cấp thông qua các tính năng tương tác của chúng tôi (ví dụ: nội dung mà bạn chia sẻ và các trang truyền thông xã hội). Bất cứ thông tin nào bạn cung cấp trên các phần công khai của các tính năng này sẽ được coi là “công khai”, trừ khi có yêu cầu khác theo quy định hiện hành pháp luật và không tuân theo các biện pháp bảo vệ quyền riêng tư được tham chiếu ở đây. (c) Mua hàng. Ngay khi FutureLove cho phép bất kỳ mua hàng, chúng tôi có thể thu thập thông tin và chi tiết cá nhân liên quan đến việc mua hàng của bạn, bao gồm cả thông tin thanh toán. Trong một số trường hợp, bạn có thể cần cung cấp thêm cho chúng tôi thông tin để xác minh danh tính của bạn trước khi hoàn thành giao dịch. Mọi khoản thanh toán được thực hiện qua Dịch vụ của chúng tôi đều được xử lý bởi bộ xử lý thanh toán của bên thứ ba. Chúng tôi không trực tiếp thu thập hoặc lưu trữ mọi thông tin thẻ thanh toán được nhập thông qua Dịch vụ của chúng tôi, nhưng chúng tôi có thể nhận được thông tin liên quan đến thẻ thanh toán của bạn thông tin (ví dụ: chi tiết thanh toán của bạn). (d) Của bạn Liên lạc với chúng tôi. Chúng tôi có thể thu thập thông tin cá nhân, chẳng hạn như địa chỉ email và số điện thoại khi bạn yêu cầu thông tin về Dịch vụ của chúng tôi, hãy đăng ký để nhận bản tin hoặc tiếp thị, yêu cầu hỗ trợ khách hàng hoặc kỹ thuật, hoặc liên lạc với chúng tôi. (e) Khảo sát. Chúng tôi có thể liên hệ bạn tham gia vào các cuộc khảo sát. Nếu bạn quyết định tham gia, bạn có thể được yêu cầu cung cấp một số thông tin nhất định có thể bao gồm thông tin cá nhân. (f) Rút thăm trúng thưởng hoặc Cuộc thi. Chúng tôi có thể thu thập thông tin cá nhân mà bạn cung cấp cho bất kỳ cuộc rút thăm trúng thưởng nào hoặc các cuộc thi mà chúng tôi cung cấp. Ở một số khu vực pháp lý, chúng tôi được yêu cầu chia sẻ công khai thông tin về rút thăm trúng thưởng và người chiến thắng cuộc thi."
                  : "3.1. We may collect the following personal information that you provide to us. (a) Biometric Data. Subject to your separate opt-in consent, we may collect biometric data from you including photos and videos of your face, including your facial geometry. You may opt out of our use of this data at any time by contacting us at the contact information provided below in Section 15. (b) Interactive Features. We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., the content that you share and social media pages). Any information you provide on the public sections of these features will be considered “public,” unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein. (c) Purchases. As soon as FutureLove allows any purchases, we may collect personal information and details associated with your purchases, including payment information. In some cases, you may need to provide us with additional information to verify your identity before completing a transaction. Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but we may receive information associated with your payment card information (e.g., your billing details). (d) Your Communications with Us. We may collect personal information, such as email address and phone number when you request information about our Services, register to receive our newsletter or marketing, request customer or technical support, or otherwise communicate with us. (e) Surveys. We may contact you to participate in the surveys. If you decide to participate, you may be asked to provide certain information which may include personal information. (f) Sweepstakes or Contests. We may collect personal information you provide for any sweepstakes or contests that we offer. In some jurisdictions, we are required to publicly share information of sweepstakes and contest winners."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "3.2. Thông tin được thu thập tự động"
                  : "3.2. Information Collected Automatically"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể tự động thu thập thông tin cá nhân khi bạn sử dụng Dịch vụ của chúng tôi: (a) Thu thập dữ liệu tự động. Chúng tôi có thể thu thập một số thông tin nhất định tự động khi bạn sử dụng Dịch vụ của chúng tôi, chẳng hạn như địa chỉ giao thức Internet (IP), cài đặt người dùng, MAC địa chỉ, số nhận dạng cookie, nhà cung cấp dịch vụ di động, quảng cáo trên thiết bị di động và các số nhận dạng duy nhất khác, thông tin về trình duyệt hoặc thiết bị, thông tin vị trí (bao gồm cả vị trí gần đúng được lấy từ từ địa chỉ IP), nhà cung cấp dịch vụ Internet và siêu dữ liệu về nội dung bạn cung cấp có thể cung cấp thông tin chi tiết như vị trí nơi bức ảnh được chụp. Chúng tôi cũng có thể tự động thu thập thông tin liên quan đến việc bạn sử dụng Dịch vụ của chúng tôi, chẳng hạn như các trang bạn truy cập trước, trong và sau khi sử dụng Dịch vụ, thông tin về các liên kết bạn nhấp vào, các loại nội dung bạn tương tác, tần suất và thời lượng của bạn hoạt động, lịch sử sử dụng ứng dụng của bạn và các thông tin khác thông tin về cách bạn sử dụng Dịch vụ của chúng tôi. (b) Cookie, Pixel Thẻ/Đèn hiệu Web và các công nghệ khác. Chúng tôi, cũng như thứ ba các bên cung cấp nội dung, quảng cáo hoặc các nội dung khác chức năng trên Dịch vụ của chúng tôi, có thể sử dụng cookie, thẻ pixel, lưu trữ cục bộ và các công nghệ khác (“Công nghệ”) để tự động thu thập thông tin thông qua việc bạn sử dụng Dịch vụ. Tôi. Bánh quy. Cookies là các tập tin văn bản nhỏ được đặt trong trình duyệt thiết bị lưu trữ các tùy chọn và tạo điều kiện thuận lợi và nâng cao trải nghiệm của bạn. ii. Thẻ Pixel/Đèn hiệu Web. Thẻ pixel (còn được gọi là đèn hiệu web) là một đoạn mã được nhúng trong Các dịch vụ thu thập thông tin về sự tham gia trên của chúng tôi Dịch vụ. Việc sử dụng thẻ pixel cho phép chúng tôi ghi lại, ví dụ: người dùng đã truy cập một trang web cụ thể hoặc đã nhấp vào một quảng cáo cụ thể. Chúng tôi cũng có thể bao gồm web đèn hiệu trong e-mail để biết liệu thư có được gửi hay không đã được mở, thực hiện hoặc chuyển tiếp. Việc chúng tôi sử dụng những Công nghệ này thuộc các loại chung sau: • Về mặt hoạt động Cần thiết. Điều này bao gồm các Công nghệ cho phép bạn truy cập vào Các Dịch vụ, ứng dụng và công cụ của chúng tôi được yêu cầu để xác định hành vi bất thường của trang web, ngăn chặn hoạt động lừa đảo và cải thiện tính bảo mật hoặc cho phép bạn sử dụng chức năng; • Liên quan đến hiệu suất. Chúng tôi có thể sử dụng Công nghệ để đánh giá hiệu suất Dịch vụ của chúng tôi, bao gồm cả việc như một phần của thực tiễn phân tích để giúp chúng tôi hiểu cách các cá nhân sử dụng Dịch vụ (vui lòng xem Analytics bên dưới); • Liên quan đến chức năng. Chúng tôi có thể sử dụng Công nghệ cho phép chúng tôi cung cấp cho bạn những dịch vụ nâng cao chức năng khi truy cập hoặc sử dụng Dịch vụ của chúng tôi. Điều này có thể bao gồm nhận dạng bạn khi bạn đăng nhập vào Dịch vụ của chúng tôi hoặc theo dõi các sở thích, mối quan tâm hoặc quá khứ cụ thể của bạn các mục đã xem; • Liên quan đến Quảng cáo hoặc Nhắm mục tiêu. Chúng tôi có thể sử dụng Công nghệ của bên thứ nhất hoặc bên thứ ba cung cấp nội dung, bao gồm các quảng cáo có liên quan đến sở thích của bạn, trên Dịch vụ của chúng tôi hoặc trên các trang web của bên thứ ba. Vui lòng xem Phần 6 bên dưới để hiểu lựa chọn của bạn liên quan đến các Công nghệ này. (c) Phân tích. Chúng ta có thể sử dụng Công nghệ và các công cụ khác của bên thứ ba để xử lý thông tin phân tích trên Dịch vụ của chúng tôi. Một số phân tích của chúng tôi các đối tác bao gồm Google Firebase. Để biết thêm thông tin, vui lòng truy cập trang web Điều khoản bảo mật của Google. Để tìm hiểu thêm về cách để từ chối việc Google sử dụng thông tin của bạn trên ứng dụng di động của chúng tôi, vui lòng làm theo hướng dẫn được cung cấp trong Điều khoản bảo mật của Google."
                  : "We may collect personal information automatically when you use our Services: (a) Automatic Data Collection. We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), Internet service provider, and metadata about the content you provide which can provide details such as the location of where a picture was taken. We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, your history of using the app history, and other information about how you use our Services. (b) Cookies, Pixel Tags/Web Beacons, and Other Technologies. We, as well as third parties that provide content, advertising, or other functionality on our Services, may use cookies, pixel tags, local storage, and other technologies (“Technologies”) to automatically collect information through your use of our Services. i. Cookies. Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience. ii. Pixel Tags/Web Beacons. A pixel tag (also known as a web beacon) is a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in e-mails to understand whether messages have been opened, acted on, or forwarded. Our use of these Technologies fall into the following general categories: • Operationally Necessary. This includes Technologies that allow you access to our Services, applications, and tools that are required to identify irregular website behavior, prevent fraudulent activity and improve security or that allow you to make use of our functionality; • Performance-Related. We may use Technologies to assess the performance of our Services, including as part of our analytic practices to help us understand how individuals use our Services (please see Analytics below); • Functionality-Related. We may use Technologies that allow us to offer you enhanced functionality when accessing or using our Services. This may include identifying you when you sign into our Services or keeping track of your specified preferences, interests, or past items viewed; • Advertising- or Targeting-Related. We may use first party or third-party Technologies to deliver content, including ads relevant to your interests, on our Services or on third-party websites. Please see Section 6 below to understand your choices regarding these Technologies. (c) Analytics. We may use Technologies and other third-party tools to process analytics information on our Services. Some of our analytics partners include Google Firebase. For more information, please visit the Google Privacy Terms web page. To learn more about how to opt-out of Google’ use of your information on our mobile app, please follow the instructions provided in Google Privacy Terms."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "3.3. Thông tin được thu thập từ các nguồn khác"
                  : "3.3. Information Collected from Other Sources"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Nguồn của bên thứ ba. Chúng tôi có thể lấy thông tin về bạn từ các nguồn khác, bao gồm thông qua các dịch vụ của bên thứ ba và các tổ chức. Ví dụ: nếu bạn truy cập Dịch vụ của chúng tôi thông qua ứng dụng của bên thứ ba, chẳng hạn như cửa hàng ứng dụng, ứng dụng của bên thứ ba dịch vụ đăng nhập hoặc trang mạng xã hội, chúng tôi có thể thu thập thông tin về bạn từ bên thứ ba hoặc bên thứ ba đó ứng dụng mà bạn đã cung cấp thông qua quyền riêng tư của mình cài đặt."
                  : "Third-Party Sources. We may obtain information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect information about you from that third-party or third-party application that you have made available via your privacy settings."}
              </p>
            </section>
            <section id="section4">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "4. CÁCH CHÚNG TÔI SỬ DỤNG THÔNG TIN CỦA BẠN"
                  : "4. HOW WE USE YOUR INFORMATION"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi sử dụng thông tin của bạn cho nhiều mục đích kinh doanh khác nhau, bao gồm cả việc cung cấp Dịch vụ của chúng tôi, cho mục đích quản trị, và tiếp thị các sản phẩm và Dịch vụ của chúng tôi, như được mô tả bên dưới."
                  : "We use your information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "4.1 Cung cấp dịch vụ của chúng tôi"
                  : "4.1 Provide Our Services"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi sử dụng thông tin của bạn để thực hiện hợp đồng của chúng tôi với bạn và cung cấp cho bạn Dịch vụ của chúng tôi, chẳng hạn như: Cung cấp (-) khuôn mặt hoạt ảnh trên ảnh hoặc các tính năng của ảnh và các tính năng tương tự khác Dịch vụ; Quản lý thông tin và tài khoản của bạn; Cung cấp quyền truy cập vào các khu vực, chức năng và tính năng nhất định của chúng tôi Dịch vụ; Trả lời các yêu cầu hỗ trợ khách hàng hoặc kỹ thuật; Trao đổi với bạn về tài khoản của bạn, các hoạt động trên trang của chúng tôi Dịch vụ và thay đổi chính sách; và Xử lý tài chính của bạn thông tin và các phương thức thanh toán khác cho sản phẩm hoặc Dịch vụ đã mua."
                  : "We use your information to fulfill our contract with you and provide you with our Services, such as: Providing face(-s) animation on a photo or a picture features, and other similar Services; Managing your information and accounts; Providing access to certain areas, functionalities, and features of our Services; Answering requests for customer or technical support; Communicating with you about your account, activities on our Services, and policy changes; and Processing your financial information and other payment methods for products or Services purchased."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "4.2 Mục đích hành chính"
                  : "4.2 Administrative Purposes"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi sử dụng thông tin của bạn cho nhiều mục đích quản trị khác nhau, chẳng hạn như: Theo đuổi các lợi ích hợp pháp của chúng tôi như trực tiếp tiếp thị, nghiên cứu và phát triển (bao gồm tiếp thị nghiên cứu), an ninh mạng và thông tin, và gian lận Phòng ngừa; Phát hiện sự cố an ninh, bảo vệ chống lại hoạt động độc hại, lừa đảo, gian lận hoặc bất hợp pháp và truy tố những người chịu trách nhiệm về hoạt động đó; Đo lường quan tâm và tham gia vào Dịch vụ của chúng tôi; Ngắn hạn, nhất thời sử dụng, chẳng hạn như tùy chỉnh quảng cáo theo ngữ cảnh; Nâng cao, nâng cấp hoặc nâng cao Dịch vụ của chúng tôi; Phát triển sản phẩm mới và Dịch vụ; Đảm bảo kiểm soát chất lượng và an toàn nội bộ; Xác thực và xác minh danh tính cá nhân; Gỡ lỗi để xác định và sửa lỗi với Dịch vụ của chúng tôi; Kiểm toán liên quan tới các tương tác, giao dịch và các hoạt động tuân thủ khác; Thực thi các thỏa thuận và chính sách của chúng tôi; và Tuân thủ các quy định của chúng tôi nghĩa vụ pháp lý."
                  : "We use your information for various administrative purposes, such as: Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention; Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity; Measuring interest and engagement in our Services; Short-term, transient use, such as contextual customization of ads; Improving, upgrading or enhancing our Services; Developing new products and Services; Ensuring internal quality control and safety; Authenticating and verifying individual identities; Debugging to identify and repair errors with our Services; Auditing relating to interactions, transactions and other compliance activities; Enforcing our agreements and policies; and Complying with our legal obligations."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "4.3 Tiếp thị và Quảng cáo Sản phẩm và Dịch vụ của chúng tôi"
                  : "4.3 Marketing and Advertising our Products and Services"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể sử dụng thông tin cá nhân để điều chỉnh và cung cấp cho bạn nội dung và quảng cáo. Chúng tôi có thể cung cấp cho bạn những thứ này vật liệu được pháp luật hiện hành cho phép. Một số cách chúng tôi có thể tiếp thị cho bạn bao gồm các chiến dịch email, đối tượng tùy chỉnh quảng cáo và 'quảng cáo dựa trên sở thích' hoặc 'quảng cáo được cá nhân hóa', bao gồm cả thông qua theo dõi thiết bị chéo. Nếu bạn có bất kỳ câu hỏi về thực tiễn tiếp thị của chúng tôi hoặc nếu bạn muốn từ chối sử dụng thông tin cá nhân của bạn để tiếp thị vì mục đích này, bạn có thể liên hệ với chúng tôi bất cứ lúc nào như được nêu trong Phần 15 bên dưới."
                  : "We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law. Some of the ways we may market to you include email campaigns, custom audiences advertising, and “interest-based” or “personalized advertising,” including through cross-device tracking. If you have any questions about our marketing practices or if you would like to opt out of the use of your personal information for marketing purposes, you may contact us at any time as set forth in Section 15 below."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các mục đích khác"
                  : "4.4 Other Purposes"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi cũng sử dụng thông tin của bạn cho các mục đích khác theo yêu cầu của bạn hoặc khi được pháp luật hiện hành cho phép."
                  : "We also use your information for other purposes as requested by you or as permitted by applicable law."}
              </p>
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Bằng lòng"
                  : "Consent."}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể sử dụng thông tin cá nhân cho các mục đích khác được tiết lộ rõ ​​ràng cho bạn tại thời điểm bạn cung cấp thông tin cá nhân thông tin hoặc với sự đồng ý của bạn."
                  : "We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent."}
              </p>
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Thông tin được xác định và tổng hợp."
                  : "De-identified and Aggregated Information."}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể sử dụng thông tin cá nhân và thông tin khác về bạn để tạo thông tin không xác định và/hoặc tổng hợp, chẳng hạn như thông tin nhân khẩu học được xác định lại, vị trí được xác định lại thông tin, thông tin về thiết bị mà bạn truy cập Dịch vụ của chúng tôi hoặc các phân tích khác mà chúng tôi tạo ra."
                  : "We may use personal information and other information about you to create de-identified and/or aggregated information, such as de-identified demographic information, de-identified location information, information about the device from which you access our Services, or other analyses we create."}
              </p>
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chia sẻ nội dung với bạn bè hoặc đồng nghiệp."
                  : "Share Content with Friends or Colleagues."}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Dịch vụ của chúng tôi có thể cung cấp nhiều công cụ và chức năng khác nhau. Vì Ví dụ: chúng tôi có thể cho phép bạn cung cấp thông tin về bạn bè hoặc đồng nghiệp thông qua các dịch vụ giới thiệu của chúng tôi. Của chúng tôi dịch vụ giới thiệu có thể cho phép bạn chuyển tiếp hoặc chia sẻ một số nội dung với bạn bè hoặc đồng nghiệp, chẳng hạn như email mời bạn của bạn sử dụng Dịch vụ của chúng tôi."
                  : "Our Services may offer various tools and functionalities. For example, we may allow you to provide information about your friends or colleagues through our referral services. Our referral services may allow you to forward or share certain content with a friend or colleague, such as an email inviting your friend to use our Services."}
              </p>
            </section>

            <section id="section5">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "5. CÁCH CHÚNG TÔI TIẾT LỘ THÔNG TIN CỦA BẠN"
                  : "5. HOW WE DISCLOSE YOUR INFORMATION"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi sử dụng thông tin của bạn cho nhiều mục đích kinh doanh khác nhau, bao gồm cả việc cung cấp Dịch vụ của chúng tôi, cho mục đích quản trị, và tiếp thị các sản phẩm và Dịch vụ của chúng tôi, như được mô tả bên dưới."
                  : "We use your information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "5.1 Tiết lộ để cung cấp dịch vụ của chúng tôi"
                  : "5.1 Disclosures to Provide our Services"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các loại bên thứ ba mà chúng tôi có thể chia sẻ thông tin của bạn thông tin được mô tả dưới đây. a Người dùng khác hoặc Bên thứ ba. Khi bạn sử dụng Dịch vụ, bạn có thể chọn chia sẻ thông tin cá nhân thông tin hoặc nội dung với người dùng khác hoặc bên thứ ba. TRONG Ngoài ra, một số khía cạnh nhất định trong hồ sơ của bạn có thể được cung cấp cho người dùng khác. b Nhà cung cấp dịch vụ. Chúng tôi có thể chia sẻ thông tin cá nhân của bạn thông tin với các nhà cung cấp dịch vụ bên thứ ba của chúng tôi sử dụng thông tin đó thông tin để giúp chúng tôi cung cấp Dịch vụ của mình. Điêu nay bao gôm các nhà cung cấp dịch vụ cung cấp cho chúng tôi hỗ trợ về CNTT, lưu trữ, xử lý thanh toán, dịch vụ khách hàng và các dịch vụ liên quan. c Đối tác kinh doanh. Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với đối tác kinh doanh để cung cấp cho bạn sản phẩm hoặc dịch vụ mà bạn đã yêu cầu. Chúng tôi cũng có thể chia sẻ thông tin cá nhân của bạn với các đối tác kinh doanh mà chúng ta cùng cung cấp sản phẩm hoặc dịch vụ. d Đối tác quảng cáo. Chúng tôi có thể chia sẻ thông tin cá nhân của bạn thông tin, ngoại trừ dữ liệu sinh trắc học của bạn, với bên thứ ba các đối tác quảng cáo. Các đối tác quảng cáo bên thứ ba này có thể đặt Công nghệ và các công cụ theo dõi khác trên Dịch vụ của chúng tôi thành thu thập thông tin liên quan đến hoạt động và thiết bị của bạn (ví dụ: địa chỉ IP của bạn, số nhận dạng cookie, (các) trang đã truy cập, địa điểm, thời gian trong ngày). Các đối tác quảng cáo này có thể sử dụng thông tin (và thông tin tương tự được thu thập từ các dịch vụ) nhằm mục đích phân phối quảng cáo được cá nhân hóa cho bạn khi bạn truy cập các thuộc tính kỹ thuật số trong mạng của họ. Cách làm này thường được gọi là “dựa trên sở thích quảng cáo” hoặc “quảng cáo được cá nhân hóa”. e API/SDK. Chúng ta có thể sử dụng giao diện chương trình ứng dụng của bên thứ ba (“API”) và bộ công cụ phát triển phần mềm (“SDK”) như một phần của chức năng Dịch vụ của chúng tôi. Để biết thêm thông tin về việc sử dụng API của chúng tôi và SDK, vui lòng liên hệ với chúng tôi theo hướng dẫn bên dưới."
                  : "The categories of third parties with whom we may share your information are described below. a Other Users or Third Parties. When you use the Services, you may choose to share personal information or content with other users or third parties. In addition, certain aspects of your profile may be available to other users. b Service Providers. We may share your personal information with our third-party service providers who use that information to help us provide our Services. This includes service providers that provide us with IT support, hosting, payment processing, customer service, and related services. c Business Partners. We may share your personal information with business partners to provide you with a product or service you have requested. We may also share your personal information with business partners with whom we jointly offer products or services. d Advertising Partners. We may share your personal information, except for your biometric data, with third-party advertising partners. These third-party advertising partners may set Technologies and other tracking tools on our Services to collect information regarding your activities and your device (e.g., your IP address, cookie identifiers, page(s) visited, location, time of day). These advertising partners may use this information (and similar information collected from other services) for purposes of delivering personalized advertisements to you when you visit digital properties within their networks. This practice is commonly referred to as “interest-based advertising” or “personalized advertising.” e APIs/SDKs. We may use third-party application program interfaces (“APIs”) and software development kits (“SDKs”) as part of the functionality of our Services. For more information about our use of APIs and SDKs, please contact us as set forth below."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "5.2 Tiết lộ để bảo vệ chúng tôi hoặc những người khác"
                  : "5.2 Disclosures to Protect Us or Others"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể truy cập, lưu giữ và tiết lộ bất kỳ thông tin nào chúng tôi lưu trữ liên kết với bạn với các bên bên ngoài nếu chúng tôi, với thiện chí, tin rằng làm như vậy là bắt buộc hoặc phù hợp để: tuân thủ pháp luật yêu cầu thực thi hoặc an ninh quốc gia và quy trình pháp lý, chẳng hạn như lệnh của tòa án hoặc trát đòi hầu tòa; bảo vệ bạn, của chúng tôi hoặc của người khác quyền, tài sản hoặc sự an toàn; thực thi các chính sách hoặc hợp đồng của chúng tôi; thu số tiền nợ chúng tôi; hoặc hỗ trợ điều tra hoặc truy tố các hoạt động bị nghi ngờ hoặc thực sự bất hợp pháp."
                  : "We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others’ rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity."}
              </p>
            </section>
            <section id="section6">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "6. LỰA CHỌN VÀ QUYỀN RIÊNG TƯ CỦA BẠN"
                  : "6. YOUR PRIVACY CHOICES AND RIGHTS"}
              </h1>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "6.1. Lựa chọn về quyền riêng tư của bạn"
                  : "6.1. Your Privacy Choices"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các lựa chọn về quyền riêng tư mà bạn có thể có về thông tin cá nhân của mình được xác định theo luật hiện hành và được mô tả dưới đây. (Một) Truyền thông qua Email. Nếu bạn nhận được một email không mong muốn từ chúng tôi, bạn có thể sử dụng liên kết hủy đăng ký ở cuối trang email để từ chối nhận email trong tương lai. Lưu ý rằng bạn sẽ tiếp tục nhận được email liên quan đến giao dịch liên quan đến sản phẩm hoặc dịch vụ mà bạn yêu cầu. Chúng tôi cũng có thể gửi cho bạn một số thông tin liên lạc không mang tính quảng cáo liên quan đến chúng tôi và các dịch vụ và bạn sẽ không thể từ chối các dịch vụ đó thông tin liên lạc (ví dụ: thông tin liên lạc về Dịch vụ của chúng tôi hoặc cập nhật cho Điều khoản sử dụng của chúng tôi hoặc Thông báo về quyền riêng tư này). (b) Văn bản Tin nhắn. Bạn có thể từ chối nhận tin nhắn văn bản từ chúng tôi bằng cách làm theo hướng dẫn trong tin nhắn văn bản bạn đã nhận được từ chúng tôi hoặc bằng cách liên hệ với chúng tôi. (c) Thiết bị di động. Chúng tôi có thể gửi cho bạn thông báo đẩy thông qua ứng dụng di động của chúng tôi. Bạn có thể từ chối nhận các thông báo đẩy này bằng cách thay đổi cài đặt trên thiết bị di động của bạn. Với sự đồng ý của bạn, chúng tôi cũng có thể thu thập thông tin dựa trên vị trí chính xác thông qua ứng dụng di động của chúng tôi. Bạn có thể từ chối bộ sưu tập này bằng cách thay đổi cài đặt trên thiết bị di động của bạn. (d) “Không theo dõi.” Không theo dõi (“DNT”) là tùy chọn quyền riêng tư mà người dùng có thể đặt trong một số trình duyệt web nhất định. Xin lưu ý rằng chúng tôi không phản hồi hoặc tôn trọng các tín hiệu DNT hoặc cơ chế tương tự được truyền bởi trình duyệt web. (e) Cookie và Quảng cáo dựa trên sở thích. Bạn có thể dừng hoặc hạn chế việc đặt Công nghệ trên thiết bị của bạn hoặc xóa chúng bằng cách điều chỉnh tùy chọn của bạn khi trình duyệt hoặc thiết bị của bạn cho phép. Tuy nhiên, nếu bạn điều chỉnh tùy chọn của mình, Dịch vụ của chúng tôi có thể không làm việc đúng cách. Xin lưu ý rằng việc chọn không tham gia dựa trên cookie không hiệu quả trên các ứng dụng di động. Tuy nhiên, bạn có thể chọn không tham gia quảng cáo được cá nhân hóa trên một số ứng dụng di động bằng cách làm theo hướng dẫn dành cho Android, iOS và các hướng dẫn khác. Các Ngành quảng cáo trực tuyến cũng cung cấp các trang web từ đó bạn có thể từ chối nhận quảng cáo được nhắm mục tiêu từ các đối tác dữ liệu và các đối tác quảng cáo khác tham gia vào cơ chế tự quản lý các chương trình. Bạn có thể truy cập những thông tin này và tìm hiểu thêm về mục tiêu quảng cáo và sự lựa chọn cũng như quyền riêng tư của người tiêu dùng bằng cách truy cập Sáng kiến ​​Quảng cáo Mạng, Quảng cáo Kỹ thuật số Alliance, Liên minh quảng cáo kỹ thuật số châu Âu và Liên minh quảng cáo kỹ thuật số của Canada. Xin lưu ý bạn phải chọn không tham gia riêng biệt trong từng trình duyệt và trên từng thiết bị."
                  : "The privacy choices you may have about your personal information are determined by applicable law and are described below. (a) Email Communications. If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or Services you have requested. We may also send you certain non-promotional communications regarding us and our Services, and you will not be able to opt out of those communications (e.g., communications regarding our Services or updates to our Terms of Use or this Privacy Notice). (b) Text Messages. You may opt out of receiving text messages from us by following the instructions in the text message you have received from us or by otherwise contacting us. (c) Mobile Devices. We may send you push notifications through our mobile app. You may opt out from receiving these push notifications by changing the settings on your mobile device. With your consent, we may also collect precise location-based information via our mobile app. You may opt out of this collection by changing the settings on your mobile device. (d) “Do Not Track.” Do Not Track (“DNT”) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers. (e) Cookies and Interest-Based Advertising. You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Services may not work properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt-out of personalized advertisements on some mobile applications by following the instructions for Android, iOS and others. The online advertising industry also provides websites from which you may opt out of receiving targeted ads from data partners and other advertising partners that participate in self-regulatory programs. You can access these and learn more about targeted advertising and consumer choice and privacy by visiting the Network Advertising Initiative, the Digital Advertising Alliance, the European Digital Advertising Alliance, and the Digital Advertising Alliance of Canada. Please note you must separately opt out in each browser and on each device."}
              </p>
            </section>
            <section id="">
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "6.2. Quyền riêng tư của bạn"
                  : "6.2. Your Privacy Rights"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Theo luật hiện hành, bạn có thể có quyền: (a) Yêu cầu quyền truy cập vào dữ liệu cá nhân của bạn: Thường được gọi là “yêu cầu truy cập chủ đề dữ liệu”, điều này cho phép bạn nhận được bản sao dữ liệu cá nhân mà chúng tôi lưu giữ về bạn và để xác minh rằng chúng tôi đang xử lý nó một cách hợp pháp. (b) Yêu cầu chỉnh sửa dữ liệu cá nhân mà chúng tôi lưu giữ về bạn: Điều này cho phép bạn có mọi dữ liệu không đầy đủ hoặc không chính xác mà chúng tôi lưu giữ về bạn đã được sửa chữa, mặc dù chúng tôi có thể cần xác minh tính chính xác của dữ liệu mới mà bạn cung cấp cho chúng tôi. (c) Yêu cầu xóa dữ liệu cá nhân của bạn: Điều này cho phép bạn yêu cầu chúng tôi xóa hoặc loại bỏ dữ liệu cá nhân khi không có lý do chính đáng nào để chúng tôi tiếp tục xử lý nó. Bạn cũng có quyền yêu cầu chúng tôi xóa hoặc xóa thông tin cá nhân của bạn dữ liệu mà bạn đã thực hiện thành công quyền phản đối của mình để xử lý (xem bên dưới), nơi chúng tôi có thể đã xử lý thông tin bất hợp pháp hoặc khi chúng tôi được yêu cầu xóa thông tin của bạn dữ liệu cá nhân để tuân thủ luật pháp địa phương. Tuy nhiên, lưu ý rằng chúng tôi không phải lúc nào cũng có thể đáp ứng yêu cầu xóa của bạn vì lý do pháp lý cụ thể sẽ được thông báo cho bạn nếu áp dụng tại thời điểm bạn yêu cầu. (d) Phản đối xử lý dữ liệu cá nhân của bạn: Điều này áp dụng khi chúng tôi dựa vào lợi ích hợp pháp (hoặc của bên thứ ba) và có điều gì đó về hoàn cảnh cụ thể của bạn khiến bạn muốn phản đối việc xử lý trên cơ sở này, như bạn cảm thấy tác động đến các quyền và tự do cơ bản của bạn. Bạn cũng có quyền phản đối nơi chúng tôi xử lý dữ liệu cá nhân của bạn nhằm mục đích tiếp thị trực tiếp. Trong một số trường hợp, chúng ta có thể chứng minh rằng chúng tôi có cơ sở hợp pháp thuyết phục để xử lý thông tin ghi đè lên các quyền và quyền tự do của bạn. (e) Yêu cầu hạn chế xử lý dữ liệu cá nhân của bạn: Điều này cho phép bạn yêu cầu chúng tôi tạm dừng việc xử lý dữ liệu cá nhân của bạn trong các tình huống sau: i. Nếu bạn muốn chúng tôi thiết lập độ chính xác của dữ liệu; ii. Trường hợp việc sử dụng dữ liệu của chúng tôi là bất hợp pháp nhưng bạn không muốn chúng tôi xóa nó; iii. Nơi bạn cần chúng tôi giữ dữ liệu ngay cả khi chúng tôi không còn yêu cầu dữ liệu đó nữa khi bạn cần thiết lập, thực hiện hoặc bảo vệ các khiếu nại pháp lý; hoặc iv. Bạn có phản đối việc chúng tôi sử dụng dữ liệu của bạn nhưng chúng tôi cần xác minh xem liệu chúng tôi đã ghi đè các căn cứ hợp pháp để sử dụng nó. (f) Yêu cầu chuyển dữ liệu cá nhân của bạn: Chúng tôi sẽ cung cấp thông tin cá nhân của bạn dữ liệu ở định dạng có cấu trúc, được sử dụng phổ biến, có thể đọc được bằng máy để bạn hoặc bên thứ ba mà bạn đã chọn. Xin lưu ý rằng điều này quyền chỉ áp dụng cho thông tin tự động mà ban đầu bạn đã đồng ý cho chúng tôi sử dụng hoặc nơi chúng tôi sử dụng thông tin thực hiện hợp đồng với bạn. (g) Rút lại sự đồng ý: Bạn có thể rút lại sự đồng ý bất cứ lúc nào mà chúng tôi đang dựa vào sự đồng ý xử lý dữ liệu cá nhân của bạn. Tuy nhiên, điều này sẽ không ảnh hưởng đến tính hợp pháp của bất kỳ quá trình xử lý nào được thực hiện trước khi bạn rút tiền sự đồng ý của bạn. Nếu bạn rút lại sự đồng ý của mình, chúng tôi có thể không thể để cung cấp một số sản phẩm hoặc dịch vụ nhất định cho bạn. Chúng tôi sẽ tư vấn bạn nếu trường hợp này xảy ra vào thời điểm bạn rút lại sự đồng ý của mình."
                  : "In accordance with applicable law, you may have the right to: (a) Request access to your personal data: Commonly known as a “data subject access request,” this enables you to receive a copy of the personal data we hold about you and to verify that we are lawfully processing it. (b) Request correction of the personal data that we hold about you: This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us. (c) Request erasure of your personal data: This enables you to ask us to delete or remove personal data where there is no good reason for us to continue processing it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully, or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request for erasure for specific legal reasons, which will be notified to you, if applicable, at the time of your request. (d) Object to processing of your personal data: This applies when we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation that makes you want to object to processing on this ground, as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms. (e) Request restriction of processing of your personal data: This enables you to ask us to suspend the processing of your personal data in the following scenarios: i. If you want us to establish the data’s accuracy; ii. Where our use of the data is unlawful but you do not want us to erase it; iii. Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims; or iv. You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it. (f) Request the transfer of your personal data: We will provide your personal data in a structured, commonly used, machine-readable format to you or a third party you have chosen. Please note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you. (g) Withdraw consent: You may withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent."}
              </p>
            </section>
            <section id="section7">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "7. BẢO MẬT THÔNG TIN CỦA BẠN"
                  : "7. SECURITY OF YOUR INFORMATION"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi thực hiện các bước để đảm bảo rằng thông tin của bạn được xử lý một cách an toàn và phù hợp với Thông báo về quyền riêng tư này. Thật không may, không có hệ thống nào an toàn 100% và chúng tôi không thể đảm bảo hoặc đảm bảo tính bảo mật của bất kỳ thông tin nào bạn cung cấp cho chúng tôi. ĐẾN trong phạm vi tối đa được pháp luật hiện hành cho phép, chúng tôi không chấp nhận trách nhiệm tiết lộ trái phép. Bằng cách sử dụng Dịch vụ của chúng tôi hoặc cung cấp thông tin cá nhân cho chúng tôi, bạn đồng ý rằng chúng tôi có thể liên lạc với bạn bằng điện tử về bảo mật, quyền riêng tư, và các vấn đề hành chính liên quan đến việc bạn sử dụng Dịch vụ của chúng tôi. Nếu chúng tôi biết về hành vi vi phạm hệ thống bảo mật, chúng tôi có thể cố gắng thông báo cho bạn bằng điện tử bằng cách đăng thông báo trên Dịch vụ của chúng tôi, bằng thư hoặc bằng cách gửi email cho bạn."
                  : "We take steps to ensure that your information is treated securely and in accordance with this Privacy Notice. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure. By using our Services or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Services. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Services, by mail or by sending an email to you."}
              </p>
            </section>
            <section id="section8">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "8. CHUYỂN DỮ LIỆU QUỐC TẾ"
                  : "8. INTERNATIONAL DATA TRANSFERS"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Nhiều bên thứ ba bên ngoài của chúng tôi có trụ sở bên ngoài Vương quốc Anh nên việc xử lý dữ liệu cá nhân của bạn sẽ liên quan đến việc chuyển giao dữ liệu bên ngoài nước Anh. Chúng tôi có thể chuyển dữ liệu cá nhân của bạn tới các công ty thuộc tập đoàn của chúng tôi nằm bên ngoài Vương quốc Anh, bao gồm, nhưng không giới hạn ở Hoa Kỳ hoặc các quốc gia khác, nơi có thể có luật bảo vệ dữ liệu khác với luật bạn sống ở đâu. Bất cứ khi nào chúng tôi chuyển dữ liệu cá nhân của bạn ra khỏi Vương quốc Anh, chúng tôi đảm bảo cung cấp mức độ bảo vệ tương tự cho bằng cách đảm bảo ít nhất một trong các biện pháp bảo vệ sau đây được thực hiện đã triển khai: (a) Chúng tôi sẽ chỉ chuyển dữ liệu cá nhân của bạn tới những quốc gia được cho là đã cung cấp đủ mức độ bảo vệ dữ liệu cá nhân. (b) Nơi chúng tôi sử dụng dịch vụ nhất định nhà cung cấp, chúng tôi có thể sử dụng các hợp đồng cụ thể đã được Vương quốc Anh phê duyệt cung cấp cho dữ liệu cá nhân sự bảo vệ tương tự như ở Vương quốc Anh. Hãy liên hệ với chúng tôi nếu bạn muốn biết thêm thông tin về cơ chế cụ thể được chúng tôi sử dụng khi chuyển thông tin cá nhân của bạn dữ liệu ra khỏi Vương quốc Anh."
                  : "Many of our external third parties are based outside the UK so their processing of your personal data will involve a transfer of data outside the UK. We may transfer your personal data to our group companies that are located outside the UK, including, but not limited, in the United States, or other countries, which may have data protection laws that are different from the laws where you live. Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented: (a) We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data. (b) Where we use certain service providers, we may use specific contracts approved by the UK which give personal data the same protection it has in the UK. Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the UK."}
              </p>
            </section>
            <section id="section9">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "9. LƯU TRỮ THÔNG TIN CÁ NHÂN"
                  : "9. RETENTION OF PERSONAL INFORMATION"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi có thể lưu trữ thông tin cá nhân mà chúng tôi thu thập như được mô tả trong Thông báo về quyền riêng tư này trong quá trình bạn sử dụng Dịch vụ của chúng tôi hoặc khi cần thiết để thực hiện (các) mục đích mà nó được thu thập, cung cấp Dịch vụ của chúng tôi, giải quyết tranh chấp, cơ sở pháp lý bảo vệ, tiến hành kiểm toán, theo đuổi các mục đích kinh doanh hợp pháp, thực thi các thỏa thuận của chúng tôi và tuân thủ luật pháp hiện hành. Bất kể những điều đã nói ở trên, chúng tôi có thể lưu trữ dữ liệu sinh trắc học cho ba (3) năm."
                  : "We may store the personal information we collect as described in this Privacy Notice for as long as you use our Services or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable laws. Notwithstanding the foregoing, we may store biometric data for three (3) years."}
              </p>
            </section>
            <section id="section10">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "10. THÔNG BÁO BỔ SUNG DÀNH CHO CƯ DÂN CALIFORNIA"
                  : "10. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Thông báo bổ sung về quyền riêng tư của California này chỉ áp dụng cho việc xử lý thông tin cá nhân tuân theo Đạo luật về quyền riêng tư của người tiêu dùng California năm 2018 (“CCPA”). CCPA cung cấp cho cư dân California quyền được biết những gì các loại thông tin cá nhân của một người (có thể là thông tin tự nhiên cá nhân hoặc pháp nhân) đã thu thập thông tin về họ và liệu người đó tiết lộ thông tin cá nhân đó cho một doanh nghiệp mục đích (ví dụ: đối với nhà cung cấp dịch vụ) trong 12 mục đích trước đó tháng. Cư dân California có thể tìm thấy thông tin này dưới đây:"
                  : "This Supplemental California Privacy Notice only applies to our processing of personal information that is subject to the California Consumer Privacy Act of 2018 (“CCPA”). The CCPA provides California residents with the right to know what categories of personal information a person (either a natural person or a legal entity) has collected about them and whether such person disclosed that personal information for a business purpose (e.g., to a service provider) in the preceding twelve months. California residents can find this information below:"}
              </p>
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Danh mục thông tin cá nhân được công ty thu thập"
                  : "Category of Personal Information Collected by Company"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Mã định danh Các danh mục thông tin cá nhân được liệt kê trong Cal. Dân sự."
                  : "Identifiers Personal information categories listed in Cal. Civ."}
                Code § 1798.80(e) <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Thông tin thương mại"
                  : "Commercial information"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Sinh trắc học"
                  : "Biometric"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Internet hoặc hoạt động mạng điện tử khác"
                  : "Internet or other electronic network activity"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Dữ liệu cảm quan"
                  : "Sensory data"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Dữ liệu vị trí địa lý"
                  : "Geolocation data"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Thông tin chuyên môn hoặc liên quan đến việc làm"
                  : "Professional or employment-related information"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Suy luận rút ra từ thông tin cá nhân khác để tạo ra một hồ sơ về người tiêu dùng"
                  : "Inferences drawn from other personal information to create a profile about a consumer"}
              </p>
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Danh mục thông tin cá nhân của bên thứ ba được tiết lộ cho cho mục đích kinh doanh"
                  : "Categories of Third Parties Personal Information is Disclosed to for a Business Purpose"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các nhà cung cấp dịch vụ"
                  : "Service providers"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Những người dùng khác hoặc bên thứ ba mà bạn chia sẻ"
                  : "Other users or third parties you share with"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Đối tác quảng cáo"
                  : "Advertising partners"}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các loại nguồn mà chúng tôi thu thập thông tin cá nhân thông tin và mục đích kinh doanh và thương mại của chúng tôi để sử dụng thông tin cá nhân được nêu ở trên."
                  : "The categories of sources from which we collect personal information and our business and commercial purposes for using personal information are set forth above."}
              </p>
              <h1 className="mt-11 font-bold text-[25px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Quyền riêng tư bổ sung dành cho cư dân California:"
                  : "Additional Privacy Rights for California Residents:"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "“Bán” Thông tin Cá nhân theo CCPA. Vì mục đích của CCPA, chúng tôi không “bán” thông tin cá nhân và chúng tôi cũng không có kiến thức thực tế về bất kỳ hoạt động “bán” thông tin cá nhân nào của trẻ vị thành niên dưới 16 tuổi."
                  : "“Sales” of Personal Information under the CCPA. For purposes of the CCPA, we do not “sell” personal information, nor do we have actual knowledge of any “sale” of personal information of minors under 16 years of age. "}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Không phân biệt đối xử. Cư dân California có quyền không nhận được sự đối xử phân biệt đối xử từ chúng tôi khi thực hiện quyền của họ các quyền do CCPA cấp."
                  : "Non-Discrimination. California residents have the right not to receive discriminatory treatment by us for the exercise of their rights conferred by the CCPA. "}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Đại lý ủy quyền. Chỉ có bạn hoặc người được ủy quyền hợp pháp để hành động thay mặt bạn, có thể đưa ra yêu cầu có thể kiểm chứng của người tiêu dùng liên quan đến thông tin cá nhân của bạn. Để chỉ định một đại lý được ủy quyền, vui lòng liên hệ với chúng tôi như được nêu dưới đây."
                  : "Authorized Agent. Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. To designate an authorized agent, please contact us as set forth below. "}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Xác minh. Khi bạn đưa ra yêu cầu, chúng tôi sẽ yêu cầu bạn cung cấp đầy đủ thông tin cho phép chúng tôi đưa ra quyết định hợp lý xác minh bạn là người mà chúng tôi đã thu thập thông tin cá nhân thông tin hoặc người đại diện được ủy quyền, có thể bao gồm xác nhận địa chỉ email liên quan đến bất kỳ cá nhân nào thông tin chúng tôi có về bạn."
                  : "Verification. When you make a request, we will ask you to provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include confirming the email address associated with any personal information we have about you. "}
                <br />
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Nếu bạn là cư dân California và muốn thực hiện bất kỳ về các quyền của bạn theo CCPA, vui lòng liên hệ với chúng tôi theo quy định trong Mục 15 dưới đây. Chúng tôi sẽ xử lý các yêu cầu đó theo với pháp luật hiện hành."
                  : "If you are a California resident and would like to exercise any of your rights under the CCPA, please contact us as set forth in Section 15 below. We will process such requests in accordance with applicable laws."}
              </p>
            </section>
            <section id="section11">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "11. THÔNG BÁO BỔ SUNG DÀNH CHO CƯ DÂN NEVADA"
                  : "11. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Nếu bạn là cư dân của Nevada, bạn có quyền từ chối về việc bán một số thông tin cá nhân nhất định cho bên thứ ba, những người có ý định cấp phép hoặc bán thông tin cá nhân đó. Bạn có thể thực hiện quyền này bằng cách liên hệ với chúng tôi như được nêu trong Phần 15 bên dưới với dòng chủ đề “Yêu cầu không bán Nevada” và cung cấp cho chúng tôi tên của bạn và địa chỉ email được liên kết với tài khoản của bạn. Xin lưu ý rằng chúng tôi hiện không bán thông tin cá nhân của bạn khi doanh số bán hàng được xác định tại Nevada Revised Quy chế Chương 603A."
                  : "If you are a resident of Nevada, you have the right to opt-out of the sale of certain personal information to third parties who intend to license or sell that personal information. You can exercise this right by contacting us as set forth in Section 15 below with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. Please note that we do not currently sell your personal information as sales are defined in Nevada Revised Statutes Chapter 603A."}
              </p>
            </section>
            <section id="section12">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "12. THÔNG TIN CHO CÁC BẠN TRẺ"
                  : "12. CHILDREN’S INFORMATION"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Dịch vụ không hướng tới trẻ em dưới 13 tuổi (hoặc trẻ em khác tuổi theo yêu cầu của luật pháp địa phương) và chúng tôi không cố ý thu thập thông tin cá nhân của trẻ em. Nếu bạn biết rằng con bạn đã cung cấp cho chúng tôi thông tin cá nhân mà không có sự đồng ý của bạn, bạn có thể liên hệ với chúng tôi theo cách được nêu trong Phần 15 bên dưới. Nếu chúng ta học rằng chúng tôi đã thu thập thông tin cá nhân của trẻ em trong vi phạm luật hiện hành, chúng tôi sẽ nhanh chóng thực hiện các bước để xóa thông tin đó."
                  : "The Services are not directed to children under 13, (or other age as required by local law), and we do not knowingly collect personal information from children. If you learn that your child has provided us with personal information without your consent, you may contact us as set forth in Section 15 below. If we learn that we have collected a child’s personal information in violation of applicable law, we will promptly take steps to delete such information."}
              </p>
            </section>
            <section id="section13">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "13. TRANG WEB/ỨNG DỤNG CỦA BÊN THỨ BA"
                  : "13. THIRD-PARTY WEBSITES/APPLICATIONS"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Dịch vụ có thể chứa các liên kết đến các trang web/ứng dụng khác và các trang web/ứng dụng khác có thể tham chiếu hoặc liên kết tới trang web/ứng dụng của chúng tôi Dịch vụ. Các dịch vụ của bên thứ ba này không được chúng tôi kiểm soát. Chúng tôi khuyến khích người dùng đọc chính sách quyền riêng tư của từng trang web và ứng dụng mà họ tương tác. Chúng ta không xác nhận, sàng lọc hoặc phê duyệt và không chịu trách nhiệm về các biện pháp bảo mật hoặc nội dung của các trang web khác đó hoặc các ứng dụng. Cung cấp thông tin cá nhân cho bên thứ ba các trang web hoặc ứng dụng là rủi ro của riêng"
                  : "The Services may contain links to other websites/applications and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk."}
              </p>
            </section>
            <section id="section14">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "14. CƠ QUAN GIÁM SÁT"
                  : "14. SUPERVISORY AUTHORITY"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Nếu bạn ở Hà Nội, Việt Nam, bạn có quyền khiếu nại với cơ quan giám sát nếu bạn tin rằng việc chúng tôi xử lý thông tin cá nhân của bạn vi phạm hiện hành pháp luật. Danh sách đầy đủ các cơ quan có thẩm quyền về bảo vệ cá nhân dữ liệu ở mỗi quốc gia thành viên Việt Nam."
                  : "If you are located in the Ha Noi Vietnam, you have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable law. The full list of authorities on the protection of personal data in each Vietnam member state."}
              </p>
            </section>
            <section id="section15">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "15. Ứng dụng của bạn thu thập dữ liệu khuôn mặt nào?"
                  : "15. WHAT face data does your app collect?"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "⇒ Ứng dụng của chúng tôi chụp ảnh khuôn mặt không trang điểm, không đeo kính, không đeo mặt nạ. Ứng dụng của chúng tôi sẽ mất một ảnh nam và 1 ảnh nữ để tạo sự kiện ghép đôi. Hãy xem kết quả hoạt động của chúng tôi tại đây:https://futurelove.online/detail/920980354218/1"
                  : "⇒ Our application takes a photo of a face without makeup, without glasses, without a mask. Our application will take a photo of a man and 1 photo of a woman to create a pairing event. Take a look at our running results here:https://futurelove.online/detail/920980354218/1"}
              </p>
            </section>
            <section id="section16">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "16. Bạn sử dụng dữ liệu khuôn mặt đã thu thập như thế nào? Cung cấp đầy đủ và giải thích rõ ràng về tất cả các kế hoạch sử dụng dữ liệu này."
                  : "16. How do you use the collected face data? Provide a complete and clear explanation of all planned uses of this data."}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "⇒ Ứng dụng của chúng tôi sẽ chụp ảnh chính diện khuôn mặt, xây dựng Mô hình 3D của nó, sau đó hoán đổi khuôn mặt thành một bức ảnh khác. Lưu ý rằng chúng tôi sẽ không lưu trữ khuôn mặt, chúng tôi sẽ tải ảnh lên máy chủ tạm thời. Nó sẽ dùng để tạo phương thức và trao đổi khuôn mặt, chúng tôi không lưu trữ dữ liệu hình ảnh trong một thời gian dài. Những khuôn mặt này hình ảnh sẽ bị xóa ngay sau khi người dùng tải xuống hoặc đóng ứng dụng."
                  : "⇒ Our application will take a frontal photo of the face, build a 3D model of it, then swap the face into another photo. Note that we will not store the face, we will upload the photo to a temporary server. It will serve to generate modal and swap faces, we do not store images data for a long time. These face images will be deleted immediately after users download or close the application."}
              </p>
            </section>
            <section id="section17">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "17. Dữ liệu có được chia sẻ với bất kỳ bên thứ ba nào không? Nơi sẽ thông tin này có được lưu trữ không?"
                  : "17. Will the data be shared with any third parties? Where will this information be stored?"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "⇒ Chúng tôi không chia sẻ dữ liệu người dùng với bất kỳ bên thứ ba nào, trừ khi người dùng muốn làm điều đó thông qua bất kỳ ứng dụng nào khác như phương tiện truyền thông xã hội. Thông tin này được lưu trữ trong thiết bị của người dùng. Chúng tôi sẽ chỉ tạm thời lưu trữ dữ liệu này trên một máy chủ trung gian và nếu người dùng không muốn người khác lưu trữ dữ liệu này trong tương lai, họ có thể xóa nó."
                  : "⇒ We do not share user data with any third parties, unless users want to do that via any other application like social media. This information is stored in the user's device. We will only temporarily store this data on an intermediary server and if the user does not want anyone else to store this data in the future, they can delete it."}
              </p>
            </section>
            <section id="section18">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "18. Dữ liệu khuôn mặt sẽ được lưu giữ trong bao lâu?"
                  : "18. How long will face data be retained?"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "- Dữ liệu khuôn mặt sẽ được lưu trữ nếu người dùng muốn, ứng dụng của chúng tôi logic là cho phép người dùng lưu trữ danh sách các sự kiện liên kết web do AI tạo ra để người dùng có thể chia sẻ trực tuyến, sẻ chia yêu thương giữa mọi người. 2 người, chia sẻ cho bạn bè cùng quan tâm nhé có thể được lưu trong 3-4 tháng theo quyền của người dùng, nếu người dùng xóa tài khoản thì tài khoản sẽ bị mất, dữ liệu sẽ biến mất nếu người dùng xóa tài khoản"
                  : "- Face data will be stored if the user wishes, our application logic is to allow users to store a web link list of events created by AI so that users can share online, share love between people. 2 people, to share with friends who are interested, it may be saved for 3-4 month as the user's right, if the user deletes the account, it will be lost, the data will disappear if the user deletes the account"}
              </p>
            </section>
            <section id="section19">
              <h1 className="mt-11 font-bold text-[40px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "19. LIÊN HỆ VỚI CHÚNG TÔI"
                  : "19. CONTACT US"}
              </h1>
              <p className="text-[25px] mt-4">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Công ty Thinkdiff AI là người kiểm soát hoạt động cá nhân của bạn thông tin. Nếu bạn có bất kỳ câu hỏi nào về quyền riêng tư của chúng tôi thực tiễn hoặc Thông báo về quyền riêng tư này hoặc để thực hiện các quyền của bạn với tư cách là được nêu chi tiết trong Thông báo về quyền riêng tư này, vui lòng liên hệ với chúng tôi tại:"
                  : "Thinkdiff AI Company is the controller of your personal information. If you have any questions about our privacy practices or this Privacy Notice, or to exercise your rights as detailed in this Privacy Notice, please contact us at:"}{" "}
                <br />
                Thinkdiff AI Company <br />
                30Louis7 Louis City Dai Mo, Nam Tu Liem Ha Noi Vietnam
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
