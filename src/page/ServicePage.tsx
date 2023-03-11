import React from "react";
import designerImg from "../assets/design.jpg";
import ironWorkerImg from "../assets/ironWorkers.jpg";
import transportionImg from "../assets/transportion.jpg";
import Service from "../Components/Service";
const design = "დიზაინი";
const designText =
  "არ გაქვთ არჩეული დიზაინი? მაშინ ჩვენი დიზაინერი დაგეხმარებათ საუკეთესო ვარიანტის შექმნაში.ჩვენ შეგვიძლია შემოგთავაზოთ ინტერიერზე მორგებული კარის, ვიტრაჟის მაგიდის თუ ნებისმიერი სხვა რკინის კონსტრუქციის ნაწარმი";

const ironWork = "შედუღება";
const ironWorkText =
  "კომპანია DA Design არის შემდგარი პროფესიონალი შემდუღებლებისგან, რომლებიც ორიენტირებული არიან მაღალ ხარისხზე და რაც შეიძლება უმოკლეს დღოში შეკვეთის ჩაბარებაზე.თქვენი სურვილის გათვალისწინებით და ჩვენი ხელოსნების რჩევით, შეიქმნება სანდო და პრაკტიკული ნაკეთობა.";

const assemblyAndTransportion = "მონტაჟი & ტრანსპორტირება";
const assemblyAndTransportionText =
  "ტრანსპორტირება მონტაჟის საფასურში შედის მხოლოდ იმ შემთხვევაში თუ ჩაბარების ლოკაცია თბილისია. სხვა შემთხვევაში ტრანსპორტირების ხარჯი ითვლება ინდივიდუალურად";

const ServicePage = () => {
  return (
    <div>
      <Service
        headerText={ironWork}
        bodyText={ironWorkText}
        image={ironWorkerImg}
      />
      <Service headerText={design} bodyText={designText} image={designerImg} />
      <Service
        headerText={assemblyAndTransportion}
        bodyText={assemblyAndTransportionText}
        image={transportionImg}
      />
    </div>
  );
};

export default ServicePage;
