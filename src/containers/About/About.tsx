import * as React from 'react';

const About = () => {
  const image = 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/1d3ae6a90cc2d3a9d53e6dd38599d9ae/960x540';
  return (
    <div className="container mt-4">
      <h1>About us</h1>

      <p><strong>«Рик и Морти» </strong>— научно-фантастический анимационный сериал, созданный Дэном Хармоном и Джастином Ройландом для телеканала Cartoon Network. Сериал рассказывает о приключениях гениального учёного Рика Санчеза и его внука Морти Смита.</p>
      <p><strong>Рик Санчес</strong> (озвучил Джастин Ройланд, позднее Иэн Кардони) (англ. Rick Sanchez C-137) — один из двух главных героев, гениальный учёный возрастом около 70 лет, алкоголик с постоянной отрыжкой. Скептик, крайне циничен, ворчлив, эгоистичен, но не лишён чувства юмора. Атеист (хотя в некоторых сериях даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает Его существование). Панически боится пиратов. Из-за своей гениальности нажил себе немало врагов во всей Вселенной. Недавно переехал к своей дочери в семью Смитов; с тех пор почти во все путешествия отправляется со своим внуком Морти.</p>
      <p><strong>Морти Смит </strong>(озвучил Джастин Ройланд, позднее Гарри Белден) (англ. Morty Smith) — второй главный герой, внук Рика, мальчик 14 лет, обычный подросток. Путешествуя с дедом, часто не понимает, что происходит, но периодически проявляет смекалку. Влюблён в Джессику. После уничтожения населения родной планеты Земли в результате «кроненбергизации», перебрался вместе с Риком в измерение, где их версии погибли при неудачном эксперименте Рика. Было ещё несколько переходов в другие измерения, о чём говорят записанные воспоминания Морти. Были ли они до событий «кроненбергизации» неизвестно.</p>
      <img src={image} alt='rick and morty' style={{ width: '50%' }} className="mt-5 mb-5" />
      <p>Во многих сериях поднимаются темы личной ответственности и оправданности риска. Безобидная шалость может обернуться катастрофой, попытка спасти невиновного — геноцидом, а героизм оказывается бессмысленным. Иногда Рик пытается отговорить других от необдуманных поступков, но недостаточно убедительно. Иногда Рик сам становится причиной проблем из-за гордости, самоуверенности, конфликтов с правительством, межпланетной мафией или версиями себя из параллельных реальностей.</p>
    </div>
  );
};

export default About;