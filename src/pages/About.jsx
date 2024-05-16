import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="Hakkımızda">
      <CommonSection title="Hakkımızda" />
      <div className="about__container">
        <section className="about">
          <p className="about-p">
            Hoş Geldiniz! <br /> İş dünyasında profesyonel görünmek ve güvenilir
            bir imaj çizmek her zaman önemlidir. İşte tam da bu noktada, size en
            uygun iş elbisesini bulmanıza yardımcı olmak için buradayız. Vortex,
            iş dünyasının taleplerine uygun, kaliteli ve şık iş elbiseleriyle
            dolu bir dünyanın kapılarını size açıyor.
            <br />
            <br /> Her işyerinin kendine özgü bir tarzı ve gereksinimleri
            vardır. Biz de bu bilinciyle, geniş ürün yelpazemizde her türden iş
            ortamına uygun seçenekler sunuyoruz. Ofis toplantılarından önemli
            sunumlara, iş gezilerinden kurumsal etkinliklere kadar,
            ihtiyaçlarınızı karşılayacak mükemmel seçenekleri bulmak için
            sizleri bekliyoruz.
            <br />
            <br /> Müşteri memnuniyeti ve kalite odaklı hizmet anlayışımızla, iş
            elbiselerindeki en son trendleri takip ediyor ve sizlere güvenilir
            markaların en kaliteli ürünlerini sunuyoruz. Tarzınıza ve
            ihtiyaçlarınıza uygun olanı seçerken size profesyonel ve samimi bir
            destek sunmak için buradayız.
            <br />
            <br /> Sitemizde gezerken, ihtiyacınız olan iş elbisesini bulmakta
            kolaylık yaşayacaksınız. Ürünlerimizi incelemek ve sizin için en
            uygun olanı seçmek için hazır mısınız? Eğer herhangi bir sorunuz
            veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin. Size
            yardımcı olmaktan memnuniyet duyarız.
            <br />
            <br /> Vortex ailesi olarak, profesyonelliğinizi ve stilinizi
            yansıtan iş elbiseleriyle sizleri buluşturmak için
            sabırsızlanıyoruz. Sizi aramızda görmek için sabırsızlanıyoruz!
            <br />
            <br />
            Saygılarımızla, Vortex Ekibi
          </p>
        </section>
      </div>
    </Helmet>
  );
};

export default About;
